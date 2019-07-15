const initialState = {
  cars: []
}

export default (state, action) => {
  state = initialState;

  switch (action.type) {
    case 'SEARCH_CAR':
      return {...state, cars: action.payload}

    default:
     return state;
  }
}