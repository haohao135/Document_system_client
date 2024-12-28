import logo from './logo.svg';
import './App.scss';
import Login from './Login/login.js';
import Register from './Register/register.js'
import Home from './Home/home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header"></header> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
