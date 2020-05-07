import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar} from 'react-bootstrap'
import Title from './components/Title'
import Add from './components/Add'
import Library from './components/Library'


function App(){
  return(
    <div>
      <Title title="React Library" />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">React Library</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Add">Add</Nav.Link>
          <Nav.Link href="/Library">Library</Nav.Link>

        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/Add" component={Add} />
          <Route exact path="/Library" component={Library} />
          
        </Switch>
      </Router>
    </div>
  )
}
export default App