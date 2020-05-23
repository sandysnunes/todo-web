import React from 'react';
import './App.css';
import Todos from './components/Todos'

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
        completed: true
      }
    ]
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }

}


export default App;
