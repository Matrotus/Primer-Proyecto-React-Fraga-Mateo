import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import{addDoc, collection} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
const Checkout = () => { 

    const {AddedProducts} = useContext(CartContext)
    
    const [nombre, setNombre] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [tel, setTel] = useState(" ")

    const handleSubmit = e => { 
        e.preventDefault()
    }
    
    const handleCreateOrder = () => { 
        const objOrder = { 
            buyer: {
                name: setNombre(),
                email: setEmail(),
                phone: setTel()
            },
            items: AddedProducts
            // total:
        }

        const orderRef = collection(db, 'orders')

        addDoc(orderRef,objOrder)
            .then(response => {
                console.log(response.id)
            })
        
    }
    
    
    
    return (
        <div>
            <h1 className="title-checkout">Checkout</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="labelsForm">
                    <h2>Email:</h2>
                    <input className="inputCheckout" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                
                
                    <h2>Nombre:</h2>
                    <input className="inputCheckout" onChange= {(e) => setNombre(e.target.value)} value={nombre}></input>

                    <h2>Telefono:</h2>
                    <input className="inputCheckout" onChange={(e) => setTel(e.target.value)}  value={tel}></input>
                    <button className="btn" onClick={handleCreateOrder}>Confirmar compra</button>
                </div>
                
                    
                
            </form>
            

        </div>
    )
}
export default Checkout