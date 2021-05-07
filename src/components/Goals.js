

import React from 'react'

const Goals = (props) => { 

 let goals = props.goals.map(goal => <div key={goal.id} >
     <li>{goal.name}, {goal.start_date}, {goal.completion_date}</li>
     </div>)


return (
<div>
<form>New goal</form>
<input type="text"></input>
<button type="submit">Add</button>
{goals}
</div>
)

}


export default Goals 