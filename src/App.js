import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Login/Cadastro";
import Login from "./pages/Login/Login";
import Inscricao from "./pages/Inscricao/Inscricao";
import Home from "./pages/Home/Home";
import { useState } from "react";
import  UserContext  from "./contexts/UserContext";
import PlanoContext from "./contexts/PlanoContext";
import IdDoPlano from "./pages/IdDoPlano/IdDoPlano";


export default function App() {

  const[user, setUser] = useState({})
  const[plano, setPlano] = useState({})
  console.log("User" , user.token)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser } }>
        <PlanoContext.Provider value={{plano, setPlano}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Cadastro />} />
            <Route path="/subscriptions/ID_DO_PLANO" element={<IdDoPlano/>} />
            <Route path="/subscriptions" element={<Inscricao />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/users/ID_DO_PLANO" element={} /> */}
            {/* <Route path="/users/ID_DO_PLANO/update" element={} /> */}
          
          </Routes>
        </PlanoContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
