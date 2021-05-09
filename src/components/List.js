import React from 'react'

const Lists = (props) => { 

 let lists = props.list.map(item => <div key={item.id} >
     <li>{item.name}</li>
     </div>)


return (
<div>
<form>
<input type="text" name="name" placeholder="task"></input>
<br></br>
<button type="submit">Add task</button>
</form>
{lists}
</div>
)

}


export default Lists 