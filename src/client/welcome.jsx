import "../style/welcome.css"

function Welcome()
{
    return(
        <div className="welcome-container">
            <div className="welcome-block">
                <h1>Welcome to <b>BeautySalon</b></h1>
                <p>Where every visit leaves you looking and feeling your best.</p>

                <button type="button">BOOK APPOINTMENT</button>
            </div>
        </div>
    )
}
export default Welcome