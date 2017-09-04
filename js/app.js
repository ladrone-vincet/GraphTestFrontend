import ReactDOM from 'react-dom'
import React from 'react'
import { observable, computed, action } from 'mobx'
import {observer} from 'mobx-react'
// 
// class RequestsProvider {
//
// }


class Store {
  @observable todos = [];
  // requestProvide = new RequestsProvider();

  constructor() {
    console.log("Appeared");
    this.fetchData()
  }

  @action
  fetchData() {
    console.log("Settign state");
    let xhr = new XMLHttpRequest()
    let url = 'http://localhost:8000/graphql'
    let query = JSON.stringify({"query":'{todos{title}}'})

    xhr.responseType = 'json'
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = onChange.bind(this, xhr)
    xhr.send(query)


    function onLoad (xhr) {
      this.todos = xhr.response.data.todos;
      console.log("This is this - " + JSON.stringify(this));
    }

    function onError (xhr) {
      this.todos = []
      console.log("Connection Error - State is empty");
    }

    function onChange (xhr) {
        if(xhr.readyState == 4 && xhr.status == 200) {
          onLoad.call(this, xhr)
        } else if (xhr.readyState == 4 && xhr.status != 200) {
          onError.call(this, xhr)
        }
    }
  }

  @action
  addTodo() {

  }

}

@observer
class App extends React.Component {
  constructor() {
    super()
  }

  @computed get showTitles() {
    return this.props.appState.todos.map((todo) => {
        return <div key={todo.title}>{todo.title}</div>
    })
  }

  render() {

    return (<div>
    <p>The state is great</p>
    {this.showTitles}
    </div>)
  }
}

let store = new Store()
ReactDOM.render(
  <App appState={store}/>,
  document.getElementById('root')
)
