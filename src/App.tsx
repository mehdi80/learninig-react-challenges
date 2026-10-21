import { BrowserRouter, NavLink, Route, Routes } from "react-router"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Products } from "./pages/Products"
import { BikeProducts } from "./pages/Bike-products"
import { CarProducts } from "./pages/Car-products"
import { activeLinkStyle } from "./styles/active-link-style"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={activeLinkStyle}>Home</NavLink>
        <NavLink to="/about" style={activeLinkStyle}>About</NavLink>
        <NavLink to="/contact" style={activeLinkStyle}>Contact</NavLink>
        <NavLink to="/products" style={activeLinkStyle}>Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} >
          <Route path="cars" element={<CarProducts />} />
          <Route path="bikes" element={<BikeProducts />} />  
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
