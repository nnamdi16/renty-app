import {GET_CARS} from '../actions/types'
const initialState = {
  cars: [],
  searchedCars : []
}

export default (state, action) => {
  state = initialState;

  switch (action.type) {
    case GET_CARS:
      return {...state, cars: action.payload};
  
    default:
     return state;
  }
}