import React, {Component, Fragment} from "react";
import CardProduct from "../../CardProduct/CardProduct";
import './Product.css';
import { connect } from "react-redux";

class Product extends Component {

    render(){
        return(
            <Fragment>
                <p className="prod-title">Halaman Product</p>
                <hr />
                <div className="troley">
                    <div className="counter">Total Order in kilogram: {this.props.order} kg</div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}


export default connect(mapStateToProps)(Product);
