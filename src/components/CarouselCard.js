import React,{Component} from 'react';
import cardFilmeImg from '../assets/cardfilme.jpg';
import classificaoIndicativa from '../assets/CLASSIFICAÇÃO INFICATIVA/14 ANOS.png';

class CarouselCard extends Component {
    render() {
        return(
            <div className="col-sm-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={cardFilmeImg} className="card-img-top" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" />
                    <div className="modal fade" id="exampleModal" tabIndex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content" style={{background: "#393939"}}>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="col-md-12">
                                            <a href="#"><img src={cardFilmeImg}
                                                className="img-fluid rounded mx-auto d-block" alt="" /></a>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>VINGADORES GUERRA INFINITA</h5>
                                            </div>
                                            <div className="col-1">
                                                <img src={classificaoIndicativa}
                                                    style={{maxWidth: "40px"}} alt="" />
                                            </div>
                                            <div className="col-5" style={{fontSize: "10px"}}>
                                                <p>ao clicar no play será redirecionado a outra página</p>
                                            </div>     
                                        </div>
                                        <h6>SINOPSE: </h6>
                                        <div className="col-md-10" style={{fontSize: "13px"}}>
                                            <p>HOMEM DE FERRO, THOR, HULK E OS VINGADORES SE UNEM PARA
                                                COMBATER
                                                SEU
                                                INIMIGO MAIS PODEROSO, O MALIGNO THANOS. EM UMA MISSÃO PARA
                                                COLETAR
                                                TODAS AS SEIS PEDRAS INFINITAS, THANOS PLANEJA USÁ-LAS PARA
                                                INFLIGIR
                                                SUA
                                                VONTADE MALÉFICA SOBRE A REALIDADE.</p>
                                        </div>
                                        <h6>ELENCO: </h6>
                                        <div className="col-md-10" style={{fontSize: "13px"}}>
                                            <p>HOMEM DE FERRO.</p>
                                        </div>
                                        <h6>GÊNERO: </h6>
                                        <div className="col-md-10" style={{fontSize: "13px"}}>
                                            <p>AÇÃO E AVENTURA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselCard;