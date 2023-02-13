import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./cart.css"
import { Link } from "react-router-dom"



const Cart = () => { 
    const { cart, getTotal, removeItem } = useContext(CartContext)
    const total = getTotal()
    return (
        <div>
            { 
                cart.map(product => { 
                    return(
                        
                        <div key={product.id} className="CardProduct">
                            
                            <img className="imgProductoCarrito" src = {product.img}/>
                            <h2>{product.name}</h2>
                            <h2> ${product.price}</h2>
                            <h2>Quantity: {product.quantity}</h2>
                            <h2>Subtotal: {product.price * product.quantity}</h2>
                            <button className="btn-delete" onClick={()=> removeItem(product.id)}>X</button>
                        </div>
                    )
            })
        } <div  className="finalizar-compra">
            <h1>Total: ${total}</h1>
            <Link className="btn-finalizar-compra" to ='/checkout'>Finalizar compra</Link>
            </div>   
           
        </div>
    )
}
export default Cart