import thongbaotn from '../../img/tbtn.png';
import thongbaoat from '../../img/tbat.png';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Switche from './Switch';

const Danhsachcaidat = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <NotificationsActiveIcon /><span>Thông báo</span>
            </div>
            <div className='noidungcd'>
                <div className='xacminh tb'>
                    <div className='tbcd'>
                        <img src={thongbaotn} alt='' />
                    </div>
                    <div className='ndnd'>
                        <span className='bold'>	Âm thanh tin nhắn trò chuyện</span>
                        <span>	Âm thanh sẽ được phát mỗi khi bạn nhận được tin nhắn mới trên cửa sổ trò chuyện không hoạt động</span>
                    </div>
                    
                        <Switche />
                </div>
                <div className='xacminh tb'>
                    <div className='tbcd'>
                        <img src={thongbaoat} alt='' />
                    </div>
                    <div className='ndnd'>
                        <span className='bold'>	Âm thanh thông báo</span>
                        <span>	Âm thanh sẽ được phát mỗi khi bạn nhận được thông báo hoạt động mới</span>
                    </div>
                    
                        <Switche />
                </div>
            </div>
            <div className='xacthucluuthaydoi'>
                <span>Nội dung đã được cập nhật</span>
            </div>
            <div className='luuthaydoi tb'>
                <span>Lưu thay đổi</span>
            </div>
        </div>
    )
}


export default Danhsachcaidat