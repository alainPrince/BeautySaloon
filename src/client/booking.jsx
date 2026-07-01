import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import services from '../client/servicelist';
import "../style/booking.css"

function Booking()
{
    const location = useLocation()

    const initialState = {
        fullname: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        textarea: ''
    }

    const [formData, setformData] = useState(initialState)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    useEffect(() => {
        if (location.state?.selectedService) {
            setformData((prev) => ({ ...prev, service: location.state.selectedService }))
        }
    }, [location.state])

    const handleChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")

        if(!formData.fullname || !formData.phone || !formData.email || !formData.date || !formData.time || !formData.service){
            setError("All fields are required")
            return
        }

        if(!formData.email.includes("@"))
        {
            setError("Please enter a valid email")
            return
        }

        if(!/^[0-9+]+$/.test(formData.phone))
        {
            setError("Phone number can only contain digits and +")
            return
        }

        if(formData.phone.length < 10 || formData.phone.length > 13)
        {
            setError("Phone number must be between 10 and 13 characters")
            return
        }

        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || []
        const newBooking = {
            id: Date.now(),
            ...formData,
            status: "Pending"
        }
        localStorage.setItem("bookings", JSON.stringify([...existingBookings, newBooking]))

        setSuccess("Booking request sent successfully!")
        setformData(initialState)
    }

    const today = new Date().toISOString().split("T")[0]

    return(
        <section className="book-container">
            <h5 className="book-title">Booking Appointment</h5>
            <article className="book-card">
                <form onSubmit={handleSubmit}>
                    <div className="input_grp">
                    <input type="text" name="fullname" placeholder="Fullname: Alain Prince" value={formData.fullname} onChange={handleChange}/>
                    <input type="text" name="email" placeholder="Email: alprince18k@gmail.com" value={formData.email} onChange={handleChange}/>
                    <input type="tel" name="phone" placeholder="Phone number: +250791440613" value={formData.phone} onChange={handleChange}/>
                    </div>
                    <div className="input_grp">
                        <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} />
                        <input type="time" value={formData.time} onChange={handleChange} name="time" />
                    </div>
                    <div className="input_grp">
                        <select name="service" value={formData.service} onChange={handleChange}>
                            <option value="" disabled>Select service...</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.name}>
                                    {service.name} — {service.price.toLocaleString()} RWF
                                </option>
                            ))}
                        </select>
                        <textarea name="textarea" value={formData.textarea} onChange={handleChange} placeholder="Enter describe your Design..."></textarea>
                    </div>
                    <button type="submit" className="btn">BOOK</button>
                    <p style={{textAlign: "center"}}>
                        {error && <span className='error'>{error}</span>}
                        {success && <span className='success'>{success}</span>}
                    </p>
                </form>
            </article>
        </section>
    )
}
export default Booking