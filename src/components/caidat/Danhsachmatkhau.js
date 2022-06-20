import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ComboDatePicker from "./ComboDatePicker";

const Danhsachmatkhau = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <SecurityIcon /><span>Mật khẩu</span>
            </div>
            <div className='inputnd'>
            <div className='noidungcd'>
                <div className='xacminh mk'>
                    <WarningIcon />
                    <div className='ndnd'>
                        <span>Thay đổi mật khẩu sẽ đăng xuất bạn khỏi tất cả các phiên khác</span>
                    </div>
                </div>
            </div>
                <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Mật khẩu hiện tại</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>                    
                </div>
                <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Mật khẩu mới</span>
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