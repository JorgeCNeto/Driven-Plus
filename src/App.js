import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Login/Cadastro";
import Login from "./pages/Login/Login";
import Inscricao from "./pages/Inscricao/Inscricao";
import Home from "./pages/Home/Home";
import { useState } from "react";
import  UserContext  from "./contexts/UserContext";
import PlanoContext from "./contexts/PlanoContext";
import DescricaoPlanosContext from "./contexts/DescricaoPlanosContext";
import IdDoPlano from "./pages/IdDoPlano/IdDoPlano";


export default function App() {

  const[user, setUser] = useState({})
  const[plano, setPlano] = useState({})
  const[descricaoPlanos, setDescricaoPlanos] = useState({})
  console.log("User" , user)
  console.log(plano, "plano")
  console.log(descricaoPlanos, "descrição")
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser } }>
        <PlanoContext.Provider value={{plano, setPlano}}>
          <DescricaoPlanosContext.Provider value={{descricaoPlanos, setDescricaoPlanos}}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<Cadastro />} />
              <Route path="/subscriptions/ID_DO_PLANO" element={<IdDoPlano/>} />
              <Route path="/subscriptions" element={<Inscricao />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/users/ID_DO_PLANO" element={} /> */}
              {/* <Route path="/users/ID_DO_PLANO/update" element={} /> */}
            
            </Routes>          
          </DescricaoPlanosContext.Provider>
        </PlanoContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
