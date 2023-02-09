import {useState, useEffect, useContext} from 'react'
// import {getProductById} from '../../asyncMock'
import { useParams} from 'react-router-dom'
import { CartContext} from '../../components/context/CartContext';
import {doc, getDoc, query,where} from "firebase/firestore"
import {db} from '../../services/firebase/firebaseConfig'
import Button from '../Button/Button';





const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})   
    const {productId} = useParams()


    const {addProduct, isInAddedProducts, removeItem} = useContext(CartContext)

    useEffect(() =>{ 
        
        const docRef = doc(db, 'products', productId )
        getDoc(docRef).then(doc => {
            const data = doc.data()
            const adaptedProduct = {id: doc.id, ...data}

            setProduct(adaptedProduct)
        })

        }, [productId])

    const [count, setCount] = useState(0)
    const handleClick = (e) => {
        setCount(prev=> prev + 1)
    }

    const decrement = () => { 
        if(count >=1){
            setCount(count-1)
        }
    }

    const isAdded = isInAddedProducts(product.id) 


    return (
        <div>
                <img src={product.img}/>
                <h3>{product.name}</h3>
                <p> ${product.price}</p>
                <section className='addProduct'>
                        <button onClick={handleClick} className ="botonDetail"> + </button>
                        <button className ="botonDetail">{count}</button>
                        <button className ="botonDetail" onClick ={decrement}> - </button>                       
                        <button className ="botonDetail" onClick={() => { isAdded ? removeItem(product.id) : addProduct(product)}}>{ isAdded ? 'Quitar del Carrito' : ' Agregar al carrito'}</button>
                </section>
                
        </div>
)
}

export default ItemDetailContainer;