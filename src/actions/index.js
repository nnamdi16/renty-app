import {SEARCH_CARS} from './types';
const {getCarDetails} = require('../node_modules/api');

module.exports.carReport = () => async dispatch =>{
  try {
    const carDetails = await getCarDetails();
    console.log(carDetails);  
    dispatch({type: SEARCH_CARS, payload: carDetails})  
  } catch (error) {
    console.log(`Error: ${error}`)
  }
  finally {
    console.log('done');
  }
}

// carReport().then((data) => {
//   console.log(data);
// })