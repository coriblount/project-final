import React from 'react'

class Finance extends React.Component { 

    

render () {
    return (
         <div>
        <li>{ this.props.finance.name}, {this.props.finance.amount}, {this.props.finance.month}</li>
        <button onClick={this.props.financeEdit} className="action-button" >edit</button>
        <button onClick={this.props.financeDelete} className="action-button" >delete</button>
        <button onClick={this.props.financeAddRecurringExpense} className="action-button" >Add Reoccuring Expense</button>
    </div>
    
    )
}
    


}


export default Finance