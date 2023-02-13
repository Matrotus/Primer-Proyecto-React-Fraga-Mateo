import "./Navbar.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {

    const { AddedProducts } = useContext(CartContext)
    const{user} = useContext(AuthContext)
    const {getQuantity} = useContext(CartContext)
    const totalQuantity = getQuantity()

    return(
        <nav className = 'navbar'>
            <img className='logo' src={"../images/Apple.png"}></img>
            <NavLink to= '/' className={({isActive}) => isActive ? 'BotonActive' : 'boton'} >All</NavLink>
            <NavLink to= '/category/celular' className={({isActive}) => isActive ? 'BotonActive' : 'boton'} >Phones</NavLink>
            <NavLink to= '/category/tablet' className={({isActive}) => isActive ? 'BotonActive' : 'boton'} >Tablets</NavLink>
            {user &&
                <Link to = '/productsOnCart'>
                    <img className="CartSvg" src={"./images/cart.svg"}></img> {totalQuantity}
                </Link>
            }
            <Link className="login-btn" to='./login'>Login</Link>
        </nav>
    )
}

export default Navbar;