import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage";



function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/update" element={<UpdatePage />}/>
        <Route path="/delete" element={<DeletePage />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App2