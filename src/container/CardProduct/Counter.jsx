import React,{Component} from "react";
import { connect } from "react-redux";
import ActionType from "../../redux/Reducer/globalActionType";


class Counter extends Component {
    
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //         // sudah value terbaru
    //     })
    // }

    // handleMinus = () => {
    //     if(this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //             // sudah value terbaru
    //         })
    //     }
    // }

    render(){
        // console.log(this.props)
        return(
            <div>
                {/* <button className="minus" onClick={this.handleMinus}>-</button> */}
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                {/* <input type="text" value={this.state.order} /> */}
                <input type="text" value={this.props.order} />
                {/* <button className="plus" onClick={this.handlePlus}>+</button> */}
                <button className="plus" onClick={this.props.handlePlus}>+</button>
                {/* handleplus mengembalikan handleCounterChange dan parameternya, msk ke f handleCounterChange dan parameternya msk lg ke onCounterChange dan parameternya, msk ke onCounterChange dan parameternya di spesific comp counter msk lg ke onCounterChange dan parameternya, msk ke onCounterChange dan parameternya di spesific comp cardproduct msk lg ke handleCounterChange dan parameternya, msk ke f handleCounterChange dan parameternya msk ke setstate, dan menggantikan state order*/}
            </div>
        )
    }
}
// class tdk perlu menulis props di parameter, karena tdk ada parameter di class

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
    }
}

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);