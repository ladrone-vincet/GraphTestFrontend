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

}
