import React,{Component} from 'react';
import dp from '../../asset/images/vaibhavPic.jpg';
import '../../css/background.css';

class About extends Component {
    render(){
        return(            
                <div className="col-12 col-lg-10 align-items-center d-flex" 
                    style={{height:"90vh"}}>                                     
                    
                    <div className="row align-items-center d-flex">

                        <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center mb-4 p-0">
                            <img src ={ dp } id="img" style={{maxHeight:"60vh",transition:"1s",maxWidth:"100%"}} />
                        </div>

                        <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center">
                            
                            <blockquote className = "font-weight-bold text-justify" 
                                style={{fontFamily:"Comic Sans MS, cursive, sans-serif",fontSize:"120%",maxHeight:"40vh",color:"#ddd"}}>
                                    Hey guys! I am Vaibhav,full stack web developer from Roorkee who loves React and Node.
                                    My hobbies include developing webapps,playing vollyball, watching movies,giving public speeches and hanging out with friends.
                                    <footer className="blockquote-footer text-right">Holy shit</footer>
                          </blockquote>

                        </div>
                    </div>

                </div>                
        )
    }
}

export default About;