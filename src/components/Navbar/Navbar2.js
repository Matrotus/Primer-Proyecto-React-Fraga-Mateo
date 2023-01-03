import "./Navbar.css"
import Button from "../Button/Button"
const Navbar2 = (props) => { 
    
const handleOnClick = () => { 
    alert('hice click')
}    
const handleOnClick2 = () => { 
    alert('hice otro click')
} 
const handleOnClick3 = () => { 
    alert('NO MAS CLICKS!!!')
}   
    return ( 
        <nav className="navbar">
            <h1 style={{color: props.colorTitle, backgroundColor:"white"}}>Avicii</h1>
            <Button func = {handleOnClick}>Home</Button>
            <Button func = {handleOnClick2}>About</Button>
            <Button func = {handleOnClick3}>Contact</Button>
        </nav>
    )
}

export default Navbar2