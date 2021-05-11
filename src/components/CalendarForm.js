import React from 'react'

class CalendarForm extends React.Component {
    render() {
    return(
        <div>
        <form onSubmit={this.props.handleAppointment}>
        <input type="text" name="name" placeholder="name"></input>
        <br></br>
        <input type="text" name="date" placeholder="date"></input>
        <br></br>
        <input type="text" name="time" placeholder="time"></input>
        <br></br>
        <button className="action-button" type="submit">New Appointment</button>
        </form>

        </div>
        )
    }
}

export default CalendarForm