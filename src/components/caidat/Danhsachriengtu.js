import WarningIcon from '@mui/icons-material/Warning';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ComboDatePicker from "./ComboDatePicker";

const Danhsachriengtu = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <LockIcon /><span>Riêng tư</span>
            </div>
            <div className='inputnd'>
            <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Ai có thể chọc bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Ai có thể đăng lên tường của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                </div>  
            <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Ai có thể nhìn thấy giới tính của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Ai có thể nhìn thấy ngày sinh của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                </div>  
            <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Ai có thể nhìn thấy mối quan hệ của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Ai có thể nhìn thấy tiếu sử của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                </div>  
            <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Ai có thể nhìn thấy bạn công việc của bạn
</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Ai có thể nhìn thấy bạn thông tin vị trí
của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                </div>  
            <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Ai có thể nhìn thấy học vấn của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Ai có thể nhìn thấy thông tin khác của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                </div>  
            <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Ai có thể nhìn thấy bạn bè của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Ai có thể nhìn thấy ảnh của bạn</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>    </select>
                    </div>
                </div>  
            <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Ai có thể nhìn thấy bạn sự kiện bạn
đã tham gia</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Ai có thể bình luận bài viết của bạn
</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Công khai</option>
      <option value="coffee">Bạn của bạn bè</option>
      <option value="tea">Bạn bè</option>
    </select>
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

export default Danhsachriengtu