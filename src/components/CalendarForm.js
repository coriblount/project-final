import React from 'react'

class addAppointment extends React.Component {
    render() {
    return(
        <div>
        <form onClick={this.handleAppointment}>
      
        <input type="text" name="name" placeholder="name"></input>
        <br></br>
        <input type="text" name="date" placeholder="date"></input>
        <br></br>
        <input type="text" name="time" placeholder="time"></input>
        <br></br>
        <button type="submit">Add Appointment</button>
        </form>
        {calendar}

        </div>
        )
    }
}

export default addAppointment