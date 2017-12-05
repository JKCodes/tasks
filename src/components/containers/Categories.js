import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions' 

class Categories extends Component {

  render(){

    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {this.props.tasks.categories.map((category) =>{
              const color = (category == this.props.tasks.selectedCategory) ? 'red' : '#333'

              return ( 
                <li key={category}>
                  <a href="#" style={{color: color}}>{category}</a>
                </li>  
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    tasks: state.task
  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(stateToProps, dispatchToProps)(Categories)