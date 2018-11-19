import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

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
                <hr />
                <button onClick={this.props.onStoreChange}>STORE VALUE</button>
                <ul>
                    {this.props.res.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteChange(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        res: state.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementChange: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementChange: () => dispatch({type: actionTypes.DECREMENT}),
        onAddedChange: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubChange: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreChange: () => dispatch({type: actionTypes.STORE_COUNTER}),
        onDeleteChange: (id) => dispatch({type: actionTypes.DELETE, elId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);