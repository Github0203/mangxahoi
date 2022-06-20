import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Danhsachquanlyphien = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <SecurityIcon /><span>Quản lý phiên</span>
            </div>
            <div className='inputnd dx'>
            <div className='noidungcd'>
                <div className='xacminh mk dx'>
                    <ExitToAppIcon />
                    <div className='ndnd'>
                        <span>Thay đổi mật khẩu sẽ đăng xuất bạn khỏi tất cả các phiên khác</span>
                    </div>
                </div>
            </div>
                           </div>       </div>
    )
}

export default Danhsachquanlyphien