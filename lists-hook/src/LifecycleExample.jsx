import React from 'react'

class LifecycleExample extends React.Component {
 
   constructor(){
    super();
    this.state={
        count:1
    }
   }

   componentDidMount(){
    console.log('mounting')
   }

   handleChange=()=>{
      this.setState(
        {count:this.state.count+1}
      )
   }


    render(){
        return (
            <>
            <h1>LifeCycle Example With class component</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleChange}>increament</button>
            <hr style={{paddingTop:'10px'}}/>
            </>
         
          )
    }

    shouldComponentUpdate(){
        console.log(' want to Update ')
        return true;
    }

    copmonentDidUpdate(){
        console.log('Update')
    }
        
    
}

export default LifecycleExample;