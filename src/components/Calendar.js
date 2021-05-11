import React from 'react'

class Calendar extends React.Component {

    
appointmentEdit = () => {
    console.log('clicked')
}

appointmentDelete = () => {
    console.log('clicked')
}

    render() {
        return (
     <div>
    <li>{this.props.appointment.name}, {this.props.appointment.date}, {this.props.appointment.time}</li>
    <button onClick={this.appointmentEdit} className="action-button" >edit</button>
    <button onClick={this.appointmentDelete} className="action-button" >delete</button>
    </div>
        )
    }
}

export default Calendar 