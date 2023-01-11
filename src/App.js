import './App.css';
import Homepage from "./components/home/Homepage.js"
import Login from "./components/login/Login.js"
import Register from "./components/register/Register.js"
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Routes

} from "react-router-dom";
import {useState} from 'react';

function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <Router>
<Routes>
  <Route exact path="/">
    {
      user && user._id ? <Homepage/>:<Login/>
    }<Homepage/></Route>
  <Route path="/login"><Login setLoginUser={setLoginUser}/></Route>
  <Route path="/register"><Register/></Route>
</Routes>

      </Router>

    </div>
  );
}

export default App;
