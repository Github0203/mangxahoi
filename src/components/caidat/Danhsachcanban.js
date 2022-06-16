import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ComboDatePicker from "./ComboDatePicker";

const Danhsachcanban = () => {
    const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const selectedLanguage = "";
    const gioitinh = [
        { value: 'nam', label: 'Nam' },
        { value: 'nu', label: 'Nữ' },
        { value: 'khac', label: 'Khác' }
      ]
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <EditIcon /><span>Căn bản</span>
            </div>
            <div className='inputnd'>
                <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Tên</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Họ</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>
                </div>
                <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Giới tính</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Nam</option>
      <option value="coffee">Nữ</option>
      <option value="tea">Khác</option>
    </select>
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Trạng thái mối quan hệ</span>
                        <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Độc thân</option>
      <option value="coffee">Đã kết hôn</option>
    </select>
                    </div>
                </div>
                <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Quốc gia</span>
                        {selectedLanguage}
        <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)}
        />
                    </div>
                    <div className='phai ip'>
                        <span className='span'>Trang web</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                        <span className='span mota'>Liên kết trang web phải bắt đầu bằng http://
hoặc https://</span>
                    </div>
                </div>
                <div className='ctnd'>
                    <div className='trai ip mt'>
                        <span className='span'>Về tôi</span>
                        <input type='input' className='inputcd' placeholder='Nhập...' />
                    </div>
                </div>
                <span className='span ns'>Ngày sinh</span>
                <ComboDatePicker
        className={"test"}
        months={[
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 6",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12"
        ]}
      />
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

export default Danhsachcanban