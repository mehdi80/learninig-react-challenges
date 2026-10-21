import { BrowserRouter, Link, Route, Routes } from "react-router"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Products } from "./pages/Products"
import { BikeProducts } from "./pages/Bike-products"
import { CarProducts } from "./pages/Car-products"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
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
