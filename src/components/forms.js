import React,{useState} from 'react';

class Form extends React.Component {
constructor(props)
{
  super(props);
  this.state={
     count:0
  }
}
   
/* useState can be used incase of a functional component*/

render(){
  return (
      <div >
        <h1>{this.state.count}</h1>
            
            <h2 style={{color:'pink'}}><i>Click here to increase the counter</i></h2>
            <button style={{backgroundColor:'green',borderRadius:'25px',width:'70px',height:'25px'}}onClick={()=>this.setState({count:this.state.count+1})}>Up</button>
            <h2 style={{color:'pink'}}><i>Click here to decrease the counter</i></h2>
            <button style={{backgroundColor:'red',borderRadius:'25px',width:'70px',height:'25px'}}onClick={()=>this.setState({count:this.state.count-1})}>Down</button>
            <p></p>
      </div>
    );
  }
}
  
export default Form;