import React from "react";
import TaskLists from "./components/addList";
// import AddTask from "./components/addTask";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import logo from "./TO-DO-LIST9.svg";


library.add(faTrash);
class App extends React.Component {
  state = {
    tasks: [],
    currentTask: {
      content: "",
      key: ""
    }
  };
  HandleInput = (e) => {
    this.setState({
      currentTask: {
        content: e.target.value,
        key: Date.now()
      }
    });
  };
  AddTask = (e) => {
    e.preventDefault();
    const newTask = this.state.currentTask;
    if (newTask.content !== "") {
      const newTaskS = [...this.state.tasks, newTask];
      this.setState({
        tasks: newTaskS,
        currentTask: {
          content: "",
          key: ""
        }
      });
    }
  };
  DeleteTask = (key) => {
    const filteredTasks = this.state.tasks.filter((task) => task.key !== key);
    this.setState({
      tasks: filteredTasks
    });
  };

  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="logo" />
        <header className="App">
          <form id="toDoForm" className="listForm" onSubmit={this.AddTask}>
            <input
              type="text"
              placeholder="Please Enter your Task here"
              value={this.state.currentTask.content}
              onChange={this.HandleInput}
              // {this.state.currentTask.content}
            />
            <button type="submit"> ADD</button>
          </form>
          <TaskLists tasks={this.state.tasks} deleteTask={this.DeleteTask} />
        </header>
      </div>
    );
  }
}
export default App;
