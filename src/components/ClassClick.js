import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Button clicked in class component')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Click me iam class component</button>
      </div>
    )
  }
}

export default ClassClick
