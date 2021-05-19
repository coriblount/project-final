import React, { Component } from 'react'

class EditTrip extends Component {

    state = {
        trip: {name: '', date: '', destination: ''},
    }

    handleFormChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const oldTrip = this.state.trip;
        oldTrip[inputName] = inputValue;
        this.setState({trip: oldTrip});
    }

    saveForm = () => {
        fetch(`http://localhost:3000/api/v1/trips/${this.props.trip.id}`, {
            method: 'PATCH',
            body: JSON.stringify(this.state.trip),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(updatedTrip => {
            this.props.updateTrips(updatedTrip);
        })

        this.props.hideForm();
    }

    componentDidMount = () => {
        this.setState({trip: this.props.trip});
    }

    render() {
        const currentTrip = this.state.trip ;
        return (
            <div>
                <form>
                    <input type="text" onChange={(e) => this.handleFormChange(e)} name="name" value={currentTrip.name}></input>
                    <input type="text" onChange={(e) => this.handleFormChange(e)} name="date" value={currentTrip.date} placeholder="date"></input>
                    <input type="text" onChange={(e) => this.handleFormChange(e)} name="destination" value={currentTrip.destination} placeholder="destination"></input>

                    <button className="action-button" onClick={this.saveForm} type="submit">Edit Trip</button>
                    <br></br>
                </form>
            </div>

        )

    }


}

export default EditTrip