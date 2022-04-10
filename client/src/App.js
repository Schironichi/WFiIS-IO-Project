import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Notices from './components/pages/Notices';
import Myprofile from './components/pages/Myprofile';
import Footer from './components/Footer';

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
          <Route path='/notices' component={Notices} />     
          <Route path='/myprofile' component={Myprofile} />
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