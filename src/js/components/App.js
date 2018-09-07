import React,{Component} from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Approach from '../components/Approach';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

class App extends Component{
    render(){        
        return(
            <Router>
            <div>
                <div className = "container-fluid">
                    <div className = "row">                       
                                <Nav />                       
                    </div>

                    <div className = "row">                       
                        <Switch>
                                <Route exact path="/" component={About} />
                                <Route path="/about" component={About} />
                                <Route path="/skills" component={Skills} />
                                <Route path="/approach" component={Approach} />
                                <Route path="/projects" component={Projects} />
                                <Route path="/contact" component={Contact} />
                        </Switch>                       
                    </div>            
                </div>
            </div>
            </Router>
        )
    }
}

export default App;