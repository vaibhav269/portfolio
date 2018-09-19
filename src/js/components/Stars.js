import React,{Component} from 'react';
import '../../css/star.css';

class Stars extends Component{
    constructor(){
        super();
        this.state = {            
            stars:null
        }
    }
    
    componentWillMount(){
        let starNo = Math.floor(Math.random()*50 + 100);
        let starArray = [];
        let height = window.innerHeight;
        let width = window.innerWidth;                

        for(let i = 0 ; i < starNo ; i++ ){
            let tempStar = {};
            tempStar['width'] = Math.floor(Math.random()*width+1);
            tempStar['height'] = Math.floor(Math.random()*height+1);
            tempStar['key'] = i;
            starArray.push(tempStar);
        }
        this.setState({stars:starArray});        
    }

    render(){        
        return(
            <div style={{height:"100%",position:"absolute",width:"100%",top:"0"}}>
                {
                    this.state.stars.map(function(star){
                        return(
                            <div className = "star" style = {{top:star.height,left:star.width}} key={star.key} > </div>
                        )
                    })
                }                         
            </div>                    
        )
    }
}
export default Stars;
