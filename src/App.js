import React from 'react';
import './App.css';
import Todos from './components/Todos'
import TodoService from './services/TodoService';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 2,
        title: "To study ReactJS",
        completed: false
      },
      {
        id: 3,
        title: "Read some book",
        completed: false
      }
    ]
  }

  componentDidMount() {
    //TODO sandys - to implement. See cors
    TodoService.fetchTodos().then((result) => {
      console.log(result)
    }).catch((err) => {
      console.error(err)
    });
  }

  markCompleted = (id) => {
    console.log("from App.js" + id)
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markCompleted}/>
      </div>
    );
  }

}


export default App;
