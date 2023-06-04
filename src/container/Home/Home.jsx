// libraries
import React, {Component} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalProvider from "../../context/context";

// pages
// import Product from "../Pages/Product/Product";
import Product2 from "../Pages/Product/Product2";
import BlogPost from "../Pages/BlogPost/BlogPost";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";

// style
import './Home.css'

class Home extends Component {
    

    render() {
        return(
            <BrowserRouter>
                <nav>
                    <div className="nav-con">
                        <Link to="/">BlogPost</Link>
                        <Link to="/product">Product</Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<BlogPost />} />
                    <Route path="/detail-post/:postId" element={<DetailPost />} />
                    <Route path="/product" element={<Product2 />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

// export default Home;
export default GlobalProvider(Home);