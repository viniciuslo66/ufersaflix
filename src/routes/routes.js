import React from "react";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home";
import Adm from "../pages/adm";
import Busca from "../pages/busca";
import Cadastro from "../pages/cadastro";
import ConfigUsuario from "../pages/configUsuario"
import Filmes from "../pages/filmes";


function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Router element = {<Login /> } path="/" exact />
        <Router element = {<Home /> } path="/entrada" />
        <Router element = {<Adm /> } path="/adm" />
        <Router element = {<Busca /> } path="/busca" />
        <Router element = {<Cadastro /> } path="/cadastro" />
        <Router element = {<ConfigUsuario /> } path="/configUsuario" />
        <Router element = {<Filmes /> } path="/filmes" />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;

