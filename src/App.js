import React from 'react';
import Nav from "./components/nav/index"
import Header from "./components/heading/index";
import Potato from "./components/potatoImg/index";
import './App.css';

function App() {
  return (
    <div className="ui container">
      <Nav />

      <div className="ui two column grid">
        <div className="column">
          <Header />
        </div>
        <div className="column">

          <Potato />

        </div>


      </div>
    </div>
  );
}

export default App;
