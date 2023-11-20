
import './App.css';
import Login from './login.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './signup.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;
