
import React from 'react'

const Calendar = (props) => { 
return(
    <div>
    <li className="card" >{props.appointment.name}, {props.appointment.date}, {props.appointment.time}</li>
    <button onClick={props.appointmentEdit} className="action-button" >edit</button>
    <button onClick={props.appointmentDelete} className="action-button" >delete</button>
    </div>)


}


export default Calendar 