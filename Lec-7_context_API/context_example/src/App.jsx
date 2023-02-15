import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GrandParent from "./components/BasicExample";
import Page from "./components/webpage/Page";
function App() {


  return (
    <div className="App">
      {/* <h1>Context Example</h1> */}
      {/* <GrandParent></GrandParent> */}
      <Page></Page>

    </div>
  )
}

export default App
