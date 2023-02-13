import {useState, useEffect, useContext} from 'react'
import { useParams} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import {doc, getDoc, query,where} from "firebase/firestore"
import {db} from '../../services/firebase/firebaseConfig'
// import Button from '../Button/Button';
import Counter from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})   
    const {productId} = useParams()
    const notify = (quantity) => {
            
        if(quantity >0){
                toast("Added to Cart (" +quantity +')')
            }else{
                toast("Please select quantity to proceed!")
            }
                } 
    
    
    
    const handleOnAdd = (quantity) => { notify(quantity)}
    


    const {addProduct, isInAddedProducts, removeItem} = useContext(CartContext)

    useEffect(() =>{ 
        
        const docRef = doc(db, 'products', productId )
        getDoc(docRef).then(doc => {
            const data = doc.data()
            const adaptedProduct = {id: doc.id, ...data}

            setProduct(adaptedProduct)
        })

        }, [productId])


    
    

    return (
        <div className='tarjeta'>
                <img width={400} src={product.img}/>
                <h3>{product.name}</h3>
                <p> ${product.price}</p>
                <Counter initial={0} stock={15} onAdd={handleOnAdd}/>
                <ToastContainer />
                        
        </div>
)
}

export default ItemDetailContainer;