import { useContext } from "react"
import { CartProvider } from "../../context/CartContext"
import "./cart.css"
import { Link } from "react-router-dom"



const Products = () => { 
    const { AddedProducts } = useContext(CartProvider)

    return (
        <div>
            { AddedProducts.map(product => { 
                return(
                    
                    <div key={product.id} className="CardProduct">
                        
                        <img className="imgProductoCarrito" src = {product.img}/>
                        <h2>{product.name}</h2>
                        <p> ${product.price}</p>
                    </div>
                )
            })
        }

            <Link to ='/checkout'>Finalizar compra</Link>

        </div>
    )
}
export default Products