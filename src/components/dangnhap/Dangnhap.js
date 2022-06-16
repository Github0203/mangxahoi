import "./Dangnhap.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Link, useNavigate
} from "react-router-dom";
import BodyWrapper from "../BodyWrapper";
import { DashboardLayout } from "../Layout";


const Dangnhap = () => {
    const [checktk, setChecktk] = useState(false);
    const dulieuacc = {
        "name": "admin",
        "pass": "123"
    }
    let navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        //console.log(data)
        ((dulieuacc.name === watch("emailre")) & (dulieuacc.pass === watch("passre"))) ?
            navigate('/newfeed')
            :
            setChecktk(true)
    };

    //console.log(watch("emailre")); // watch input value by passing the name of it


    return (
        <DashboardLayout>
            <div className="dangnhap">
                <div className="leftdn"></div>
                <div className="rightdn">
                    <div className="right_dangnhap">
                        <div className="right_dangnhap1">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p>๑۩۞۩๑(N.o.A)๑۩۞۩๑</p>
                                <h2>CHÀO MỪNG ĐẾN VỚI N.0.A</h2>
                                <p>Email {errors.emailre && <span className="batbuocnhap">*</span>}</p>
                                <input type="text" className="inputchung"
                                    {...register("emailre", { required: true })}
                                    placeholder="nhập email" />
                                <p>Mật khẩu {errors.passre && <span className="batbuocnhap">*</span>}</p>
                                <input type="password" className="inputchung"
                                    {...register("passre", { required: true })}
                                    placeholder="Mật khẩu" />
                                {
                                    checktk ?
                                        <span className="batbuocnhap">Tài khoản hoặc mật khẩu không đúng</span>
                                        :
                                        ""
                                }
                                <div className="ghinhoquenmatkhau">
                                    <div className="ghinhotoi">
                                        <input type="radio" id="ghinhotoi" name="ghinhotoi" value="Ghi nhớ tôi" />
                                        <p>Ghi nhớ tôi</p>
                                    </div>
                                    <div className="quenmatkhau">
                                        <Link to="/quenmatkhau">Quên mật khẩu</Link>
                                    </div>
                                </div>
                                <div className="submitformdangnhap">
                                    <div className="submitdangnhap">
                                        <input type="submit" onClick={onSubmit} id="submitdangnhap" value="Đăng nhập" />
                                    </div>
                                    <div className="submittaotaikhoan">
                                        <Link id="submittaotaikhoan" to="/taotaikhoan">hoặc Tạo tài khoản</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dangnhap