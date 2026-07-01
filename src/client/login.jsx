import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style/login_signUp.css'

function LoginPage()
{
    const [formData, setformData] = useState({username: '', password: ''})
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setformData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setError("");
        setSuccess("")

        if(!formData.username || !formData.password){
            setError("All fields are required")
            return;
        }

        const users = JSON.parse(localStorage.getItem("saloon_users") || '[]');
        const user = users.find(u => u.username === formData.username && u.password === formData.password);

        if(user)
        {
            localStorage.setItem("currentUser", JSON.stringify(user))
            navigate("/dashboard")
            return
        }else{
            setError("Invalid username or password")
            return
        }
    };

    return(
            <div className="container"> 
                <div className="block">
                    <h5>Client Login Page</h5>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Name</label>
                        <input type="text" 
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="name: Alain Prince "
                        />

                        <label htmlFor="password">Password</label>
                        <input type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password: ****"
                        />

                        <button type="submit">LOGIN</button>

                        <p style={{fontSize: 'small', textAlign: 'right'}}>Don't have account ? Go on  
                            <Link to="/register"> SignUp Page</Link>
                        </p>
                    </form>
                    <p>
                        <span className="error">{error}</span>
                        <span className="success">{success}</span>
                    </p>
                </div>
            </div>
    );
}
export default LoginPage