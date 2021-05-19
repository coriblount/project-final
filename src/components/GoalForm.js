import React, { Component } from 'react'

class AddGoal extends Component {
render() {
    return (
        <div>          
<form onSubmit={this.props.listSubmit}>
<input type="text" name="name" placeholder="name"></input>
<br></br>
<input type="text" className="goal" name="start" value="0"></input>
<input type="text" className="goal" name="completion" value="7"></input>
<button className="action-button" type="submit">Add Goal</button>
<br></br>
<br></br>
</form>
</div>
    )

}


}

export default AddGoal