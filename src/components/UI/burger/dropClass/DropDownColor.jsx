import React, { Component } from 'react'

export class DropDownColor extends Component {
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
                <option value="1">gold</option>
                <option value="2">black</option>
                <option value="3">white</option>
                
              </select>
             </form>
      </div>
    )
  }
}

export default DropDownColor