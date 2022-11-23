import "./Navbar.css"
import CartWidget from "./CartWidget/CartWidget";

const Navbar = () => {

    return(
        <nav className = 'navbar'>
            <img className='logo' src={"./images/logo.jfif"}></img>
            <button className='boton'>Home</button>
            <button className='boton'>Catalog</button>
            <button className='boton'>Contact</button>
            <button className='boton'>Login</button>
            <CartWidget />
        </nav>
    )
}

export default Navbar;