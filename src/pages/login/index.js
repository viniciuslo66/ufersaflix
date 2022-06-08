import React from "react";
import logoImage from '../../assets/LOGOloginpng.png';

function Login() {
    return(
        <div style={{ backgroundColor: "#393939", position: "absolute", height: "100%", width: "100%"}}>
            <div className="container">
                <div className="sidenav">
                    <div className="login-main-text" >
                        <img src={logoImage} alt="" />
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6">
                        <h5>BEM VINDO</h5>
                        <h3>FAÇA SEU LOGIN: </h3>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>E-MAIL: </label>
                                    <input id="email-login" type="text" className="form-control" placeholder="viniciuslo66@gmail.com"
                                        style={{backgroundColor: "#393939", borderColor: "black", color: "white"}} />
                                </div>
                                <div className="form-group">
                                    <label>SENHA: </label>
                                    <input id="senha-login" type="password" className="form-control" placeholder="Senha"
                                        style={{backgroundColor: "#393939", borderColor: "black", color:"white"}} />
                                </div>
                                <br />
                                <a href="#">
                                    <h6>ESQUECEU SUA SENHA</h6>
                                </a>
                                <br />
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button id="botaoEntrar" className="btn btn-primary" type="button"><a href="/">ENTRAR</a></button>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="modal"
                                        data-bs-target="#cadastrar">CADASTRAR</button>
                                        <div className="modal fade" id="cadastrar" tabIndex="-1" aria-labelledby="cadastrar"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content" style={{background: "#393939"}}>
                                                    <div className="modal-body">
                                                        <div className="container">
                                                            <form>
                                                                <h3>CADASTRO</h3>
                                                                <div className="mb-3">
                                                                    <label htmlFor="nomeUsuario" className="form-label">NOME</label>
                                                                    <input type="text" className="form-control" id="nomeUsuario" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="email" className="form-label">E-MAIL</label>
                                                                    <input type="email" className="form-control" id="email" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="matricula" className="form-label">MATRICULA</label>
                                                                    <input type="text" className="form-control" id="matricula" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="data" className="form-label">DATA
                                                                        NASCIMENTO</label>
                                                                    <input type="date" className="form-control" id="data" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="senha" className="form-label">SENHA</label>
                                                                    <input type="password" className="form-control" id="senha" />
                                                                </div>
                                                                <button type="submit" className="btn btn-primary">CADASTRAR</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;