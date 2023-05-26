import React, {Component, createContext} from "react";

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return(
        class ParentComp extends Component {
            state = {
                showComponent: true,
                totalOrder: 0
            }
        
            dispatch = (action) => {
                if(action.type === 'PLUS_ORDER'){
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if(action.type === 'MINUS_ORDER'){
                    let totalOrder = 0;
                    if(this.state.totalOrder > 0) {
                    totalOrder = this.state.totalOrder -1
                    }
                    return this.setState({
                        totalOrder: totalOrder
                    })
                }
            }

            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}/>
                        {/* siapa tau home akan memakai props nantinya */}
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return(
        class ParentConsumer extends Component {
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}