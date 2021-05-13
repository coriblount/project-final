import React from 'react'

const Trip = (props) => { 
    return (

        <div><li className="card">{props.trip.name}, {props.trip.date}, {props.trip.destination}</li>
        <button onClick={props.tripEdit} className="action-button" >edit</button>
        <button onClick={props.tripDelete} className="action-button" >delete</button>
        </div>
        
        )



}


export default Trip