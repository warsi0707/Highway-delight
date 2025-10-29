import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Listing from "./pages/Listing"
import CheckOut from "./pages/CheckOut"
import ConfirmBooking from "./pages/ConfirmBooking"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Listing/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/confirm" element={<ConfirmBooking/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
