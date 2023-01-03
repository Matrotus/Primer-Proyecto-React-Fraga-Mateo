import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
const ItemListContainer = () => {
        const [products,setProducts] = useState ([])

        const {categoryId} = useParams()
        
        useEffect (() => { 

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : query(collection(db, 'products'), orderBy('price', 'desc'))


        getDocs(collectionRef).then(response => {
                const adaptedProducts = response.docs.map(doc => { 
                        const data = doc.data()

                        return {id: doc.id, ...data}
                })
                
                setProducts(adaptedProducts)
        })
                
                

        }, [categoryId])

        return ( 
                <div>
                        <h1>Listado de productos</h1>
                        <ItemList products={products} />

                </div>
        )
}



export default ItemListContainer