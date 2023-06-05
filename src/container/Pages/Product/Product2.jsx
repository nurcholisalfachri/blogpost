import React, {Component, Fragment} from "react";
import { GlobalConsumer } from "../../../context/context";
import CardProduct from "../../CardProduct/CardProduct";
import './Product.css';

class Product2 extends Component {

    render(){
        return(
            <Fragment>
                <p className="prod-title">Product Page</p>
                <hr />
                <div className="troley">
                    <div className="counter">Total Order in kilogram: {this.props.state.totalOrder} kg</div>
                </div>
                <CardProduct />
            </Fragment>
            
        )
    }
}


export default GlobalConsumer(Product2);