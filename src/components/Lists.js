import React from 'react'
import List from "./List"

const Lists = (props) => { 


return (
<div>
{props.list.map(item => <List key={item.id} item={item} taskDelete={props.taskDelete} />)}
</div>
)

}


export default Lists 
