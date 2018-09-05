import React,{Component} from 'react';
import '../../css/Basic.css';

class Nav extends Component {
    render(){
        return (
            <div className="w-100">                
                <nav className="navbar navbar-dark bg-dark" style={{height:"10vh"}}>
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
                </nav>
                <div className="collapse" id="navigation">
                    <div className="bg-dark p-4 d-flex flex-column justify-content-center align-items-center" style={{height:"89vh"}}>
                        <h4 className="text-white cursorPointer" role="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="true" > About</h4>
                        <h4 className="text-white cursorPointer" role="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="true" > Skills</h4>
                        <h4 className="text-white cursorPointer" role="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="true" > Approach</h4>
                        <h4 className="text-white cursorPointer" role="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="true" > Projects</h4>
                        <h4 className="text-white cursorPointer" role="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="true" > Contact Me</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;