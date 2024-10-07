import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Login from "./pages/Login"; // Import the Login component
import Homepage from "./pages/Homepage";

// added a temp change 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/tasks" element={< TodoList/>} />
          <Route path="/" element={< Homepage/>} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
