import React from 'react'

const Trip = (props) => { 

const handleClick = () => {
    props.tripEdit(props.trip)
}


    return (

      

        <div><li className="card">{props.trip.name}, {props.trip.date}, {props.trip.destination}</li>
        <button onClick={handleClick} className="action-button" >edit</button>
        <button onClick={() => props.tripDelete(props.trip)} className="action-button" >delete</button>
        
        <tr>
        <td>{props.trip.name}</td>
        <td>{props.trip.date}</td>
        <td>{props.trip.destination}</td>
        <td><button onClick={handleClick}
        type="button"> Edit Trip</button>
        </td>
        </tr>

        
        </div>

        
        
        )



}

export default Trip