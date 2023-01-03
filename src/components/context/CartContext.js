import { createContext, useState } from 'react';


export const CartContext = createContext()

export const CartProvider = ({children}) => { 
    const [AddedProducts, setAddedProducts] = useState([])
    
    
    const addProduct = (productToAdd) => { 
        if(!isInAddedProducts(productToAdd.id)) { 
            setAddedProducts([...AddedProducts, productToAdd])
        }
        }
    const isInAddedProducts = (id) => { 
        return AddedProducts.some(product => product.id === id)
    }
    const removeItem = (id) => { 
        const updatedCart = AddedProducts.filter(product => product.id !== id)
        setAddedProducts(updatedCart)
    }
    
    return ( 
        <CartContext.Provider value = {{AddedProducts, addProduct, removeItem, isInAddedProducts}}> 
            {children}
        </CartContext.Provider>
    )
}