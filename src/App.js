import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";

function App() {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <hr/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Category />} />
                    {/*<Route path="/product/:categoryId" element={<Product />} />*/}
                    <Route path="/product" element={<Product />} />
                </Routes>
            </div>
        </>
    );
}

export default App;