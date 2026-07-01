import { useState } from "react";
import { Link } from 'react-router-dom';
import '../style/login_signUp.css'

function Register()
{

    const [formData, setformData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: ''
        });
    const [error, setError]= useState("")
    const [success, setSuccess] = useState("")

    const handleChange = (e) =>{
        setformData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setError("")
        setSuccess("")
            
        if (!formData.username || !formData.email || !formData.phoneNumber || !formData.password) {
        setError("All fields are required");
        return;
        }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
    {
        setError("Invalid email format");
        return;
    }

    if (!/^\d+$/.test(formData.phoneNumber) || formData.phoneNumber.length < 10)
    {
        setError("Phone number must contain at least 10 digits");
        return;
    }

    if (formData.password.length <= 4)
    {
        setError("Password must be greater than 4 characters");
        return;
    }

// store user credential
    const users=JSON.parse(localStorage.getItem("saloon_users") || '[]');
    if(users.find(u => u.email === formData.email))
        {
            setError("email already registered");
            return;
        }
    users.push({
            username: formData.username,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.password
            });
    localStorage.setItem("saloon_users", JSON.stringify(users));  
    setSuccess("Registration successful!");
// clear form data
    setformData({
        username: "",
        email: "",
        phoneNumber: "",
        password: ""
    }); 
}

    return(
    // <body style={{height: "100vh", display: "flex", backgroundColor: "#f5f5f5", justifyContent: "center", alignItems: "center"}}>
        <div className="container">
            <div className="block">
                <h5>Registration Form</h5>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="names">Name </label>
                        <input type="text" 
                                id="names"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Name: Alain Prince"
                        />

                        <label htmlFor="email">Email</label>
                        <input type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email: alain@gmail.com"
                        />

                        <label htmlFor="phone">PhoneNumber</label>
                        <input type="tel"
                                id="phone"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone: +250791440613"
                        />

                        <label htmlFor="password">Password</label>
                        <input type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password: ****"
                        />

                        <button type="submit">Register</button>

                        <p style={{fontSize: 'small', textAlign: 'right'}}>Already have account ? Go on 
                            <Link to="/login"> SignIn Page</Link>
                        </p>
                    </form>

            {/* <p className="content">Username :<b>{name}</b>, Email: <b>{email}</b>, Password: <b>{password}</b></p> */}
                        <p>
                           <span className='error'> {error} </span> 
                            <span className='success'> {success} </span>
                        </p>
            </div>
        </div>
    // </body>
    );
}
export default Register