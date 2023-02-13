import { createContext, useState } from 'react';


export const CartContext = createContext()

export const CartProvider = ({children}) => { 
    const [cart, setCart] = useState([])
    
    
    const addItem = (productToAdd) => { 
        if(!isInCart(productToAdd.id)) { 
            setCart([...cart, productToAdd])
        }
    }
    
    const isInCart = (id) => { 
        return cart.some(product => product.id === id)
    }
    
    const removeItem = (id) => { 
        const updatedCart = cart.filter(product => product.id !== id)
        setCart(updatedCart)
    }

    const getQuantity = () => {
        let totalQuantity = 0
        cart.forEach(product => {
            totalQuantity += product.quantity
        })
        return  totalQuantity
        
    }

    return ( 
        <CartContext.Provider value = {{cart, addItem, removeItem, isInCart, getQuantity}}> 
            {children}
        </CartContext.Provider>
    )
}