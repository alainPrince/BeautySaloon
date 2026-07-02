import "../style/welcome.css"
import { Link } from "react-router-dom"

function Welcome()
{
    return(
        <div className="welcome-container">
            <div className="welcome-block">
                <h1>Welcome to <b>BeautySalon</b></h1>
                <p>Where every visit leaves you looking and feeling your best.</p>

                <Link to="/booking">
                    <button type="button">BOOK APPOINTMENT</button>
                </Link>
            </div>
        </div>
    )
}
export default Welcome