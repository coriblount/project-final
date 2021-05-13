

import React from 'react' 
// import { PieChart, Pie, Tooltip} from 'recharts';


// const sleep = [
  //   { name: 'done', value: 1 },
  //   { name: 'remaining', value: 6 }
  // ]; 
  
  
  // const water = [
    //   { name: 'done', value: 4 },
    //   { name: 'remaining', value: 3 }
    // ];
    
    // const exercise = [
    //   { name: 'days completed', value: 1 },
    //   { name: 'remaining days', value: 6 }
    // ];

class Goal extends React.Component { 

// onChange = (event) => {
// const { target: { name, value } } = event
// this.setState({ [name]: value, event: event })
// }
    
handleDone = () => {
  console.log(+this.props.goal.start)
  
  if (this.props.goal.start < 7) {
   ++this.props.goal.start
    this.props.handleGoal(this.props.goal
    )}
    else {
       window.open('https://monophy.com/media/J5M0H2Nb76f8aQXDSE/monophy.gif', "_blank")
    }
}

handleReset = () => {
 console.log('clicked')
 if (this.props.goal.start === 7) {
    this.props.handleReset(this.props.goal)}
 
}


render() {

return (

<div>
    <li>{this.props.goal.name}</li>
    <h4>{`${this.props.goal.completion} Days  - ${this.props.goal.start} Completed`}</h4>
    <button onClick={this.handleDone} className="action-button" >done</button>
    <button className="action-button" onClick={this.props.goalDelete} >delete</button>
    <button onClick={this.handleReset} className="action-button" >reset</button>
     <br></br>
        <br></br>
     {/* <PieChart width={100} height={100}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={exercise}
            cx="50%"
            cy="50%"
            outerRadius={30}
            fill="#808080"
            label
          />
          <Tooltip />
        </PieChart> */}
</div>

)
}
}
export default Goal 