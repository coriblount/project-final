import React from 'react'

class List extends React.Component { 
    

    
render() {
return (


<div>
    <li>{this.props.item.name}</li>
    <button onClick={this.props.taskDelete} className="action-button" >delete</button>
</div>

)
}
}

export default List 