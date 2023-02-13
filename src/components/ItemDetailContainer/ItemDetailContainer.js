import {useState, useEffect, CSSProperties} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { useParams} from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore"
import {db} from '../../services/firebase/firebaseConfig'
import ItemDetail from '../ItemDetail/ItemDetail'

import 'react-toastify/dist/ReactToastify.css';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})   
    const [loading, setLoading] = useState(true)
    let [color, setColor] = useState("#ffffff");

    const {productId} = useParams()
  
    




    useEffect(() =>{ 
        
        const docRef = doc(db, 'products', productId )
        getDoc(docRef)
            .then( response => {
                const data = response.data()
                const adaptedProduct = {id: response.id, ...data}

            setProduct(adaptedProduct)
        })
            .catch(error => {
            console.log(error)
        })
            .finally(()=>{
                setLoading(false)
            })
        }, [productId])

    if(loading) { 
        return (
            <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
/>

        )
    }
    
    

    return (
        <div>
            <h1 className='title-detail'>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;