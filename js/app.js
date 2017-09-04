import ReactDOM from 'react-dom'
import React from 'react'
import { observable, computed, action } from 'mobx'
import {observer} from 'mobx-react'
import Store from './store'
import Todo from './components/todo'

@observer
class App extends React.Component {
  constructor() {
    super()
  }

  @computed get showTitles() {
    return this.props.store.todos.map((todo) => {
        return  <Todo key={todo.id} todo={todo}/>
    })
  }

  @action onNewTodo = () => {
    let todoTitle = prompt("Todo title:");
    this.props.store.addTodo(todoTitle)
  }
  

  render() {

    return (<div>
    <p>The state is great</p>
    {this.showTitles}

    <button onClick={this.onNewTodo}>Add a Todo</button>
    </div>)
  }
}

let store = new Store()
ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)
