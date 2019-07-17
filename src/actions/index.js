import {SEARCH_CARS} from './types';
const {getCarDetails} = require('../node_modules/api');


export const carReport = () => async dispatch =>{
  try {
    const carDetails = await getCarDetails();
    dispatch({type: SEARCH_CARS, payload: carDetails})  
  } catch (error) {
    console.log(`Error: ${error}`)
  }
  finally {
    console.log('done');
  }
}
