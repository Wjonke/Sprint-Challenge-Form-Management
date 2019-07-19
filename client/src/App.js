import React from "react";
import { Route, Link } from "react-router-dom";
import FormikLogin from "./components/Login";
import SecretInfo from './components/SecretInfo'

import './App.css';

function App(props) {


  return (

    <div style={{ padding: 30 }} className="App">
      <h1>Log in to See Secret Information!</h1>


      <Link to="/login">
        <button className="btn">Login</button>
      </Link>

      <Link to="/secret-info">
        <button className="btn">Secret Info</button>
      </Link>

      <button
        className="btn"
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>

      {/* <SecretInfo {...props}/> */}

      <Route exact path="/" />
      <Route exact path="/login" component={FormikLogin} />
      <Route exact path="/secret-info" component={SecretInfo} />



      
      
    </div>
  );
}

export default App;
