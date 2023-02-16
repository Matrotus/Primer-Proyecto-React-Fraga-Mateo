import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import '../Login/Login.css'


const Login = () => { 
    
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const {user, login, logout} = useContext(AuthContext)
    
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        login({ username, password })
    }

    if(user) { 
        return (
            <div>
                <h1>Logout</h1>
                <button onClick={()=> logout()}>Logout</button>
            </div>
       
        )
    }

    return ( 
        <div>
            
            <form className="form-login" onSubmit = {handleSubmit}>
                <h1 className="title-login">Login</h1>
                <h3 className="id-login">Username:</h3>
                <input className="input-login" value={username} onChange ={(e) => setUserName(e.target.value)}/>
                <h3 className="id-login">Password:</h3>
                <input  className="input-login" value={password} onChange ={(e) => setPassword(e.target.value)}/>
                <button className="btn-login" type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login