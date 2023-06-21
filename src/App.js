import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import News from './components/News';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <News />
    </React.Fragment>

  );
}

export default App;
