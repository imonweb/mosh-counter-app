import React, { Component } from "react"
import "./counter.css"

class Counter extends Component {
  state = { count: 0 }
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count: 0
  //   }
  // }

  handleIncrement(){
    this.setState({
      count: this.state.count + 1,
    })
    console.log(this.state.count)
  }
 
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleIncrement()} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </>
    )
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.state.count === 0 ? "warning" : "primary"
    return classes
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? "Zero" : count
  }

}

export default Counter
