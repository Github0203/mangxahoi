import React, { useState } from 'react';
import "../../App.css";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Navigate } from "react-router-dom";
import Guiemail from './Guiemail';


const Quenmatkhau = props => {

    const [hienthi, setHienthi] = useState(true);
    const [checkradio, setCheckradio] = useState(true);

    //////// chọn cách lấy mật khẩu
    const [value, setValue] = useState("a");
    const handleChange = event => {
        const { target: { value } } = event;
        setValue(value);
    };

    ///////////// cách chọn 1
    const [cachchon1_1, setCachchon1_1] = useState(false);
    const [cachchon1_2, setCachchon1_2] = useState(false);
    const [cachchon1_3, setCachchon1_3] = useState(false);
    const [cachchon1_4, setCachchon1_4] = useState(false);

    const timer = () => {
        setTimeout(() => {
            setCachchon1_4(true);
            console.log("test timeout");
        }, 30000);
    }

    //////////// check đổi pass
    const { values, errors, handleChange1, handleSubmit } = useForm(
        login,
        validate
    );
    const [checkpass, setCheckpass] = useState("");
    const [thongbaocheckpass, setThongbaocheckpass] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    function login() {
        setLoggedIn(true);
        props.parentCallback(true);
        return <Navigate to="/default" />;
    }
    // const handleInput = () => {
    //     // setThongbaocheckpass(checkpass)
    //     console.log(value)
    //     checkpass === value.password ?
    //         setThongbaocheckpass("Mật khẩu nhập lại không chính xác")
    //         :
    //         setThongbaocheckpass("")
    // }




    return (
        <>
            {

            }
            {
                checkradio ?

                    cachchon1_4 ?
                        <div className='trangquenmatkhau'>
                            <h2>QUÊN MẬT KHẨU</h2>
                            <p>Liên kết của bạn đã hết hạn, bởi vì bạn chưa sử dụng nó. Liên kết đặt lại mật khẩu sẽ hết hạn sau mỗi 24 giờ và chỉ có thể được sử dụng một lần. Bạn có thể tạo một cái bằng cách nhấp vào nút bên dưới.</p>
                            <div className='choncachlaymatkhau'>
                                <div className='choncachlaymatkhau1'>
                                    <p className='coa' onClick={() => { setCachchon1_4(false); setCachchon1_3(false); timer() }}>Gửi lại link khác</p>
                                </div>
                            </div>
                        </div>
                        :
                        cachchon1_3 ?
                            <div className='trangquenmatkhau'>
                                <h2>QUÊN MẬT KHẨU</h2>
                                <p>Email đã được gử i lại. Bạn sẽ nhận được một email có liên kết để đặt lại mật khẩu của mình.</p>
                                <div className='choncachlaymatkhau'>
                                    <div className='choncachlaymatkhau1'>
                                        <p className='coa' onClick={() => setCachchon1_4(true)}>Gửi lại liên kết email</p>
                                    </div>
                                    <div className='choncachlaymatkhau2'>
                                        <p className='coa' onClick={() => { setCachchon1_3(false); setCachchon1_2(false); }}>Thay đổi email</p>
                                    </div>
                                </div>
                            </div>
                            :
                            cachchon1_2 ?
                                <div className='trangquenmatkhau'>
                                    <h2>QUÊN MẬT KHẨU</h2>
                                    <p>Bạn sẽ nhận được một email có liên kết để đặt lại mật khẩu của mình. Hãy kiểm tra hộp thư đến của bạn.</p>
                                    <div className='choncachlaymatkhau'>
                                        <div className='choncachlaymatkhau1'>
                                            <p className='coa' onClick={() => setCachchon1_3(true)}>Gửi lại liên kết email</p>
                                        </div>
                                        <div className='choncachlaymatkhau2'>
                                            <p className='coa' onClick={() => setCachchon1_2(false)}>Thay đổi email</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                hienthi ?
                                    <div className='trangquenmatkhau'>
                                        <h2>QUÊN MẬT KHẨU</h2>
                                        <p>Chọn cách lấy lại mật khẩu</p>
                                        <div className='choncachlaymatkhau'>
                                            <div className='choncachlaymatkhau1'>
                                                <input onChange={handleChange} onClick={() => setCheckradio(!checkradio)} value="a" checked={value === "a"} type="radio" /><span>Yêu cầu liên kết đặt lại mật khẩu</span>
                                            </div>
                                            <div className='choncachlaymatkhau2'>
                                                <input onChange={handleChange} onClick={() => setCheckradio(!checkradio)} value="b" checked={value === "b"} type="radio" /><p>Quên mật khẩu sử dụng điện thoại qua mã</p>
                                            </div>
                                        </div>
                                        <div className='huybotieptuc'>
                                            <div className='huybotieptuccenter'>
                                                <div className='huybo'><a href='/'> Hủy bỏ </a></div>
                                                <div className='tieptuc' onClick={() => { setHienthi(false); timer() }}>Tiếp tục</div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    cachchon1_1 === false ?
                                        <div className='trangquenmatkhau'>
                                            
                                            {/* <div className='choncachlaymatkhau'>
                                                <div className='choncachlaymatkhau1'>
                                                    <p>Email</p>
                                                </div>
                                                <div className='choncachlaymatkhau2'>
                                                    <input type="input" placeholder='nhập email' />
                                                </div>
                                            </div> */}
                                            <div className='huybotieptuc'>
                                                {/* <div className='yeucaulienketdatlaimatkhau' onClick={() => setCachchon1_2(true)}>Yêu cầu liên kết đặt lại mật khẩu</div> */}

                            <Guiemail />

                                                <div className='huybotieptuccenter_1'>
                                                    <div className='huybo huybo_1' onClick={() => setHienthi(true)}>Hủy bỏ</div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <></>
                    :
                    "Gửi bằng điện thoại"

            }


          
        </>
    );
}

export default Quenmatkhau