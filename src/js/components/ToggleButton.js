import React,{Component} from 'react';
import {connect} from 'react-redux';
import {toggleTime} from '../actions/index';

const mapStateToProps = (state)=>{
    return{
        time:state.time
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {        
        toggleTime : () =>dispatch(toggleTime())
    }
}

class ConnectedToggleButton extends Component{
    constructor(){
        super();        
        this.toggleTime = this.toggleTime.bind(this);
    }

    toggleTime(){
        alert(this.props.time);
        this.props.toggleTime();
    }

    render(){
        return(
            <button className="btn" onClick={this.toggleTime}>
                toggle
            </button>
        )        
    }
}

const ToggleButton = connect(mapStateToProps,mapDispatchToProps)(ConnectedToggleButton);
export default ToggleButton;