import React, {Component, Fragment} from "react";
import { connect } from "react-redux";

class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        // memakai super karena extends component
        this.state = {
            count: 1
        }
        console.log('constructor')
    };
    // constructor default dr es6

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    };

    componentDidMount() {
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000);
    };

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps: ', nextProps);
        console.log('nextState', nextState);
        console.log('this State: ', this.state);
        console.groupEnd();
        if(nextState.count >= 4) {
            return false;
        }
        // kalau nextState nya >= 4, akan membuat perubahan yg di lakukan changecount akan false, sehingga tdk merubah state count
        return true;
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    };

    componentWillUnmount() {
        console.log('componentWillUnmount')
    };

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render(){
        console.log('render')
        return(
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr/>
                <button onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr/>
                <p>Total Order: {this.props.order} </p>
            </Fragment>
        )
    };
}


const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

// export default LifeCycleComp;
export default connect(mapStateToProps)(LifeCycleComp);