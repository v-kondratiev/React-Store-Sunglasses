import 'bootstrap/dist/css/bootstrap.min.css'
import './style/Base.css'
import './App.css';
import Product from "./Components/Products/Product";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Cart from "./Components/Cart/Cart";
import RootLayout from "./Components/RootLayout/RootLayout";




function App() {

    const router = createBrowserRouter(createRoutesFromElements(

        <Route path="/" element = {<RootLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/Items" element={<Product/>}/>
        </Route>

    ))

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
