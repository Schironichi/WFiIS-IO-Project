import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Myprofile from './components/pages/Myprofile';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Dodaj_ogloszenie from './components/pages/Dodaj_ogloszenie'

function App()
{
  const [backendData,setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <>
      <Router>
        <Navbar />
        <Switch>  
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />     
          <Route path='/myprofile' component={Myprofile} />
          <Route path='/signup' component={Signup} />
          <Route path='/dodaj' component={Dodaj_ogloszenie} />
        </Switch>
     
      </Router>
    </>
    /*<div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ):(
        backendData.users.map((users, i) => {
          return <p key={i}>{users}</p>
        })
      )}
    </div>*/
  )
}

export default App;