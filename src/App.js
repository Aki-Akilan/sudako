import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './component/home'
import Easy from './component/easy'
import Medium from './component/medium'
import Hard from './component/hard'
import Menu from './component/menu'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Form,Navbar,Button,Col,Row,Container,Nav} from 'react-bootstrap';

function App() {

  return (
    <React.Fragment>
                <Router>
                  <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/easy" component={Easy}/>
                    <Route path="/medium" component={Medium}/>
                    <Route path="/hard" component={Hard}/>
                  </Switch>
                </Router>
    </React.Fragment>
  )
}

export default App
