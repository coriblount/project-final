import React from 'react'

const Trips = (props) => { 

 let trips = props.trips.map(trip => <div key={trip.id} >
     <h4>{trip.name}, {trip.date}, {trip.destination}</h4>
     </div>)


return (
<div>
<form>New Trip</form>
<input type="text"></input>
<button type="submit">Add</button>
{trips}
</div>
)

}


export default Trips 