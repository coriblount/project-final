import React from 'react'

class Finance extends React.Component { 

    

render () {
    return (
         <div>
<<<<<<< HEAD
        <li className = "card">{this.props.finance.name}, {this.props.finance.amount}, {this.props.finance.month}</li>
=======
        <li>{ this.props.finance.name}, {this.props.finance.amount}, {this.props.finance.month}</li>
>>>>>>> 1e2f821a27474b4ea206cf8f6dfa9330e25bd333
        <button onClick={this.props.financeEdit} className="action-button" >edit</button>
        <button onClick={this.props.financeDelete} className="action-button" >delete</button>
        <button onClick={this.props.financeAddRecurringExpense} className="action-button" >Add Reoccuring Expense</button>
    </div>
    
    )
}
    


}


export default Finance