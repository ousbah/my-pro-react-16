import React, { Component } from "react"
import TodoBannner from './components/TodoBanner'
import TodoCreator from './components/TodoCreator'
import TodoRow from './components/TodoRow'
import VisibilityControl from './components/VisibilityControl'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: 'Bah',
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }],
      showCompleted: true
    }
  }

  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value
    })
  }

  // Checks that there is an existing item with the same text and, if there’s not,  
  // uses the setState method to add a new item to the todoItems array and resets 
  // the newItemText property, which has the effect of clearing the input element.
  // The addition of the new item to the array uses the spread operator, which 
  // expands an array.
  createNewTodo = (task) => {
    if (!this.state.todoItems
              .find(item => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, 
            { action: task, done: false }],
        newItemText: ""
      })
    }
  }

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => 
            item.action === todo.action ? { ...item, done: !item.done } : item )
    })
  }
  
  // To separate the complete and incomplete tasks, a param is added to the 
  // todoTableRows method and the filter method is used to select objects 
  // from the state data array based on the value of the "done" prop 
  todoTableRows = (doneValue) => this.state.todoItems
            .filter(item => item.done === doneValue).map(item => 
                <TodoRow key={ item.action } 
                         item={ item } 
                         callback={ this.toggleTodo } />)

  render = () => 
    <div>
      <TodoBannner name={ this.state.username } tasks={ this.state.todoItems } />
      <div className="container-fluid">
        <TodoCreator callback={ this.createNewTodo } />
        {/* Displays the non completed tasks */}
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
            </thead>
            <tbody>{ this.todoTableRows(false) }</tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          {/* The visibility component is configured so it changes the value of the 
              App component's ShowCompleted state data prop when the user toggles 
              the checkbox. */}
          <VisibilityControl description="Completed Tasks" 
                             isChecked={ this.state.showCompleted } 
                             callback={ (checked) => 
                                this.setState({ showCompleted: checked }) } />
        </div>
        
        {/* To display the completed tasks, a second table element is added which will
            be displayed if the showCompleted prop is true. So the table and its content
            are placed inside a data binding expression, and the && operator is used. */}
        { this.state.showCompleted && 
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                { this.todoTableRows(true) }
              </tbody>
            </table>

        }
      </div>
    </div>
}
