import React,{Component} from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Approach from '../components/Approach';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import sun from '../../asset/images/sun.png';
import moon from '../../asset/images/moon.png';

import '../../css/backgroundNight.css';
import '../../css/backgroundDay.css';

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
            <div className="position-relative" >
                <div className = "container-fluid" style={{backgroundColor:"transparent"}}>
                    <div className = "row">                       
                                <Nav />                       
                    </div>

                    <div className = "row justify-content-center ">
                        <Switch>
                                <Route path="/about" component={About} />
                                <Route path="/skills" component={Skills} />
                                <Route path="/approach" component={Approach} />
                                <Route path="/projects" component={Projects} />
                                <Route path="/contact" component={Contact} />
                                <Route exact path="/" component={About} />
                        </Switch>                       
                    </div>            
                </div>
                <div className = "container-fluid position-absolute" style={{top:"0",height:"100vh",zIndex:"-100"}} >
                    
                    <div className="row position-absolute w-100" style={{top:0,zIndex:"-50"}}>
                            <div className="col-12 mb-4" style={{height:"100vh"}}>
                                <div className="stars"></div>
                                <div className="twinkling"></div>
                            </div>
                    </div>

                    <div className="row position-absolute w-100" style={{top:20}}>
                        <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center mb-4 mx-auto">
                            <img src ={ moon } style={{maxHeight:"25vh"}} />
                        </div>
                    </div>

                    <div className="row position-absolute w-100 d-none " style={{top:0,zIndex:"-50"}}>
                            <div className="col-12 mb-4 p-0" style={{height:"100vh"}}>
                                <div id="clouds">
                                    <div className="cloud x1"></div>
                                    <div className="cloud x2"></div>
                                    <div className="cloud x3"></div>
                                    <div className="cloud x4"></div>
                                    <div className="cloud x5"></div>
                                </div>
                            </div>
                    </div>

                    <div className="row position-absolute w-100 d-none" style={{top:20}}>
                        <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center mb-4 mx-auto">
                            <img src ={ sun } style={{maxHeight:"25vh"}} />
                        </div>
                    </div>

                </div>
            </div>
            </Router>
        )
    }
}

export default App;