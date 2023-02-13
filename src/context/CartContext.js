import { createContext, useState } from 'react';


export const CartContext = createContext([])

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
    const clearCart = () => { 
        setCart([])
    }
    const getQuantity = () => {
        let totalQuantity = 0
        cart.forEach(product => {
            totalQuantity += product.quantity
        })
        return  totalQuantity
        
    }

    const getTotal = () => {
        let acc = 0
        cart.forEach(prod => { 
            acc += prod.quantity * prod.price
        })
        return acc
    }
    return ( 
        <CartContext.Provider value = {{cart, addItem, removeItem, isInCart, getQuantity, getTotal, clearCart}}> 
            {children}
        </CartContext.Provider>
    )
}