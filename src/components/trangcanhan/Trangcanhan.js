import { Thanhtaskbar } from "../Thanhtaskbar";
import './css/Trangcanhan.css'; 
import Anhbia from "./Anhbia";
import Anhdaidien from "./Anhdaidien";
import Banchung from "./Banchung";
import React from 'react';
import Moiban from "./Moiban";
import MenuTrang from "./MenuTrang";





const Trangcanhan = () =>{
    return(
        <>
        <Thanhtaskbar />
        <div className="relative bg-img">
            <div className="container">
            <Anhbia />
            <div className="khuvucanhdaidien">
            <Anhdaidien />
            <Banchung />
            <Moiban />
            </div> 
            <MenuTrang />    
            
            </div>
            </div>
        </>
    )
}

export default Trangcanhan