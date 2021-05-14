import React, { Component } from 'react'


class AddList extends Component {
render() {
    return (
        <div>
            
<form onSubmit={(e) => this.props.todoSubmit(e)}>
<input type="text" name="name" placeholder="task"></input>
<br></br>
<button className="action-button" type="submit">Add Task</button>
<br></br>
</form>
        </div>

    )

}


}

export default AddList