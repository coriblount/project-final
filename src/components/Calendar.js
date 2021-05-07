import React from 'react'

const Calendar = (props) => { 

 let calendar = props.appointments.map(appt => <div key={appt.id} >
     <li>{appt.name}, {appt.date}, {appt.time}</li>
     </div>)


return (
<div>
<form>New item</form>
<input type="text"></input>
<button type="submit">Add</button>
{calendar}
</div>
)

}


export default Calendar 