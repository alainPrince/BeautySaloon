import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import '../style/navbar.css'

function Navbar()
{
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleLogout = () => {
        localStorage.removeItem("currentUser")
        navigate("/login")
    }

    const closeMenu = () => setMenuOpen(false)

    return(
        <header>
            <div className="navbar-top">
                <span className="navbar-brand">BeautySalon</span>
                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            <nav className={menuOpen ? "nav-open" : ""}>
                <NavLink to="/dashboard" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
                <NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
                <NavLink to="/service" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Service</NavLink>
                <NavLink to="/booking" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Booking</NavLink>
                <NavLink to="/custpanel" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Customer Panel</NavLink>
                <button type="button" className="logout-btn" onClick={handleLogout}>
                    LOGOUT
                </button>
            </nav>
        </header>
    )
}
export default Navbar