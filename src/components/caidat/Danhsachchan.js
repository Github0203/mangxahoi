import WarningIcon from '@mui/icons-material/Warning';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import { useState } from 'react';
import "react-languages-select/css/react-languages-select.css";
import Selectchan from './Selectchan';

const Danhsachchan = () => {
    const data = [
        {
            "name" : "ngoc",
            "id" : "1"
        },
        {
            "name" : "anh",
            "id" : "2"
        }
    ]

    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <AppBlockingIcon /><span>Chặn</span>
            </div>
            <div className='inputnd'>
            <div className='noidungcd'>
                <div className='xacminh mk xl'>
                    <WarningIcon />
                    <div className='ndnd chan'>
                        <span>Ngay khi bạn chặn ai đó, người này không thể xem nội dung đăng trên dòng thời gian của bạn, gắn thẻ bạn, mời bạn tham gia sự kiện hoặc nhóm, bắt đầu cuộc trò chuyện với bạn hay thêm bạn vào danh sách bạn bè nữa.</span>
                    </div>                    
                </div>
                <p className='xmt ct'>Không có người dùng bị chặn</p>
                <p className='xmt'>Tìm tên người bị chặn</p>
            </div>
            <div className='ctnd'>
                    <div className='trai ip chan'>
                    <Selectchan />
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

export default Danhsachchan