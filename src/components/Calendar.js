import React from 'react'

const Calendar = (props) => { 
return(
    <div>
    <li>{props.appointment.name}, {props.appointment.date}, {props.appointment.time}</li>
    </div>)


}


export default Calendar 