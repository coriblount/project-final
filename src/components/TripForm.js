import React, { Component } from 'react'

class AddTrip extends Component {
render() {

    
    return (
        <div>
<form onSubmit={this.props.tripSubmit}>
<input type="text" name="name" placeholder="name"></input>
<br></br>
<input type="text" name="date" placeholder="start date"></input>
<br></br>
<input type="text" name="destination" placeholder="completion date"></input>
<br></br>
<button type="submit">Create</button>
<br></br>
</form>
        </div>

    )

}


}

export default AddTrip