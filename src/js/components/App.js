import React,{Component} from 'react';
import Nav from '../components/Nav';

class App extends Component{
    render(){        
        return(
            <div>
                <div className = "container-fluid">
                    <div className = "row">
                       
                                <Nav />
                       
                    </div>
                    <div className = "row">
                        <div className = "col-sm-12">
                                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;