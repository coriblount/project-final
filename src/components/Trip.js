import React from 'react'

const Trip = (props) => { 

const handleClick = () => {
    props.tripEdit(props.trip)
}
 

    return (

      

        <div><li className="card">{props.trip.name}, {props.trip.date}, {props.trip.destination}</li>
        <button onClick={handleClick} className="action-button" >edit</button>
        <button onClick={() => props.tripDelete(props.trip)} className="action-button" >delete</button>
    
        </div>

        
        
        )



}

export default Trip