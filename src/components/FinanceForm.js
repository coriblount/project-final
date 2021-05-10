import React, { Component } from 'react'

class AddExpense extends Component {
render() {
    return (
        <div>
<form onSubmit={this.props.submitExpense}>
<input type="text" name="name" placeholder="name"></input>
<br></br>
<input type="text" name="amount" placeholder="amount"></input>
<br></br>
<input type="text" name="month" placeholder="month"></input>
<br></br>
<button className={"action-button"} type="submit">Add Expense</button>
<br></br>
</form>
        </div>

    )

}


}

export default AddExpense