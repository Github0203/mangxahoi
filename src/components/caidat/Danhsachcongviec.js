import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ComboDatePicker from "./ComboDatePicker";

const Danhsachcongviec = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <EditIcon /><span>Công việc</span>
            </div>
            <div className='inputnd'>
                <div className='ctnd'>
                    <div className='trai ip mt'>
                        <span className='span'>Tiêu đề</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>                    
                </div>
                <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Địa điểm</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Trang web</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                        <span className='span mota'>Liên kết trang web phải bắt đầu bằng http://
hoặc https://</span>
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

export default Danhsachcongviec