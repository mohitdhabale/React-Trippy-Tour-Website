import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./navigation.js";
import Home from "./home.js";
import About from "./about";
import Service from "./service";
import Contact from "./contact";
import Footer from "./footer";

function Trippy() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Trippy