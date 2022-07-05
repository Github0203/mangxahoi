// Thanhtaskbar
import logotaskbar from '../img/dangnhap.png';
import thongbao from '../img/thongbao.png';
import tinnhan from '../img/tinnhan.png';
import nuttat from '../img/nuttat.png';
import { quyen } from '../data/quyen';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';
import {
    Link
  } from 'react-router-dom';
  
export const Thanhtaskbar = () =>{
    const [anthongthongbaotinnhan, setAnthongbaotinnhan] = useState(false);
    const [anthongthongbao, setAnthongbao] = useState(false);
    const [anlisttimkiem, setAnlisttimkiem] = useState(false);
    const [xoatatca, setXoatatca] = useState(false);
    return(
        <>
        {
            quyen.login === 1 ?
            <div className="thanhtaskbar">
        <div className="relative">
            <div className="container">
            <div className="left">
                <div className='logo'><Link to='/newfeeds'><img src={logotaskbar} /></Link></div>
                <div className='timkiem'>
                <Popup className='phimtat' trigger={
                
                <input type="input" className='inputchung' placeholder='Tìm kiếm'/>
                
                 } position="bottom left"
                 closeOnDocumentClick
                 
                 >  
                     {
                         anlisttimkiem ?
                         "Chưa có dữ liệu hiển thị"
                         :
                         <div className='danhbadatimkiem'>
                             <span className='titletimkiemganday'>Tìm kiếm gần đây</span>
                             <span onClick={() => setAnlisttimkiem(true)} className='titlexoatatca'>Xóa tất cả</span>

                         <div className='listdanhbadatimkiem'>
                         <div className='phimtat'><Link to='/trangcanhan'> <img src={logotaskbar} alt='' /></Link><span>N.0.A</span> <span onClick={() => setAnlisttimkiem(true)} className='nutdong'>X</span></div> 
                         </div>
                         </div>
                     }
    

  </Popup>
                   
                </div>
            </div>
            <div className="right">
                <div className='phimtat'><Link to='/trangcanhan'> <img src={logotaskbar} alt='' /></Link><span>N.0.A</span> </div>            
                <Popup className='phimtat' trigger={<div className='phimtat'><img 
                onClick={() => setAnthongbaotinnhan(true)} 
                src={tinnhan} alt='' /> 
                
                {
                    anthongthongbaotinnhan ?
                    ""
                    :
<span className='thongbaotasbar'>4</span>
                }
                
                </div> } position="bottom right">
    <div>Tin nhắn</div>
  </Popup>
                <Popup className='phimtat' trigger={<div className='phimtat'> <img
                onClick={() => setAnthongbao(true)}
                src={thongbao} alt='' /> 
                {
                    anthongthongbao ?
                    ""
                    :
<span className='thongbaotasbar'>4</span>
                }
                </div>} position="bottom right">
    <div>Thông báo</div>
  </Popup>
                <Popup className='phimtat' trigger={<div className='phimtat'> <img src={nuttat} alt='' /> </div>} position="bottom right">
    <div>Phim tắt</div>
  </Popup>
            </div>
            </div>
            </div>
        </div>
        :
        ""
        }
        
        </>
    )
}