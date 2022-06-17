

import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";

const Danhsachconglienketmangxahoi = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <EditIcon /><span>Liên kết mạng xã hội</span>
            </div>
            <div className='inputnd'>
                 <div className='ctnd'>
                    <div className='trai ip'>
                        <span className='span'>Facebook</span>
                        <div className='phai mxh'>
                    <EditIcon />
                    <input type='input'  placeholder='@gmail.com'/>
                    </div>
                    </div>
                    <div className='trai ip cha'>
                        <span className='span'>Google</span>
                        <div className='phai mxh'>
                    <EditIcon />
                    <input type='input'  placeholder='@gmail.com'/>
                    </div>
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

export default Danhsachconglienketmangxahoi