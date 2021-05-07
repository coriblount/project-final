import React from 'react' 

const Goal = ({goal}) => {

return (

<div><li>{goal.name}, {goal.start_date}, {goal.completion_date}</li></div>

)
}

export default Goal 