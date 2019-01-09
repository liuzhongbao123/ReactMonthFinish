import React from 'react';
import './index.css';
import {connect} from 'react-redux';
import Detachment from '../Detachment';
class Home extends React.Component{
    render(){
        return <div className="Wrap">
            
        </div>
    }
}
const mapStateToProps = (state)=>{
    return state;
}
export default connect(mapStateToProps,Detachment)(Home)