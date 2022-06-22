import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Danhsachxoataikhoan = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <SecurityIcon /><span>Xóa tài khoản</span>
            </div>
            <div className='inputnd dx'>
            <div className='noidungcd'>
                <div className='xacminh mk xl'>
                    <WarningIcon />
                    <div className='ndnd chan'>
                        <span>Xoá tài khoản vĩnh viễn khi người dùng không còn muốn sử dụng nữa, hoặc xóa tài khoản này để chuyển sang tài khoản khác. Khi chúng ta xóa tài khoản vĩnh viễn đồng nghĩa với việc bạn không còn tồn tại trên mạng xã hội này nữa và người khác sẽ không tìm thấy bạn. Khi đó mọi dữ liệu tài khoản mạng xã hội này của bạn cũng không còn tồn tại để người khác tìm được.</span>
                    </div>
                </div>
                <div className='giua'>
                    <div className='xoataikhoan'>
                    <DeleteOutlineIcon />
                    <span>Xoá tài khoản</span>
                    </div>
                </div>
            </div>
                           </div>       </div>
    )
}

export default Danhsachxoataikhoan