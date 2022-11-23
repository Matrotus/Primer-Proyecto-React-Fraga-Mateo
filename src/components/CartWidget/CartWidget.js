import '../Navbar.css'
const CartWidget = () => {
    return(
        <button class ="CarritoBoton">
            <div class = "Cart">
            <img class="CartSvg" src={"./images/cart.svg"} alt = 'cart-widget'/>
            <p>14</p>
            </div>
            
            
        </button>
    )
}
export default CartWidget