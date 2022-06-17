import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ComboDatePicker from "./ComboDatePicker";

const Danhsachvitri = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <EditIcon /><span>Vị trí</span>
            </div>
            <div className='inputnd'>
                <div className='ctnd'>
                    <div className='trai ip mt'>
                        <span className='span'>Thành phố hiện tại</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>                    
                </div>
                <div className='ctnd'>
                    <div className='trai ip mt'>
                        <span className='span'>Quê quán</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>                    
                </div>
                
      <div className='xacthucluuthaydoi'>
                <span>Nội dung đã được cập nhật</span>
            </div>
            </div>
            <div className='luuthaydoi'>
                <span>Lưu thay đổi</span>
            </div>
        </div>
    )
}

export default Danhsachvitri