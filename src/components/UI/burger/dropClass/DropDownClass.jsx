import React, { Component } from 'react'

export class DropDownClass extends Component {
    state={
        value:'3'
      }
       onChange= e =>{
        this.setState({value:e.target.value})
       }
  render() {const {value} = this.state
    return (
      <div>
         <form >
              
              <select  id="options" value={value} onChange={this.onChange}>
                <option value="1">XXS</option>
                <option value="2">XS</option>
                <option value="3">L</option>
                <option value="4">S</option>
              </select>
             </form>
      </div>
    )
  }
}

export default DropDownClass