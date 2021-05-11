
import React from 'react'
import Goal from "./Goal"

const Goals = (props) => { 


return (
<div>
{props.goals.map(goal => <Goal key={goal.id} goal={goal} goalSubmit={props.goalSubmit} goalDone={props.goalDone} goalDelete={props.goalDelete}/>)}
</div>
)

}


export default Goals 

