import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

import sun from '../../asset/images/sun3.png';
import moon from '../../asset/images/moon2.png';

import Stars from '../components/Stars';

import '../../css/background.css';

const mapStateToProps = (state)=>{
    return{
        time:state.time
    }
}

class ConnectedBackground extends Component{
    constructor(){
        super();
        this.setBackground = this.setBackground.bind(this);
    }

    day(){
        return(
            <div >
                <div className="row position-absolute w-100 " style={{top:0,zIndex:"-50"}}>
                    <div className="col-12 mb-4 p-0 day-back" >
                        <div className="sky-gradient-16 w-100" style={{height:"100vh"}}></div>
                    </div>
                </div>

                 <div className="row abc position-absolute w-100 " style={{top:0,zIndex:"1"}}>
                    <div className="col-12 mb-4 p-0" style={{height:"100vh",width:"100vw"}}>
                        <Stars />
                    </div>
                </div>

                <div className="row position-absolute w-100" style={{top:"10vh"}}>
                    <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center mb-4 mx-auto">
                        <CSSTransition
                            appear={true}
                            classNames="sunMoon"
                            in={true}
                            timeout={1000}
                        >
                            <img src ={ sun } className="sun  d-none d-lg-inline-block" style={{maxHeight:"20vh"}} key = {"hello"} />                                                     
                        </CSSTransition>
                    </div>
                </div>
            </div>
        )    
    }

    night(){
        return(        
            <div >
                  <div className="row position-absolute w-100 " style={{top:0,zIndex:"-50"}}>
                    <div className="col-12 mb-4 p-0 " >
                        <div className="sky-gradient-22 w-100" style={{height:"100vh"}}></div>                        
                    </div>
                </div>

                <div className="row abc position-absolute w-100 " style={{top:0,zIndex:"1"}}>
                    <div className="col-12 mb-4 p-0" style={{height:"100vh",width:"100vw"}}>
                        <Stars />
                    </div>
                </div>

                <div className="row position-absolute w-100 " style={{top:"10vh"}}>
                    <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center mb-4 mx-auto">                            
                        <CSSTransition
                            appear={true}
                            in={true}
                            classNames="sunMoon"
                            timeout={1000}
                            >
                            <img src ={ moon } className="moon d-none d-lg-inline-block" style={{maxHeight:"20vh"}} key={2} />
                        </CSSTransition>    
                    </div>
                </div>                    
            </div>
        )    
    }

    setBackground(){
        let {time} = this.props;
        if(time === true){
            return this.day();
        }
        else{
            return this.night();
        }
    }

    render(){       
        return(
            <div>
                {this.setBackground()}
            </div>
        )       
    }
}

const Background = connect(mapStateToProps)(ConnectedBackground);
export default Background;