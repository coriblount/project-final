
import React from 'react'

class List extends React.Component { 


    state = {
        isActive: false,
        buttonActive: true,
    };
    
    handleDone = () => {
        // console.log("click")
        this.setState({isActive: true}) ;
        this.setState({buttonActive: false})
    }
    
    render() {
        const toggle = this.state.isActive ? 'lidone' : 'li';
        const button = this.state.buttonActive ? 'action-button' : 'action-buttongone';

        
    return (
<div>
    <li className= {`${toggle}` } >{this.props.item.name}</li>
    <button className={`${button}` } onClick={this.handleDone}>done</button>
    <button onClick={this.props.taskDelete} className="action-button" >delete</button>
</div>

)
}
}

export default List 