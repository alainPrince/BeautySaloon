import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./client/register"
import LoginPage from "./client/login";
import Dashboard from "./client/dashboard";
import Service from "./client/Service"
import About from "./client/about";
import Booking from "./client/booking";
import CustomerPanel from "./client/custPanel";
import Layout from "./component/Layout"
import ProtectedRoute from "./component/proctedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>

        {/* protected routes — must be logged in, and get Navbar + Footer */}
        <Route element={<ProtectedRoute/>}>
          <Route element={<Layout/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/custpanel" element={<CustomerPanel/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App