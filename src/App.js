import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {Route,Switch} from 'react-router-dom';
import AddUser from './users/AddUser';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NotFound from './components/pages/NotFound';
import EditUser from './users/EditUser';
import User from './users/User';

const App = ( )=>
{
  return(
    <>
    <div className="App">
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/users/add' component={AddUser} />
      <Route exact path='/users/edit/:id' component={EditUser} />
      <Route  exact path='/users/:id' component={User} />

      <Route component={NotFound} />

    </Switch>

      
    </div>
       

    </>


  )
}

export default App;
