import React from 'react' 
// import { PieChart, Pie, Tooltip} from 'recharts';

const exercise = [
  { name: 'days completed', value: 2 },
  { name: 'remaining days', value: 5 }
];


// const sleep = [
//   { name: 'done', value: 1 },
//   { name: 'remaining', value: 6 }
// ]; 


// const water = [
//   { name: 'done', value: 4 },
//   { name: 'remaining', value: 3 }
// ];


class Goal extends React.Component { 
    
    
handleDone = () => {
    console.log('clicked')
}

    

render() {


return (


<div>
    {/* <li>{this.props.goal.name}</li>
    <button onClick={this.handleDone} className="action-button" >done</button>
    <button className="action-button" >delete</button>
     <PieChart width={100} height={100}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={exercise}
            cx="50%"
            cy="50%"
            outerRadius={20}
            fill="#A52A2A"
            label
          />
          <Tooltip />
        </PieChart> */}
</div>

)
}
}
export default Goal 