import React from 'react'
import AppSection from './elements/AppSection'
import './App.css'
import Header from './blocks/Header';


function App() {
    return ( <div className = 'App' >
      <Header>This is a Header</Header>
      <AppSection>This is a Section</AppSection>
        </div>
    )
}

export default App;