import React from 'react';
import Trips from '../Trips'
import Goals from '../Goals'
import List from '../List'
import Finances from '../Finances'
import Calendar from '../Calendar'

class Dashboard extends React.Component {

state = {
  trips: [],
  goals: [],
  list: [], 
  finances: [], 
  appointments: []
}

componentDidMount () {
  console.log('test')
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




  render(){

    return(
      <div>
        <h4>My Trips</h4>
        <Trips trips={this.state.trips}/>
        <hr></hr>
        <h4>Weekly Goals</h4>
        <Goals goals={this.state.goals}/>
        <hr></hr>
        <h4>To do List</h4>
        <List list={this.state.list}/>
        <hr></hr>
        <h4>Finances</h4>
        <Finances finances={this.state.finances}/>
        <h4>Calendar</h4>
        <Calendar appointments={this.state.appointments}/>
      </div>
    )
  }
}

export default Dashboard