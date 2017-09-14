export default class Store {
  constructor() {
    this.todos = [{id: 1, title: "one", completed: false},
  {id: 2, title: "two", completed: false},
{id: 3, title: "three", completed: false}]
  }

  setCompleted(id) {
    this.todos[id-1].completed = !this.todos[id-1].completed;
  }
}
