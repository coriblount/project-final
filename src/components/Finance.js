import React from 'react'

class Finance extends React.Component { 

        
financeEdit = () => {
    console.log('clicked')
}

financeDelete = () => {
    console.log('clicked')
}


render () {
    return (
         <div>
        <li>{this.props.finance.name}, {this.props.finance.amount}, {this.props.finance.month}</li>
        <button onClick={this.financeEdit} className="action-button" >edit</button>
        <button onClick={this.financeDelete} className="action-button" >delete</button>
    </div>
    
    )
}
    


}


export default Finance