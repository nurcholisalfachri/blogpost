import React,{Component} from "react";
// import Counter from "./Counter";
import Counter2 from "./Counter2";


class CardProduct extends Component {
    

    render(){
        return(
            <div className="prod-con">
                {/* <img src="" alt="" /> */}
                <p>Chicken Meat</p>
                <p>Rp.40.000/kg</p>
                <Counter2 />
            </div>
        )
    }
}


export default CardProduct;