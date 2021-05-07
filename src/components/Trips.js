
import React from 'react'
import Trip from "./Trip"

const Trips = (props) => { 


return (
<div>
{props.trips.map(trip => <Trip key={trip.id} trip={trip} />)}
</div>
)

}


export default Trips

