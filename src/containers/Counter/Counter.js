import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementChange} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementChange}  />
                <CounterControl label="Add 5" clicked={this.props.onAddedChange}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubChange}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementChange: () => dispatch({type: "INCREMENT"}),
        onDecrementChange: () => dispatch({type: "DECREMENT"}),
        onAddedChange: () => dispatch({type:"ADD", value: 5}),
        onSubChange: () => dispatch({type: "SUBTRACT", value: 5})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);