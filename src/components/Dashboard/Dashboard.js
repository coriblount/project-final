import React from 'react';
import Trips from '../Trips'
import Goals from '../Goals'
import Lists from '../Lists'
import Finances from '../Finances'
import Calendars from '../Calendars'
import GoalForm from '../GoalForm'
import TripForm from '../TripForm'
import FinanceForm from '../FinanceForm'
import ListForm from '../ListForm'
import CalendarForm from '../CalendarForm'

class Dashboard extends React.Component {

state = {
  trips: [],
  goals: [],
  list: [], 
  finances: [], 
  appointments: [],
  allGoals: false,
  goalForm: false,
  allTrips: false,
  tripForm: false,
  allList: false,
  listForm: false,
  allFinance: false,
  financeForm: false,
  allAppt: false,
  apptForm: false
}

componentDidMount () {
  fetch("http://localhost:3000/trips")
  .then(resp => resp.json())
  .then(data => this.setState({trips: data}))

  fetch("http://localhost:3000/goals")
  .then(resp => resp.json())
  .then(data => this.setState({goals: data}))


   fetch("http://localhost:3000/list_items")
  .then(resp => resp.json())
  .then(data => this.setState({list: data}))

   fetch("http://localhost:3000/finance_items")
  .then(resp => resp.json())
  .then(data => this.setState({finances: data}))


   fetch("http://localhost:3000/appointments")
  .then(resp => resp.json())
  .then(data => this.setState({appointments: data}))

}

listSubmit = (e) => {
  e.preventDefault()

let newGoal = {
  "name": e.target[0].value,
  "start_date": e.target[1].value,
  "completion_date": e.target[2].value
}
console.log(newGoal)
fetch("http://localhost:3000/goals/", {
  method: "POST", 
  headers: {
    'content-type': 'application/json',
    'accept':'application/json'
  },
  body: JSON.stringify(newGoal)
})
.then(resp => resp.json())
.then(newGoal => this.setState({
  goals: [...this.state.goals, newGoal]
}))
}


tripSubmit = (e) =>{
  e.preventDefault()
  let newName = e.target[0].value
  let newDate = e.target[1].value
  let newDestination = e.target[2].value

  let newTrip = {
    "name": newName, 
    "date": newDate,
    "destination" : newDestination
  }
console.log(newTrip)
fetch("http://localhost:3000/trips/", {
  method: "POST", 
  headers: {
    'content-type': 'application/json',
    'accept':'application/json'
  },
  body: JSON.stringify(newTrip)
})
.then(resp => resp.json())
.then(newTrip => this.setState({
  goals: [...this.state.trips, newTrip]
}))
}

handleAppointment = (e) => {
e.preventDefault()
let newName = e.target[0].value
let newDate = e.target[1].value
let newTime = e.target[2].value

let newAppointment = {
"name": newName,
"date": newDate, 
"time": newTime
}

}


allGoals = () => {
  // console.log('clicked')
  this.setState({allGoals: !this.state.allGoals})
}

goalForm = () => {
  // console.log('clicked')
  this.setState({goalForm: !this.state.goalForm})
}

allTrips = () => {
  // console.log('clicked')
  this.setState({allTrips: !this.state.allTrips})
}

tripForm = () => {
  // console.log('clicked')
  this.setState({tripForm: !this.state.tripForm})
}

allList = () => {
  this.setState({allList: !this.state.allList})
}

listForm = () => {
this.setState({listForm: !this.state.listForm})
}

allFinance = () => {
  this.setState({allFinance: !this.state.allFinance})
}

financeForm = () => {
this.setState({financeForm: !this.state.financeForm})
}

allAppt = () => {
  this.setState({allAppt: !this.state.allAppt})
}

apptForm = () => {
this.setState({apptForm: !this.state.apptForm})
}


todoSubmit = (e) => {
  e.preventDefault()

fetch("http://localhost:3000/list_items/", {
  method: "POST", 
  headers: {
    'content-type': 'application/json',
    'accept':'application/json'
  },
  body: JSON.stringify({"name": e.target.name.value})
})
.then(resp => resp.json())
.then(newTodo => this.setState({list: newTodo}))
}


  render(){

    return(
      <div>
        <h4>To do List</h4>
        <button className="button" onClick={this.allList}><h3>Todo List</h3></button>
        <button className="button" onClick={this.listForm}><h3>New task</h3></button>
        {this.state.listForm && <ListForm todoSubmit={this.todoSubmit}/>}
        {this.state.allList && <Lists list={this.state.list}/>}
        <hr></hr>
        <h4>Calendar</h4>
        <button className="button" onClick={this.allAppt}><h3>My Calendar</h3></button>
        <button className="button" onClick={this.apptForm}><h3>New Appointment</h3></button>
        {this.state.apptForm && <CalendarForm handleAppointment={this.handleAppointment}/>}
        {this.state.allAppt && <Calendars appointments={this.state.appointments}/>}
        <h4>Finances</h4>
        <button className="button" onClick={this.allFinance}><h3>Finances</h3></button>
        <button className="button" onClick={this.financeForm}><h3>New add bill</h3></button>
        {this.state.financeForm && <FinanceForm />}
        {this.state.allFinance && <Finances finances={this.state.finances}/>}
        <h4>Travel</h4>
        <button className="button" onClick={this.allTrips}>My Trips</button>
        <button className="button" onClick={this.tripForm}>Add a new trip</button>
        {this.state.tripForm &&  <TripForm tripSubmit={this.tripSubmit}/>}
        {this.state.allTrips &&  <Trips trips={this.state.trips}/>}
        <hr></hr>
        <h4>Weekly Goals</h4>
        <button className="button" onClick={this.allGoals}><h3>My goals</h3></button>
        <button className="button" onClick={this.goalForm}><h3>Add new Goal</h3></button>
        {this.state.goalForm && <GoalForm listSubmit={this.listSubmit}/>}
        {this.state.allGoals && <Goals goals={this.state.goals} />}
        <hr></hr>
      </div>
    )
  }
}

export default Dashboard