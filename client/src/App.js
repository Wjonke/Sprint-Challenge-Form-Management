import React from "react";
import { Route, Link } from "react-router-dom";
import FormikLogin from "./components/Login";
import SecretInfo from './components/SecretInfo'
import useLocalStorage from './hooks/useLocalStorage'
import './App.css';

function App(props) {

  const [token, setToken] = useLocalStorage("token")

  return (

    <div style={{ padding: 30 }} className="App">
      <h1>Log In To See Secret Information!</h1>


      {/* <Link to="/login">
        <button className="btn">Login</button>
      </Link> */}

      {/* <Link to="/secret-info">
        <button className="btn">Secret Info</button>
      </Link> */}

      <Link to="/login">
        <button
        className="btn"
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
      </Link>
      

      

      <Route exact path="/" />

      <Route exact path="/login" render={props => {
        return <FormikLogin {...props} setToken={setToken}/>
      }} />

      <Route exact path="/secret-info" component={SecretInfo} />



      
      
    </div>
  );
}

export default App;
