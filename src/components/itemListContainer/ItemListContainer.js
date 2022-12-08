import { useState, useEffect } from "react"

const ItemListContainer = () => {
        const [products,setProducts] = useState ([])

        useEffect (() => { 
                getProducts()
                .then(response => { 
                        setProducts(response)
                })
                .catch(error => { 
                        console.log(error);
                })
        }, [])

        return ( 
                <div>
                        <h1>Listado de productos</h1>
                        <ItemList products={products} />

                </div>
        )
}















// const ItemListContainer = ({ greeting }) => {

//         return <h1>{greeting}</h1>
// }

export default ItemListContainer