import React from 'react'

class Finance extends React.Component { 

    

render () {
    return (
         <div>
        <li className = "card">{this.props.finance.name}, {this.props.finance.amount}, {this.props.finance.month}</li>
        <button onClick={this.props.financeEdit} className="action-button" >edit</button>
        <button onClick={this.props.financeDelete} className="action-button" >delete</button>
    </div>
    
    )
}
    


}


export default Finance