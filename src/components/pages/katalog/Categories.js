import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories:[{
                key:'all',
                name:'New'
            },
            {
                key:'shuba',
                name:'Шуби'
            },
            {
                key:'palto',
                name:'Пальто'
            },
            {
                key:'kyrtka',
                name:'Куртки'
            },
            {
                key:'all',
                name:'Все'
            },
        ]
        }
    }
  render() {
    return (
      <div>
        {this.state.categories.map(el =>(
            <div key={el.key} onClick={()=> this.props.choseCategory(el.key)} >{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories