import React from "react";
import CarouselCard from "../../components/CarouselCard";
import NavbarUser from "../../components/NavbarUser";

function Busca() {
    return(
        <div style={{backgroundColor: "#393939; color: white;"}}>
            <NavbarUser />
            <div className="container-fluid">
                <br />
                <h4 style={{color: "white;"}}>VEJA TITULOS SOBRE: Vingadores</h4>
                <br />
                <CarouselCard />
            </div>
        </div>
    )
}

export default Busca;