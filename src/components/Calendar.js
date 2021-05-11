import React from 'react'

class Calendar extends React.Component {


    render() {
        return (
     <div>
    <li>{this.props.appointment.name}, {this.props.appointment.date}, {this.props.appointment.time}</li>
    <button onClick={this.props.appointmentEdit} className="action-button" >edit</button>
    <button onClick={this.props.appointmentDelete} className="action-button" >delete</button>
    </div>
        )
    }
}

export default Calendar 