import React from 'react'
import Calendar from './Calendar'

const Calendars = (props) => {
return(
    <div>
        {props.calendars.map(calendar => 
            <Calendar key={calendar.id} calendar={calendar}/>)}
    </div>
)
   
}

export default Calendars