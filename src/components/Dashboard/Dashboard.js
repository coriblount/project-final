import React from 'react';
import Trips from '../Trips'
import Goals from '../Goals'

class Dashboard extends React.Component {

state = {
  trips: []
}

componentDidMount () {
  console.log('test')
  fetch("http://localhost:3000/trips")
  .then(resp => resp.json())
  .then(data => this.setState({trips: data}))
}



  render(){

    return(
      <div>
        <h4>Trips</h4>
        <Trips trips={this.state.trips}/>
        <h4>Goals</h4>
        <Goals />
        <h4>To do List</h4>
        <h4>Finances</h4>
        <h4>Calendar</h4>
      </div>
    )
  }
}

export default Dashboard