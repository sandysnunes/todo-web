import React from 'react';
import './App.css';
import Todos from './components/Todos'
import TodoService from './services/TodoService';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {todos : []}
  }

  componentDidMount() {
    TodoService.fetchTodos().then((result) => {
      this.setState({todos: result.data.data})
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
