import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
const ItemListContainer = () => {
        const [products,setProducts] = useState ([])
        const [loading, setLoading] = useState(true)
        const {categoryId} = useParams()
        
        useEffect (() => { 
        setLoading(true)
        const productsRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : query(collection(db, 'products'), orderBy('price', 'desc'))


        getDocs(productsRef)
                .then(response => {
                        const adaptedProducts = response.docs.map(doc => { 
                        const data = doc.data()

                        return {id: doc.id, ...data}
                })
                
                setProducts(adaptedProducts)
        }).catch(error => {
                console.log(error)
        })
        .finally(()=> { 
                setLoading(false)
        })
                
                

        }, [categoryId])

        if(loading) { 
                return <img></img>
        }

        return ( 
                <div>
                        <h1 className="title-list">Listado de productos</h1>
                        <ItemList products={products} />

                </div>
        )
}



export default ItemListContainer