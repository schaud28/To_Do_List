import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDosList from "./components/todos-list.component";
import EditToDo from "./components/edit-todo.component";
import CreateToDo from "./components/create-todo.component";
import logo from "./logo.svg";

function App() {
  return (
   <Router>
     <div className="container">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank" >
          <img src={logo} width="30" height="30" alt="codingthesmartway.com" />
          </a>
          <Link to="/" className="navbar-brand">MERN_STACK ToDo App</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todos</Link>
              </li>
            </ul>
            </div>
          
       </nav>
    <Route path="/" exact component={ToDosList} />
    <Route path="/edit/:id" component={EditToDo} />
    <Route path="/create" component={CreateToDo} />
    </div>
   </Router>

  );
}

export default App;
