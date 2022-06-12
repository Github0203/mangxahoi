import React, { useState } from 'react';
import { DashboardLayout } from '../../components/Layout';
import { Link } from 'react-router-dom';
import './Taotaikhoan.css'
import SelectLanguage from './SelectLanguage';

const Taotaikhoan = () => {
   const [showpass1, setShowpass1] = useState(false);
   const [showpass2, setShowpass2] = useState(false);
  return (
    <DashboardLayout>
        <div className='trangtaotaikhoan'>
     <h1>TẠO TÀI KHOẢN MỚI ITP-GROUP</h1>  
     <div className='dacotk'><p>Bạn đã có tài khoản</p>
     <p className='didangnhap_'><Link to="/dangnhap">Đăng nhập</Link></p></div>
     <div className='hoten'>
     <div className='ho'>
     <p>Họ</p><p className='batbuoc'>*</p>
        <input type="text" className="inputchung" alt="" placeholder="nhập họ" />
     </div>
     <div className='ten'>
     <p>Tên</p><p className='batbuoc'>*</p>
        <input type="text" className="inputchung" alt="" placeholder="nhập tên" />
     </div>
     </div>
     <div className='email'>
     <p>Email</p><p className='batbuoc'>*</p>
        <input type="text" className="inputchung" alt="" placeholder="nhập email" />
     </div>
     <div className='dth'>
     <p>Điện thoại</p><p className='batbuoc'>*</p>
        <input type="text" className="inputchung" alt="" placeholder="923-123-456" />
     </div>
    <SelectLanguage /> 
    
     <div className='matkhau'>
     <p>Mật khẩu</p><p className='batbuoc'>*</p>
     <div className='bocmatkhau'>
        <input type={showpass1 ? "password" : "text"} className="inputchung" alt="" placeholder="nhập mật khẩu" />
        <div className='matthan' onClick={() => setShowpass1(!showpass1)}>
           {
              showpass1 ?
              <div class="eye"></div>
              :
              <div class="eye1"></div>
           }
        </div>
        </div>
     </div>
     <div className='nhaplaimatkhau'>
     <p>Nhập lại mật khẩu</p><p className='batbuoc'>*</p>
     <div className='bocmatkhau'>
        <input type={showpass2 ? "password" : "text"} className="inputchung" alt="" placeholder="nhập mật khẩu" />
        <div className='matthan' onClick={() => setShowpass2(!showpass2)}>
           {
              showpass2 ?
              <div class="eye"></div>
              :
              <div class="eye1"></div>
           }
        </div>
        </div>
     </div>
     <div className='gioitinh'>
     <p>Giới tính</p><p className='batbuoc'>*</p>
     <select name="gioitinh" required className='chongioitinh'>
      <option value="" selected>Nam</option>
      <option value="coffee">Nữ</option>
      <option value="tea">Khác</option>
    </select>    
    </div>
    <div className='dongychinhsach'>
    <input type="checkbox" className="checkpolicy" />
        <div className='chinhsach'>
            <p>Bằng cách đăng ký, bạn đồng ý với</p>
            <p><a>Điều khoản, điều điện</a> và <a>chính sách bảo mật</a></p>
        </div>
    </div>
    <div className="submitdangky">
                <Link id="submitdangky" to="/dangkythanhcong">Đăng ký</Link>                  
                </div>
     </div>
    </DashboardLayout>
  )
}

export default Taotaikhoan;