import React, {Component, Fragment} from "react";
import CardProduct from "../../CardProduct/CardProduct";
import './Product.css';
import { connect } from "react-redux";

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="troley">
                    <div className="counter">{this.props.order}</div>
                </div>
                {/* <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/> */}
                <CardProduct />
                {/* untuk merubah state order, cardproduct menerima value yg akan di jadikan state order di product dari props di cardproduct */}
                {/* handle minus dan plus menjalankan fungsinya, dan mereturn value di parameter handleCounterChange, dan value nya msk ke props.onCounterChange, dan msk dsni d terima di handleCounterChange, dan msk ke newValue */}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}


// export default Product;
export default connect(mapStateToProps)(Product);
