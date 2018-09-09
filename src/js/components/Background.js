import React from 'react';

import sun from '../../asset/images/sun.png';
import moon from '../../asset/images/moon.png';

import '../../css/backgroundNight.css';
import '../../css/backgroundDay.css';


const Background = ()=>{
    return(
        <div>
            <div className="row position-absolute w-100 " style={{top:0,zIndex:"-50"}}>
                            <div className="col-12 mb-4" style={{height:"100vh"}}>
                                <div className="stars"></div>
                                <div className="twinkling"></div>
                            </div>
                    </div>

                    <div className="row position-absolute w-100 " style={{top:20}}>
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
    )
}

export default Background;