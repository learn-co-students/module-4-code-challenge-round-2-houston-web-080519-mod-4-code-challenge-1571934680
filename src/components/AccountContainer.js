import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import Search from './Search'

class AccountContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      transactions:[],
      search: "",
      searchItems:[]
     
    }
  }
  componentDidMount(){
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(r=>r.json())
    .then( transactions=> this.setState({transactions: transactions}))
  }
  handleChange=(value)=>{
    this.setState({search: value})
    this.setState({searchItems: this.state.transactions.filter((transaction)=> transaction.description.includes(value))})
  }

  render() {
    console.log(this.state.searchItems)

    return (
      <div className="ui grid container">
        <CategorySelector />
        <Search transactions={this.state.transactions} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.searchItems} />
      </div>
    )
  }
}

export default AccountContainer
