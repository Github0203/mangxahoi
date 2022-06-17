import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ComboDatePicker from "./ComboDatePicker";

const Danhsachmatkhau = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <EditIcon /><span>Mật khẩu</span>
            </div>
            <div className='inputnd'>
            <div className='noidungcd'>
                <div className='xacminh'>
                    <EditIcon />
                    <div className='ndnd'>
                        <span>	Yêu cầu xác minh email</span>
                        <span>	Kiểm tra email của bạn để hoàn thành quá trình xác minh</span>
                    </div>
                </div>
            </div>
                <div className='ctnd'>
                    <div className='trai ip mt'>
                        <span className='span'>Trường học</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>                    
                </div>
                <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Ngành</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Lớp học</span>
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

export default Danhsachmatkhau