import React from 'react'

class List extends React.Component { 
    
taskDelete = () => {
console.log('clicked')
}
    
render() {
return (


<div>
    <li>{this.props.item.name}</li>
    <button onClick={this.taskDelete} className="action-button" >delete</button>
</div>

)
}
}

export default List 