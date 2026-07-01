import About from "./about"
import Service from "./Service"
import Booking from "./booking"
import Footers from "../component/footer"
import Welcome from "./welcome"

function Dashboard()
{
    return(
        <>
        <Welcome/>
        <About/>
        <Service/>
        <Booking/>
        </>
    )
}
export default Dashboard