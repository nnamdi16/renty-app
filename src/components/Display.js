import React from 'react';
import Display from '../blocks/Display';
import ResultCard from './ResultCard';
import SideBar from './SideBar';


export default () => {
  return (
   <Display>
     <SideBar></SideBar>
     <ResultCard></ResultCard>
   </Display>
  )
}
