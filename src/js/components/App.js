import React,{Component} from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Approach from '../components/Approach';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Background from '../components/Background';


import {CSSTransition,TransitionGroup} from 'react-transition-group';
import '../../css/background.css';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

  //to use transition group the component must know stated
const mapStateToProps = (state)=>{
    return{
        time:state.time
    }
}


class AppCon extends Component{
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
                    
                <TransitionGroup>               
                    <CSSTransition
                            in={true}
                            appear={true}
                            key={new Date().getTime()}                            
                            timeout={500}
                            classNames="fade">
                            
                                <Background />

                        </CSSTransition>
                </TransitionGroup>
                    
                </div>
            </div>
            </Router>
        )
    }
}

const App = connect(mapStateToProps)(AppCon);
export default App;