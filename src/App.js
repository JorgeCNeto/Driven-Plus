import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Login/Cadastro";
import Login from "./pages/Login/Login";
import Inscricao from "./pages/Inscricao/Inscricao";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import IdDoPlano from "./pages/IdDoPlano/IdDoPlano";


export default function App() {

  const[user, setUser] = useState({})
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Cadastro />} />
          <Route path="/subscriptions/ID_DO_PLANO" element={<IdDoPlano/>} />
          <Route path="/subscriptions" element={<Inscricao />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/users/ID_DO_PLANO" element={} /> */}
          {/* <Route path="/users/ID_DO_PLANO/update" element={} /> */}
        
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
