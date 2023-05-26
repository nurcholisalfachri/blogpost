// libraries
import React, {Component} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import GlobalProvider from "../../context/context";
// pages
import Product from "../Pages/Product/Product";
// import Product2 from "../Pages/Product/Product2";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
// import LifeCycleComp2 from "../Pages/LifeCycleComp/LifeCycleComp2";
import BlogPost from "../Pages/BlogPost/BlogPost";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";

// style
import './Home.css'

class Home extends Component {
    state = {
        showComponent: true
    }
    // membuat komponent LifeCycleComp bs di hilangkan

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 6000)
    }

    render() {
        return(
            <BrowserRouter>
                <nav>
                    <Link to="/">BlogPost</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<BlogPost />} />
                    <Route path="/detail-post/:postId" element={<DetailPost />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/lifecycle" element={<LifeCycleComp />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Home;
// export default GlobalProvider(Home);