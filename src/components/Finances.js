

// import React from 'react'

// const Finances = (props) => { 

//  let finances = props.finances.map(bill => <div key={bill.id} >
//      <li>{bill.name}, {bill.amount}, {bill.month}</li>
//      </div>)


// return (
// <div>
// <form>Add new bill</form>
// <input type="text"></input>
// <button type="submit">Add</button>
// {finances}
// </div>
// )

// }




import React from 'react'
import Finance from "./Finance"

const Finances = (props) => { 


return (
<div>
{props.finances.map(finance  => <Finance key={finance.id} finance={finance} />)}
</div>
)

}

export default Finances 


