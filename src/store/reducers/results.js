import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_COUNTER:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE:
            const updatedArray = state.results.filter(result => result.id !== action.elId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};
 
export default reducer;