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


