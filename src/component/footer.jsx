import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import "../style/footer.css"

function Footer()
{
    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-col">
                    <h6 className="footer-brand">BeautySalon</h6>
                    <p>Where every visit leaves you looking and feeling your best.</p>
                </div>

                <div className="footer-col">
                    <h6>Quick Links</h6>
                    <a href="/dashboard">Home</a>
                    <a href="/about">About</a>
                    <a href="/service">Service</a>
                    <a href="/booking">Booking</a>
                </div>

                <div className="footer-col">
                    <h6>Opening Hours</h6>
                    <p>Mon - Fri: 8:00am - 7:00pm</p>
                    <p>Saturday: 9:00am - 6:00pm</p>
                    <p>Sunday: Closed</p>
                </div>

                <div className="footer-col">
                    <h6>Contact</h6>
                    <p>Kigali, Rwanda</p>
                    <p>+250 791 440 613</p>
                    <p>info@beautysalon.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} BeautySalon. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#" aria-label="Facebook" title="AlPrince"><FaFacebookF /></a>
                    <a href="#" aria-label="Instagram" title="AlPrince"><FaInstagram /></a>
                    <a href="#" aria-label="Twitter" title="AlPrince"><FaTwitter /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer