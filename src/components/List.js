import React from 'react'

const Lists = (props) => { 

 let lists = props.list.map(item => <div key={item.id} >
     <li>{item.name}</li>
     </div>)


return (
<div>
<form>New item</form>
<input type="text"></input>
<button type="submit">Add</button>
{lists}
</div>
)

}


export default Lists 