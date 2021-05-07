import React from 'react'

const Trip = (props) => { 
    return (

        <div><ul><li>{props.trip.name}, {props.trip.date}, {props.trip.destinations}</li></ul></div>
        
        )



}


export default Trip