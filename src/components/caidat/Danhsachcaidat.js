import SettingsIcon from '@mui/icons-material/Settings';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EmailIcon from '@mui/icons-material/Email';

const Danhsachcaidat = () => {
    return (
        <div className="divchungcaidat">
            <div className='titlecd'>
                <SettingsIcon /><span>Cài đặt</span>
            </div>
            <div className='noidungcd'>
                <p>ĐỊA CHỈ EMAIL</p>
                <div className='xacminh'>
                    <PriorityHighIcon />
                    <div className='ndnd chan'>
                        <span>	Yêu cầu xác minh email</span>
                        <span>	Kiểm tra email của bạn để hoàn thành quá trình xác minh</span>
                    </div>
                    <div className='btnd'>
                        <span>Gửi lại email xác minh</span>
                    </div>
                </div>
            </div>
            <div className='inputnd'>
                <span className='left'>Địa chỉ Email</span>
                <div className='phai'>
                    <EmailIcon />
                    <input type='input' placeholder='@gmail.com' />
                </div>
            </div>
            <p>TÊN NGƯỜI DÙNG</p>
            <div className='inputnd'>
                <span className='left'>Tên người dùng</span>
                <div className='phai'>
                    <span className='sp'>https://secretapp.familys.vn/</span>
                    <input type='input' className='ttt' placeholder='@gmail.com' />
                </div>
            </div>
            <div className='luuthaydoi'>
                <span>Lưu thay đổi</span>
            </div>
        </div>
    )
}

export default Danhsachcaidat