import React from 'react';
import CardItem from '../blocks/CardItem';

const App = ({vehicles}) => {
  console.log(vehicles);
 return (
   <div>
     {vehicles.map(vehicle => {
       return (
         <CardItem.List>
           {vehicle}
         </CardItem.List>
       )
     })}
   </div>
 )
}

export default App;