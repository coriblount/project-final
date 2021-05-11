import React, { Component } from 'react'

class AddGoal extends Component {
render() {
    return (
        <div>          
<form onSubmit={this.props.listSubmit}>
<input type="text" name="name" placeholder="name"></input>
<br></br>
<input type="text" name="start" placeholder="start date"></input>
<br></br>
<input type="text" name="completion" placeholder="completion date"></input>
<br></br>
<button className="action-button" type="submit">Add Goal</button>
<br></br>
</form>
</div>
    )

}


}

export default AddGoal