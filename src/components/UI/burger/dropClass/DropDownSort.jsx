import React, { Component } from 'react'

export class DropDownSort extends Component {
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
                <option value="1">Сортувати за</option>
                <option value="2">Зростанням</option>
                <option value="3">Спаданням</option>
                
              </select>
             </form>
      </div>
    )
  }
}

export default DropDownSort