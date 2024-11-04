import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DeletePage from "./pages/RemovePage";
import UpdatePage from "./pages/UpdatePage";



function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/update" element={<UpdatePage />}/>
        <Route path="/remove" element={<DeletePage />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App2