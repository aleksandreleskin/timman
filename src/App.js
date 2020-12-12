import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';

const auth = false;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute auth={auth} exact path="/login" component={Login}/>
          <PublicRoute auth={auth} exact path="/register" component={Register}/>

          <PrivateRoute auth={auth} exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
