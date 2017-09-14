import Todo from "../js/components/todo.js"
import React from 'react'
import renderer from 'react-test-renderer'
import Store from '../js/store.js'
jest.mock('../js/store.js')

describe("Todo", () => {
  it("should render test todo", ()=> {
    // let todo = {
    //   title: "Test title",
    //   completed: false
    // }
    // let store = {
    //   setCompleted: () => {
    //     todo.completed = true;
    //   }
    // }
    let store = new Store()
    let component = renderer.create(
      <Todo store={store} todo={store.todos[0]}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
    
  })
})
