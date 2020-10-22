import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./comp/Navbar";
import { Container } from 'reactstrap';
import About from './comp/Pages/AboutMe';
import Projects from './comp/Pages/Projects';
// do not delete contact below
import Contact from './comp/Pages/Contact';
// import Resume from '.comp/Pages/Resume';
import './index.css'


function App() {
  return (
      <div className="App">
        <Navbar />
          <Container>
            <Switch>
              {/* <Route path="/myReactResume" component={Resume} /> */}
          <Route path="/projects" component={Projects} />
            <Route path="/" component={About} />
            </Switch>
          </Container>
         
      </div>
  );
}

export default App;