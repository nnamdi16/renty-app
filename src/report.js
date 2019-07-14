const {getCarDetails} = require('api');

async function carReport() {
  try {
    const carDetails = await getCarDetails();
    console.log(carDetails);    
  } catch (error) {
    console.log(`Error: ${error}`)
  }
  finally {
    console.log('done');
  }
}

carReport().then((data) => {
  console.log(data);
})