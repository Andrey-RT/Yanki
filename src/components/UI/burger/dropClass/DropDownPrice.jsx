import React, { Component } from 'react'

export class DropDownPrice extends Component {
    state={
        value:'1'
      }
       onChange= e =>{
        this.setState({value:e.target.value})
       }
  render() {const {value} = this.state
    return (
      <div>
         <form >
              
              <select  id="options" value={value} onChange={this.onChange}>
                <option value="1">Ціна</option>
                <option value="2">до 5к</option>
                <option value="3">більше 5к</option>
                
                
              </select>
             </form>
      </div>
    )
  }
}

export default DropDownPrice