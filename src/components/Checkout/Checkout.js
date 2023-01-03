import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import{addDoc, collection} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
const Checkout = () => { 

    const {AddedProducts} = useContext(CartContext)
    
    
    
    const handleCreateOrder = () => { 
        const objOrder = { 
            buyer: {
                name: 'Mateo Fraga',
                email: 'mateou@gmail.com',
                phone: 2345456
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
            <h1>Checkout</h1>
            <button onClick={handleCreateOrder}>Confirmar compra</button>

        </div>
    )
}
export default Checkout