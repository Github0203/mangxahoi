import WarningIcon from '@mui/icons-material/Warning';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ComboDatePicker from "./ComboDatePicker";
import anhtuongtrung from '../../img/anhtuongtrung.png';

const Danhsachxacminh = () => {
    return (
        <div className="divchungcaidat">
        <div className='titlecd'>
            <VerifiedUserIcon /><span>Xác minh</span>
        </div>
        <div className='noidungcd'>
            <p>Xác minh tài liệu</p>
            <div className='xacminhcc'>
            <div className='xacminhanh'>
                <img src={anhtuongtrung} alt='' />
                <span>Ảnh của bạn</span>
            </div>
            <div className='xacminhcm'>
                <img src={anhtuongtrung} alt='' />
                <span>Ảnh của bạn</span>
            </div>
            </div>
            <p className='xmt'>Vui lòng đính kèm ảnh của bạn và hộ chiếu hoặc chứng minh nhân dân của bạn</p>
            <p>Thông tin thêm</p>
            <textarea placeholder="Thêm một vài thông tin (không bắt buộc)...">
</textarea>
            <p className='xmt'>Vui lòng chia sẻ lý do tại sao tài khoản của bạn nên được xác minh</p>
            <div className='xacminh xm'>
                    <div className='ndnd chan'>
                        <span>Vui lòng đính kèm ảnh của bạn và hộ chiếu hoặc chứng minh nhân dân của bạn</span>
                    </div>
                </div>
        <div className='xacminh xl'>
                    <div className='ndnd'>
                        <span>Yêu cầu xác minh đang được xử lý</span>
                    </div>
                </div>
        <div className='xacminh ht'>
                    <div className='ndnd'>
                        <span>Yêu cầu xác minh đã hoàn tất</span>
                    </div>
                </div>
        </div>
      
        <div className='luuthaydoi tb'>
            <span>Lưu thay đổi</span>
        </div>
    </div>
    )
}

export default Danhsachxacminh