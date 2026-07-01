import { useState, useEffect } from "react"
import "../style/custpanel.css"

function CustPanel()
{
    const [myBookings, setMyBookings] = useState([])
    const [searchEmail, setSearchEmail] = useState("")

    useEffect(() => {
        const allBookings = JSON.parse(localStorage.getItem("bookings")) || []
        setMyBookings(allBookings)
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        const allBookings = JSON.parse(localStorage.getItem("bookings")) || []
        const filtered = allBookings.filter(
            (booking) => booking.email.toLowerCase() === searchEmail.toLowerCase()
        )
        setMyBookings(filtered)
    }

    return(
        <main className="custpanel-container">
            <h5 className="custpanel-heading">My Bookings</h5>

            <form className="custpanel-search" onSubmit={handleSearch}>
                <input
                    type="email"
                    placeholder="Enter your email to view your bookings"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {myBookings.length === 0 ? (
                <p className="custpanel-empty">No bookings found.</p>
            ) : (
                <div className="custpanel-list">
                    {myBookings.map((booking) => (
                        <article className="booking-card" key={booking.id}>
                            <h6>{booking.service}</h6>
                            <p><b>Date:</b> {booking.date}</p>
                            <p><b>Time:</b> {booking.time}</p>
                            <p><b>Status:</b> <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></p>
                        </article>
                    ))}
                </div>
            )}
        </main>
    )
}
export default CustPanel