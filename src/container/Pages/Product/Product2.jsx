import React, {Component, Fragment} from "react";
import { GlobalConsumer } from "../../../context/context";
import CardProduct from "../../CardProduct/CardProduct";
import './Product.css';

class Product2 extends Component {

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="troley">
                    <div className="count">{this.props.state.totalOrder}</div>
                </div>
                <CardProduct />
            </Fragment>
            
        )
    }
}


export default GlobalConsumer(Product2);