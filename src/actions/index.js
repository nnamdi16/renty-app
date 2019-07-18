import { GET_CARS } from "./types";
const { getVehicles } = require("../node_modules/api");

export const onGetVehicles = query => async dispatch => {
  try {
    const carDetails = await getVehicles(query);
    dispatch({ type: GET_CARS, payload: carDetails });
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    console.log("done");
  }
};
