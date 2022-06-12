import { FaWifi } from 'react-icons/fa';
import Anh from './Anh/Anh';
import Banbe from './Banbe/Banbe';
import Tincuon from './Tincuon/Tincuon';
const Widget_left_baiviet = () =>{
    return(
        <div className="wg_l_bv">
        <div className="wg_l_bv_content">
            <h3>Giới thiệu</h3>
            <span className="sloganbv">N.0.A</span>
            <span className='nguoitheodoibv'><FaWifi /> Có 1000 người theo dõi</span>
            <span className='nguoitheodoibv'><FaWifi /> Sửa thông tin</span>
            <div id='tincuon'>
                <Tincuon />
            </div>
        </div>
        <div className="wg_l_bv_content">
            <Anh />
        </div>
        <div className="wg_l_bv_content">
            <Banbe />
        </div>
        <div className='banquyen'>
        © 2022 N.0.A
        </div>
        </div>
    )
}

export default Widget_left_baiviet