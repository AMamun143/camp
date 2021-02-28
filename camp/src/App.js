import React from 'react'
import './App.css';
import MainComponent from '../src/components/MainComponent'
import Section from './pages/cart/Section'
import {DataProvider} from './pages/shop/Context'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component{
  render(){
  return (
    <DataProvider>
    <div className="App">
    <Router>
      <MainComponent />
      <Section />
      </Router>
    </div>
    </DataProvider>
  );
}
}

export default App;
