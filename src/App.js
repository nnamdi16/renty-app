import React from 'react'
import AppSection from './elements/AppSection';
import './App.css'
import Header from './components/Header';


function App() {
    return ( <div className = 'App' >
      <Header/>
      <AppSection>This is a Section</AppSection>
        </div>
    )
}

export default App;