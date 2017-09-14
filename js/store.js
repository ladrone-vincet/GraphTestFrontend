import {observable} from 'mobx'
import NetworkProvider from './networkProvider'

export default class Store {
  @observable todos = [];
  networkProvider = new NetworkProvider();

  constructor() {
    console.log("Appeared");
    this.networkProvider
      .fetchData('todos{id title completed}')
      .then((res) => { this.todos = res.data.todos })
  }

  addTodo(title) {
    this.networkProvider
      .fetchData(`add(title:"${title}")`, true)
      .then((res) => {this.todos.push(res.data.add[0])})
  }

  deleteTodo(title) {
    this.networkProvider
      .fetchData(`delete(title:"${title}")`)
  }


  //TODO update backend and make it good
  setCompleted(id) {
    console.log("I will change the id you know");
    let todo = this.todos.find((item, index, arr) => {
      return item.id == id
    })
    console.log(todo, id);
    todo.completed = !todo.completed
    this.networkProvider.fetchData(`setCompleted(title: "${todo.title}")`, true)
    .then((res) => {todo.completed = res.data.update.completed})
  }

}
