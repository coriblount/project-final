

import React from 'react'

const Finances = (props) => { 

 let finances = props.finances.map(bill => <div key={bill.id} >
     <li>{bill.name}, {bill.amount}, {bill.month}</li>
     </div>)


return (
<div>
<form>Add new bill</form>
<input type="text"></input>
<button type="submit">Add</button>
{finances}
</div>
)

}


export default Finances 