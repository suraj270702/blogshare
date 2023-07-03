import Login from "./components/Login";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(localStorage.getItem("login"));


  return (
    <BrowserRouter>
      <NavBar login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Home login={login}/>} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />

        <Route path="/createpost" element={<Post login={login} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
