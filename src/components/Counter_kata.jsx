import React, { Component } from 'react';

class Counter_kata extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:this.props.initialValue
        }
    }
    componentDidMount(){
        console.log("el counter se ha montado");
    };
    componentDidUpdate(prevProps, prevState){
        console.log("el counter vale "+this.state.counter, prevState.counter);
    };
    componentWillUnmount(){
        console.log("el counter se ha desmontado");
    };
    increment = () => {
        this.setState({counter:this.state.counter + this.props.step})
    };
    decrement = () => {
        if(this.state.counter>0){
            this.setState({counter:this.state.counter - this.props.step})
        }
    };
    render(){
        return (<div>
            <button onClick={this.increment}>+</button>
            <span>{this.state.counter}</span>
            <button onClick={this.decrement}>-</button>

        </div>
        )
    }
}

export default Counter_kata;