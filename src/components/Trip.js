import React from 'react'

const Trip = (props) => { 
    return (

        <div><li>{props.trip.name}, {props.trip.date}, {props.trip.destination}</li>
        <button className="action-button" >edit</button>
        <button className="action-button" >delete</button>
        </div>
        
        )



}


export default Trip