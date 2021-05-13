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
import SearchForm from '../SearchForm'
import SearchAppointments from '../SearchAppointments'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


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
    apptForm: false,
    showFinances: [],
    showAppointments: []
  }

  componentDidMount() {
    // console.log(this.props.currentUser)
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
      .then(res => res.json())
      .then(user =>{
        this.setState({
          trips: user.trips,
          goals: user.goals,
          list: user.list_items,
          finances: user.finance_items,
          appointments: user.appointments

        })
      })

  }

  listSubmit = (e) => {
    e.preventDefault()

    let newGoal = {
      "name": e.target[0].value,
      "start_date": e.target[1].value,
      "completion_date": e.target[2].value
    }
    // console.log(newGoal)
    fetch("http://localhost:3000/api/v1/goals", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(newGoal)
    })
      .then(resp => resp.json())
      .then(newGoal => console.log(newGoal))
    //   this.setState({
    //   goals: [...this.state.goals, newGoal]
    // })
  }

  tripSubmit = (e) => {
    e.preventDefault()
    let newName = e.target[0].value
    let newDate = e.target[1].value
    let newDestination = e.target[2].value

    let newTrip = {
      "name": newName,
      "date": newDate,
      "destination": newDestination
    }
    // console.log(newTrip)
    fetch("http://localhost:3000/api/v1/trips/", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(newTrip)
    })
      .then(resp => resp.json())
      .then(newTrip => console.log(newTrip))
    //    this.setState({
    //   trips: [...this.state.trips, newTrip]
    // }))
  }

  handleAppointment = (e) => {
    e.preventDefault()
    // console.log(e.target.value)

    // let newName = e.target[0].name
    // let newDate = e.target[1].value
    // let newDestination = e.target[2].value
    let newAppointment = {
      name: e.target[0].value,
      date: e.target[1].value,
      time: e.target[2].value
    }

    // console.log(newAppointment)

    fetch("http://localhost:3000/api/v1/appointments/", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(newAppointment)
    })
      .then(resp => resp.json())
      .then(newAppt => console.log(newAppt))
    //   this.setState({
    //   appointments: [...this.state.appointments, newAppointment]
    // }))
  }

  submitExpense = (e) => {
    e.preventDefault()
    // console.log(e.target.value)

    // let newName = e.target[0].name
    // let newDate = e.target[1].value
    // let newDestination = e.target[2].value
    let newExpense = {
      name: e.target[0].value,
      amount: e.target[1].value,
      month: e.target[2].value
    }

    // console.log(newExpense)

    fetch("http://localhost:3000/api/v1/finance_items", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(newExpense)
    })
      .then(resp => resp.json())
      .then(newExpense => console.log(newExpense))
    //   this.setState({
    //   appointments: [...this.state.appointments, newAppointment]
    // }))
  }


  allGoals = () => {
    // console.log('clicked')
    this.setState({ allGoals: !this.state.allGoals })
  }

  goalForm = () => {
    // console.log('clicked')
    this.setState({ goalForm: !this.state.goalForm })
  }

  allTrips = () => {
    // console.log('clicked')
    this.setState({ allTrips: !this.state.allTrips })
  }

  tripForm = () => {
    // console.log('clicked')
    this.setState({ tripForm: !this.state.tripForm })
  }

  allList = () => {
    this.setState({ allList: !this.state.allList })
  }

  listForm = () => {
    this.setState({ listForm: !this.state.listForm })
  }

  allFinance = () => {
    this.setState({ allFinance: !this.state.allFinance })
  }

  financeForm = () => {
    this.setState({ financeForm: !this.state.financeForm })
  }

  allAppt = () => {
    this.setState({ allAppt: !this.state.allAppt })
  }

  apptForm = () => {
    this.setState({ apptForm: !this.state.apptForm })
  }


  apptForm = () => {
    this.setState({ apptForm: !this.state.apptForm })
  }

  todoSubmit = (e) => {
    e.preventDefault()
    // console.log(e)

    let newTask = { name: e.target[0].value }
    console.log(newTask)

    fetch("http://localhost:3000/api/v1/list_items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
      .then(resp => resp.json())
      .then(newTodo => this.setState({ list: [...this.state.list, newTodo] })
      )
    e.target.reset();
  }

  handleGoal = (goal) => {
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({ start: goal.start })
    })
      .then(resp => resp.json())
      .then(numberGoal => this.setState({
        goals: this.state.goals.map(goal => goal.id === numberGoal.id ? numberGoal : goal)
      }))
  }

  handleReset = (goal) => {
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({ start: goal.start - 7 })
    })
      .then(resp => resp.json())
      .then(numberGoal => this.setState({
        goals: this.state.goals.map(goal => goal.id === numberGoal.id ? numberGoal : goal)
      }))
  }


  displayFinances = () => {
    const showFinances = this.state.finances.filter(finance => finance.month.toLowerCase().includes(this.state.showFinances))
    return showFinances
  }


  searchFinances = (e) => {
    this.setState({
      showFinances: e.target.value
    })
  }

  displayAppointments = () => {
    const showAppointments = this.state.appointments.filter(appt => appt.name.toLowerCase().includes(this.state.showAppointments))
    return showAppointments
  }


  taskDelete = () => {
    console.log('delete task')
  }

  goalDone = () => {
    console.log('done')
  }

  goalDelete = () => {
    console.log('delete goal')
  }

  appointmentEdit = () => {
    console.log('edit appointment')
  }

  appointmentDelete = () => {
    console.log('delete appointment')
  }

  financeEdit = () => {
    console.log('edit expense')
  }

  financeDelete = () => {
    console.log('delete expense')
  }

  tripEdit = () => {
    console.log('edit trip')
  }

  tripDelete = () => {
    console.log('delete trip')
  }

  searchAppointments = (e) => {
    this.setState({
      showAppointments: e.target.value
    })
  }

  render() {

    return (
      <div>
        <h4>To do List</h4>
        <button className="button" onClick={this.allList}><h3>Todo List</h3></button>
        <button className="button" onClick={this.listForm}><h3>New task</h3></button>
        {this.state.listForm && <ListForm todoSubmit={this.todoSubmit} />}
        {this.state.allList && <Lists list={this.state.list} taskDelete={this.taskDelete} />}

        <h4>Calendar</h4>
        <button className="button" onClick={this.allAppt}><h3>My Calendar</h3></button>
        <button className="button" onClick={this.apptForm}><h3>New Appointment</h3></button>
        {this.state.allAppt && <SearchAppointments searchAppointments={this.searchAppointments} />}
        {this.state.apptForm && <CalendarForm handleAppointment={this.handleAppointment} />}
        {this.state.allAppt && <Calendar />}
        {this.state.allAppt && <Calendars appointments={this.displayAppointments()} appointmentEdit={this.appointmentEdit} appointmentDelete={this.appointmentDelete} />}

        <h4>Finances</h4>
        <button className="button" onClick={this.allFinance}><h3>Finances</h3></button>
        <button className="button" onClick={this.financeForm}><h3>New add bill</h3></button>
        {this.state.financeForm && <FinanceForm submitExpense={this.submitExpense} />}
        {this.state.allFinance && <SearchForm searchFinances={this.searchFinances} />}
        {this.state.allFinance && <Finances finances={this.displayFinances()} financeEdit={this.financeEdit} financeDelete={this.financeDelete} />}

        <h4>Travel</h4>
        <button className="button" onClick={this.allTrips}>My Trips</button>
        <button className="button" onClick={this.tripForm}>Add a new trip</button>
        {this.state.tripForm && <TripForm tripSubmit={this.tripSubmit} />}
        {this.state.allTrips && <Trips trips={this.state.trips} tripDelete={this.tripDelete} tripEdit={this.tripEdit} />}
        <br></br>
        <button className="button"><a id="link" href='https://upgradedpoints.com/wp-content/uploads/2018/10/Printable-Travel-Packing-List.pdf'><h3>My packing list</h3></a></button>
        <br></br>

        <h4>Weekly Goals</h4>
        <button className="button" onClick={this.allGoals}><h3>My goals</h3></button>
        <button className="button" onClick={this.goalForm}><h3>Add new Goal</h3></button>
        {this.state.goalForm && <GoalForm listSubmit={this.listSubmit} />}
        {this.state.allGoals && <Goals goals={this.state.goals} handleGoal={this.handleGoal} handleReset={this.handleReset} goalDelete={this.goalDelete} />}
        <br></br>
      </div>
    )
  }
}

export default Dashboard