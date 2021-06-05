
import React from 'react';
import axios from "axios";
import { stringify } from 'querystring';
import { CSVLink } from "react-csv";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,

} from 'react-router-dom'


import About from "./pages/about/About";
import Errors from "./pages/errors/Errors"
import Navbar from './components/Navbar/Navbar';




const { useEffect, useState } = React;

const FetchData = () => {
  //credentials
  const headers = {
    'Password': 'apiaccount',
    'Username': 'abc.123!',
    'CompanyId': 'b4acf6e8-86c9-cd2d-62f8-08d32aed8aa2'

  };
  // Make a get request 
  return axios.get('http://52.20.176.4:8090/api/eftv2/', { headers })
    .then(({ data }) => {
      // handle success
      console.log(data);

      // getting the data in JSON format
      return JSON.stringify(data);
    })
    .catch(error => {
      // handle error
      console.log(error);
    });

};

// react functional component to output data
export default function App() {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

  useEffect(() => {
    FetchData().then(randomData => {
      setRandomUserDataJSON(randomData || "No user data found");
    })
  }, []);


  return (

    <Router>
      <Navbar />
      <div className="App">
        <p>{randomUserDataJSON}</p>
        {/* Downloading CSV */}
        <CSVLink data={randomUserDataJSON}>
          <button>Download CSV</button>
        </CSVLink>
      </div>
      <main>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/about" exact><About /></Route>
          <Route path="/errors" exact><Errors /></Route>
        </Switch>

      </main>
    </Router>
  )
};

