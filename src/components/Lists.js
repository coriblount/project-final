import React from 'react'
import List from "./List"

const Lists = (props) => { 


return (
<div>
{props.list.map(item => <List key={item.id} item={item} todoSubmit={props.todoSubmit}/>)}
</div>
)

}


export default Lists 
