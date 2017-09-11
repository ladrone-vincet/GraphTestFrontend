import React from 'react'
import {observer} from 'mobx-react'


const Todo = observer(({todo, store}) => {

  //@action
  const onCheckboxChange = () => {
    //todo.completed = !todo.completed
    store.setCompleted(todo.id)
  }

  return (<div>
      <input type="checkbox" checked={todo.completed} onChange={onCheckboxChange}/>
      {todo.title} : {`${todo.completed}`}
    </div>
  )
})

export default Todo
