import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import backgroundImageUrl from './assets/desk_bg.png'
import Home from "./components/Home";

function App() {
  return (
    <div className="App" style={{ backgroundImage: backgroundImageUrl }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
