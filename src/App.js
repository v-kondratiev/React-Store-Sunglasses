import './style/Base.css'
import './style/reset.css'
import Product from "./Components/Products/Product";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Faqs from "./Components/FAQS/Faqs";
import Contact from "./Components/Contact/Contact";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Items" element={<Product/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/faqs" element={<Faqs/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}
export default App;
