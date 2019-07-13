import React from 'react'
import AppSection from './elements/AppSection';
import './App.css'
import Header from './components/Header';
import Info from './components/Info';


function App() {
    return ( <div className = 'App' >
      <Header/>
      <Info/>
      <AppSection>This is a Section</AppSection>
        </div>
    )
}

export default App;