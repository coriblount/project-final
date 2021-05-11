import React from 'react'
import Calendar from './Calendar'

const Calendars = (props) => {
return(
    <div>
        {props.appointments.map(appointment => <Calendar key={appointment.id} appointment={appointment} displayAppointments={props.displayAppointments} appointmentEdit={props.appointmentEdit} appointmentDelete={props.appointmentDelete}/>)}
    </div>
)
   
}

export default Calendars