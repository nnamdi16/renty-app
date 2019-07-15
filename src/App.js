import React from 'react'

import './App.css'
import Header from './components/Header';
import Info from './components/Info';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
    return ( <div className = 'App' >
      <Header/>
      <Info/>
      <Body/>
     <Footer></Footer>
        </div>
    )
}

export default App;