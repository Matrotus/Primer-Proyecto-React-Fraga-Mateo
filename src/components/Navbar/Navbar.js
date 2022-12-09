import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {

    return(
        <nav className = 'navbar'>
            <img className='logo' src={"./images/logo.jfif"}></img>
            <button className='boton'>Home</button>
            <button className='boton'>All</button>
            <button className='boton'>Phones</button>
            <button className='boton'>Tablets</button>
            <CartWidget />
        </nav>
    )
}

export default Navbar;