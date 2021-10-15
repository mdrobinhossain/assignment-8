import React from 'react';
import male from './../../CustomPhoto/male.png';
import female from './../../CustomPhoto/female.png';


const Condition = (props) => {
     
    if(props.props ==="Male"){
        return <Female />;
    }
    else{
        return <Male />;
    }
};

const Male = () => <img style={{width:'100%'}} src={male} alt="Male" />;
const Female = () => <img src={female} alt="Female" />;
    


export default Condition;