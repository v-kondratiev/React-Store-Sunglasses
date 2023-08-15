import './style/Base.css'
import './style/reset.css'
import Product from "./Components/Products/Product";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Items" element={<Product/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}
export default App;
