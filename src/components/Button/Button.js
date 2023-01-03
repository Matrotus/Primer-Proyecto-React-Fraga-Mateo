const Button = (props) => { 
    return <button onClick={props.func} className="boton">{props.children}</button>
}

export default Button