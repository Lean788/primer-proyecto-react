import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }
    increment = () => {
        this.setState({counter:this.state.counter + 1})
    }
    render(){
        return (
            <span onClick={this.increment}>{this.state.counter}</span>
        )
    }
}

export default Counter;