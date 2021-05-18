import React from 'react'

class CalendarForm extends React.Component {
    
    
    render() {

        // const today = Date.parse()
        // const todayFormat = today.toLocaleDateString('en',{ weekday: 'short', month:'short',day:'2-digit',year:'numeric'})

        // const day = [(this.props.value)] ;
        // const todayFormat = day.toLocaleDateString('en',{ weekday: 'short', month:'short',day:'2-digit',year:'numeric'})
        
    // const day = [
    // { value: this.props.value.toLocaleDateString('en',{ weekday: 'short', month:'short',day:'2-digit',year:'numeric'}) }
    // ];

    //   const day = [{  value: this.props.value }];

    // const value = {this.props.value.splice(3, 1)}

    const value = [(this.props.value.slice(0,15))]
    // console.log(this.props.value)

        return(
        <div>
        <form onSubmit={this.props.handleAppointment}>
        <input type="text" name="name" placeholder="name"></input>
        <br></br>
        <input type="text" name="date" value={value}></input>
        <br></br>
        <input type="text" name="time" placeholder="time"></input>
        <br></br>
        <button className="action-button" type="submit">New Appointment</button>
        </form>

        </div>
        )
    }
}

export default CalendarForm