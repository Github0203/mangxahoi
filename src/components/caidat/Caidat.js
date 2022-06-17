
import '../caidat/caidat.css';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ConstructionIcon from '@mui/icons-material/Construction';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import InfoIcon from '@mui/icons-material/Info';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Danhsachcaidat from './Danhsachcaidat';
import Danhsachcanban from './Danhsachcanban';
import Danhsachcongviec from './Danhsachcongviec';
import Danhsachconglienketmangxahoi from './Danhsachconglienketmangxahoi';
import Danhsachhocvan from './Danhsachhocvan';
import Danhsachmatkhau from './Danhsachmatkhau';
import Danhsachquanlyphien from './Danhsachquanlyphien';
import Danhsachriengtu from './Danhsachriengtu';
import Danhsachthongbao from './Danhsachthongbao';
import Danhsachchan from './Danhsachchan';
import Danhsachxoataikhoan from './Danhsachxoataikhoan';
import Danhsachvitri from './Danhsachvitri';
import Danhsachthongitncuaban from './Danhsachthongitncuaban';
import Danhsachxacminh from './Danhsachxacminh';
import BodyWrapper from '../BodyWrapper';
import { DashboardLayout } from '../Layout';


const Caidat = () => {
    const data = [
        {
            "name": "Cài đặt",
            "id": "1",
            "status": "false",
            "submenu": ""
        },
        {
            "name": "Chỉnh sửa thông tin",
            "id": "2",
            "status": "false",
            "submenu": {
                "name": "Căn bản",
                "id": "3",
                "status": "false",
            }
        },
        {
            "name": "Riêng tư",
            "id": "4",
            "status": "false",
            "submenu": ""
        },
    ];
    const [caidat, setCaidat] = useState(true);
    const [thongtin, setThongtin] = useState(false);
    const [canban, setCanban] = useState(false);
    const [congviec, setCongviec] = useState(false);
    const [vitri, setVitri] = useState(false);
    const [lienketmangxahoi, setLienketmangxahoi] = useState(false);
    const [hocvan, setHocvan] = useState(false);
    const [baove, setBaove] = useState(false);
    const [matkhau, setMatkhau] = useState(false);
    const [quanlyphien, setQuanlyphien] = useState(false);
    const [riengtu, setRiengtu] = useState(false);
    const [thongbao, setThongbao] = useState(false);
    const [xacminh, setXacminh] = useState(false);
    const [chan, setChan] = useState(false);
    const [thongtincuaban, setThongtincuaban] = useState(false);
    const [xoataikhoan, setXoataikhoan] = useState(false);
    const handleChangeThongtin = () => {
        setThongtin(!thongtin);
        setBaove(false);
    };
    const handleChangeCaidatBaove = () => {
        setBaove(!baove);
        setThongtin(false);
    };
    const handelcaidat = () => {
        setCaidat(true);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelcanban = () => {
        setCaidat(false);
        setCanban(true);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelcongviec = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(true);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelvitri = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(true);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handellienketmangxahoi = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(true);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelmatkhau = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(true);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelhocvan = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(true);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelquanlyphien = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(true);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelriengtu = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(true);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelthongbao = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(true);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelxacminh = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(true);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelchan = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(true);
        setThongtincuaban(false);
        setXoataikhoan(false);
        
    };
    const handelthongtincuaban = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(true);
        setXoataikhoan(false);
        
    };
    const handelxoataikhoan = () => {
        setCaidat(false);
        setCanban(false);
        setCongviec(false);
        setVitri(false);
        setLienketmangxahoi(false);
        setHocvan(false);
        setMatkhau(false);
        setQuanlyphien(false);
        setRiengtu(false);
        setThongbao(false);
        setXacminh(false);
        setChan(false);
        setThongtincuaban(false);
        setXoataikhoan(true);
        
    };
    return (
        <DashboardLayout>
            <div className='caidatleft'>
                <ul>
                    {/* { menu.map((a,i) => {
                    return(
                        a.submenu ==! "" ?
                        <li key={i.id} onClick={console.log('hiih')}>{a.name}</li>
                        :
                        
                            <ul>{a.name}
                                <li key={i.id}>
                                    {a.submenu.name}
                                </li>
                            </ul>
                        
                    )
                })
            } */}
                    <li  onClick={handelcaidat}><SettingsIcon />Cài đặt</li>
                    <li className='cosubmenu'><span onClick={handleChangeThongtin}><EditIcon />Chỉnh sửa thông tin</span>
                        <ul style={{ display: thongtin ? "block" : "none" }}>
                            <li onClick={handelcanban}>
                                Căn bản
                            </li>
                            <li onClick={handelcongviec}>
                                Công việc
                            </li>
                            <li onClick={handelvitri}>
                                Vị trí
                            </li>
                            <li onClick={handellienketmangxahoi}>
                                Liên kết mạng xã hội
                            </li>
                            <li onClick={handelhocvan}>
                                Học vấn
                            </li>
                        </ul>
                    </li>
                    <li className='cosubmenu'>                        
                        <span onClick={handleChangeCaidatBaove}><SecurityIcon />    Cài đặt bảo vệ</span>
                        <ul style={{ display: baove ? "block" : "none" }}>
                            <li onClick={handelmatkhau}>
                                Mật khẩu
                            </li>
                            <li onClick={handelquanlyphien}>
                                Quản lý phiên
                            </li>
                        </ul>
                    </li>
                    <li onClick={handelriengtu}>
                        <LockIcon />Riêng tư
                    </li>
                    <li onClick={handelthongbao}>
                        <NotificationsActiveIcon />Thông báo
                    </li>
                    <li onClick={handelxacminh}>
                       <VerifiedUserIcon /> Xác minh
                    </li>
                    <li onClick={handelchan}>
                        <AppBlockingIcon/>Chặn
                    </li>
                    <li onClick={handelthongtincuaban}>
                       <InfoIcon /> Thông tin của bạn
                    </li>
                    <li onClick={handelxoataikhoan}>
                        <DeleteForeverIcon />Xóa tài khoản
                    </li>
                </ul>
            </div>
            <div className='caidatright'>
                {
                    caidat ?
                        <Danhsachcaidat />
                        :
                    canban ?
                    <Danhsachcanban />
                    :
                    congviec ?
                    <Danhsachcongviec />
                    :
                    vitri ?
                    <Danhsachvitri />
                    :
                    lienketmangxahoi ?
                    <Danhsachconglienketmangxahoi />
                    :
                    hocvan ?
                    <Danhsachhocvan />
                    :
                    matkhau ?
                    <Danhsachmatkhau />
                    :
                    quanlyphien ?
                    <Danhsachquanlyphien />
                    :
                    riengtu ?
                    <Danhsachriengtu />
                    :
                    thongbao ?
                    <Danhsachthongbao />
                    :
                    xacminh ?
                    <Danhsachxacminh />
                    :
                    chan ?
                    <Danhsachchan />
                    :
                    thongtincuaban ?
                    <Danhsachthongitncuaban />
                    :
                    xoataikhoan ?
                    <Danhsachxoataikhoan />
                    :
                    ''
                }
            </div>
        </DashboardLayout>
    )
}

export default Caidat