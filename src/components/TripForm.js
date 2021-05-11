import React, { Component } from 'react'

class AddTrip extends Component {
render() {


    return (
        <div>
<form onSubmit={this.props.tripSubmit}>
<input type="text" name="name" placeholder="name"></input>
<br></br>
<input type="text" name="date" placeholder="date"></input>
<br></br>
<input type="text" name="destination" placeholder="destination"></input>
<br></br>
<button className="action-button" type="submit">Add Trip</button>
<br></br>
</form>
        </div>

    )

}


}

export default AddTrip