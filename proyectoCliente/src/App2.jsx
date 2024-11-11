import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DeletePage from "./pages/RemovePage";
import UpdatePage from "./pages/UpdatePage";
import SearchPage from "./pages/SearchPage";
import ListaPage from "./pages/ListaPage";



function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/update" element={<UpdatePage />}/>
        <Route path="/remove" element={<DeletePage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/lista" element={<ListaPage />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App2