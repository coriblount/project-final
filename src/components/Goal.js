
import React from 'react' 
import { PieChart, Pie, Tooltip} from 'recharts';



class Goal extends React.Component { 


handleDone = () => {
  // console.log(+this.props.goal.start)
  
  if (this.props.goal.start < 7) {
   ++this.props.goal.start
    this.props.handleGoal(this.props.goal)}
    else {
       window.open('https://monophy.com/media/J5M0H2Nb76f8aQXDSE/monophy.gif', "_blank")
    }
}

handleReset = () => {
//  console.log('clicked')
 if (this.props.goal.start === 7) {
    this.props.handleReset(this.props.goal)}
}


render(){
  const goal = [
    { name: 'days completed', value: this.props.goal.start },
    { name: 'days to complete goal', value: this.props.goal.completion}
  ];

// console.log(this.props.goal)
return (

<div>
    <li>{this.props.goal.name}</li>
    <h4>{`${this.props.goal.completion} Days  - ${this.props.goal.start} Completed`}</h4>
    <button onClick={() => this.handleDone(this.props.goal)} className="action-button" >done</button>
    <button className="action-button" onClick={() => this.props.goalDelete(this.props.goal)} >delete</button>
    <button onClick={() => this.handleReset(this.props.goal)} className="action-button" >reset</button>
     <br></br>
        <br></br>
     <PieChart style={{margin: "auto"}} width={100} height={100}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={goal}
            cx="50%"
            cy="50%"
            outerRadius={25}
            fill="#808080"
            label
          />
          <Tooltip />
        </PieChart>
{/* 
        <PieChart width={100} height={100}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={sleep}
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