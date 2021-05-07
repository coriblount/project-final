

import React from 'react'
import Goal from "./Goal"

const Goals = (props) => { 


return (
<div>
{props.goals.map(goal => <Goal key={goal.id} goal={goal} listSubmit={props.listSubmit}/>)}
</div>
)

}


export default Goals 

