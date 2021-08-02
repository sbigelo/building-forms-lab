// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  
  state = {
    name: ''
  }
  
  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  
  
  
  
  render() {
    return(
      <div>
       <form onSubmit={(event) => this.handleSubmit(event)}>
         <label>Add Band</label>
         <input onChange={(event) => this.handleChange(event)} value={this.state.name} type='text'></input>
         <input type='submit'></input>
          <p>{this.state.text}</p>
       </form>
      </div>
    )
  }
}


export default BandInput
