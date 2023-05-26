import React,{Component} from "react";
import Counter from "./Counter";
// import Counter2 from "./Counter2";


class CardProduct extends Component {
    

    render(){
        return(
            <div>
                <p>Daging ayam berbumbu</p>
                <p>Rp.40.000</p>
                {/* <Counter onCounterChange={(value) => this.props.onCounterChange(value)} /> */}
                <Counter />
            </div>
        )
    }
}
// class tdk perlu menulis props di parameter, karena tdk ada parameter di class

export default CardProduct;