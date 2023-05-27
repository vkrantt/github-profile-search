import React from 'react'
import Header from './components/navbar/Nav';
import Landing from './components/landing/Landing';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Header />
      <Landing />
    </Router>
  )
}

export default App;