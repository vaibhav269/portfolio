import React,{Component} from 'react';
import '../../css/Basic.css';
import ToggleButton from '../components/ToggleButton';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';


class Nav extends Component {
    render(){
        return (            
                <div className="w-100">                
                    <nav className="navbar navbar-dark " style={{height:"10vh"}}>
                        <button className="navbar-toggler cursorPointer" 
                                type="button"
                                style={{outline:"none"}} 
                                data-toggle="collapse" 
                                data-target="#navigation" 
                                aria-controls="navigation" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>   
                        <ToggleButton />                                                                    
                    </nav>
 
                     <div className="collapse" id="navigation">
                        <div className="p-4 d-flex flex-column justify-content-center align-items-center" 
                            role="button" 
                            data-toggle="collapse"
                            data-target="#navigation" 
                            aria-controls="navigation" 
                            aria-expanded="true"
                            style={{height:"90vh"}}>                        

                                <Link to = "/about" className="text-white cursorPointer h4" > About </Link>
                                <Link to = "/skills" className="text-white cursorPointer h4" > Skills </Link>
                                <Link to = "/approach" className="text-white cursorPointer h4" > Approach </Link>
                                <Link to = "/projects" className="text-white cursorPointer h4" > Projects </Link>
                                <Link to = "/contact" className="text-white cursorPointer h4" > Contact Me </Link>
                        </div>
                    </div>
                </div>            
        )
    }
}

export default Nav;