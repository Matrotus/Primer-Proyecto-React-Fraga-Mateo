import { useContext, useState } from "react"
import '../Checkout/Checkout.css'
import { CartContext } from "../../context/CartContext"
import{addDoc, collection, doc,getDocs,query, where, documentId, writeBatch} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
import { async } from "@firebase/util"
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Checkout = () => { 

    const {cart, getTotal, clearCart} = useContext(CartContext)
    
    const [loading, setLoading] = useState(false)
    
    const [nombre, setNombre] = useState(" ")
    
    const [tel, setTel] = useState(" ")
    
    const [email, setEmail] = useState(" ")

    const notifyError = () => toast("There're products out of stock")
    const navigate = useNavigate()
    

    const handleSubmit = e => { 
        e.preventDefault()
    }
    
    const handleCreateOrder = async () => {
        setLoading(true)

        try {
            const objOrder = { 
                buyer: {
                    name: nombre,
                    phone: tel,
                    email: email
                },
                items: cart,
                total: getTotal()
            }
    
            const batch = writeBatch(db)
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
    
            const outOfStock = []
    
            const {docs} = productsAddedToCartFromFirestore
            
            docs.forEach(doc => { 
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const productQuantity = productAddedToCart?.quantity
                
                if(stockDb >= productQuantity) { 
                    batch.update(doc.ref, {stock:stockDb - productQuantity})
                } else { 
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
            if(outOfStock.length === 0) { 
                await batch.commit()
                
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc (orderRef, objOrder)
                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000);


                console.log(orderAdded.id)
            } else { 
                notifyError()
                
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    } 
        
    if(loading) { 
        return <h1>Generating order...</h1>
    }

    
    
    return (
        <div>
            <h1 className="title-checkout">Checkout</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="labelsForm">
                    <h2>Email:</h2>
                    <input value={email} onChange = {(e) => setEmail(e.target.value)}  className="inputCheckout"/>
                
                
                    <h2>Nombre:</h2>
                    <input value={nombre} onChange = {(e) => setNombre(e.target.value)} className="inputCheckout"/>

                    <h2>Telefono:</h2>
                    <input value={tel} onChange = {(e) => setTel(e.target.value)} className="inputCheckout"/>
                    <button type="submit" className="btn-confirmOrder" onClick={handleCreateOrder}>Confirmar compra</button>
                </div>
                
                    
                
            </form>
            

        </div>
    )
}
export default Checkout