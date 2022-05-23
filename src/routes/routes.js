import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home";
import Adm from "../pages/adm";
import Busca from "../pages/busca";
import Cadastro from "../pages/cadastro";
import ConfigUsuario from "../pages/configUsuario"
import Filmes from "../pages/filmes";


function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login" />
        <Route element={<Adm />} path="/adm" />
        <Route element={<Busca />} path="/busca" />
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<ConfigUsuario />} path="/configUsuario" />
        <Route element={<Filmes />} path="/filmes" />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;

