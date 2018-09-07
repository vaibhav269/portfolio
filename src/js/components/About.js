import React,{Component} from 'react';
import dp from '../../asset/images/vaibhavPic.jpg';

class About extends Component {
    render(){
        return(            
                <div className="col-12 col-sm-8 row align-items-center d-flex" 
                    style={{height:"90vh"}}>                    
                        <div className="col-12 col-lg-4 d-flex justify-content-center ">
                            <img src ={ dp } height="250" />
                        </div>

                        <div className="col-12 col-lg-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere lorem et sem lobortis, 
                            id scelerisque odio convallis. Fusce iaculis malesuada varius. Quisque quis dictum erat. 
                            Cras ut euismod odio. In vel eleifend risus, quis lobortis ex. Nullam eu pharetra nibh. 
                            Suspendisse sed velit est.
                        </div>
                </div>                
        )
    }
}

export default About;