import {SEARCH_CARS} from '../actions/types'
const initialState = {
  cars: []
}

export default (state, action) => {
  state = initialState;

  switch (action.type) {
    case SEARCH_CARS:
      return {...state, cars: action.payload};

    default:
     return state;
  }
}