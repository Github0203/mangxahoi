import React, { useState, useRef } from 'react';
import "../../App.css";
import checkdung from './checkdung.png';
import checksai from './checksai.png';
import { Link } from 'react-router-dom';
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Navigate } from "react-router-dom";


const Datlaimatkhau = props => {

    const [hienthi, setHienthi] = useState(true);
    const [checkrepass, setCheckrepass] = useState('');

    //////// chọn cách lấy mật khẩu

    ///////////// cách chọn 1
    const [cachchon1_2, setCachchon1_2] = useState(false);

    /////////
    const [checkmk_1, setCheckmk1] = useState(false);

    //////////// check đổi pass
    const { values, errors1, handleChange1, handleSubmit } = useForm(
        login,
        validate
    ); 
    const [thongbaocheckpass, setThongbaocheckpass] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    function login() {
        setLoggedIn(true);
        props.parentCallback(true);
        return <Navigate to="/default" />;
    }
    const thanhcong = () =>{
      setCachchon1_2(true);
    }
    const handleInput = () => {
        // setThongbaocheckpass(checkpass)
        // console.log(checkrepass); 
        // console.log('---------------'); 
        console.log(values.password);;
        values.password === checkrepass ?
            thanhcong()
            :
            setThongbaocheckpass("Mật khẩu nhập lại không chính xác")
    }

    
    

    return (
        <>
            
            {
  cachchon1_2 ?
  <div className='trangquenmatkhau'>
        <h2>QUÊN MẬT KHẨU</h2>
        <p>Mật khẩu đã được đổi thành công</p>
        <div className='tieptuc'><Link to="/dangnhap">Đăng nhập</Link></div>
      </div>
  :
  <form onSubmit={handleSubmit} noValidate>
  <div className='trangquenmatkhau'>
        <h2>ĐẶT LẠI MẬT KHẨU</h2>
        <p>   
          {/* {console.log(errors1.password)}        */}
          {errors1.password==="Password must be 8 or more characters" ? 
        values.password.length < 8 ?
        <img alt='' src={checksai} />
        : 
        <img alt='' src={checkdung}  />
        : 
        "- "
        }        
        Mật khẩu phải dài ít nhất 8 ký tự.
        </p>
        <p>          
          {errors1.password==="Password must contain atleast 1 capitol letter" ? 
        checkmk_1===false ?
        <img alt='' src={checksai} />
        : 
        <img alt='' src={checkdung} />
        : 
        "- "
        }        
        Mật khẩu phải chứa ít nhất một chữ hoa.
        </p>
        <p>          
          {errors1.password==="Password must contain atleast 1 special character" ? 
        checkmk_1 === /[!@#$%&?]/g.test(values.password) ?
        <img alt='' src={checksai} />
        : 
        <img alt='' src={checkdung} />
        : 
        "- "
        }        
        Mật khẩu phải chứa ít nhất một ký tự đặc biệt
        </p>
        <p>          
          {errors1.password==="Password must contain atleast 1 number" ? 
        checkmk_1 === /\d/.test(values.password) ?
        <img alt='' src={checksai} />
        : 
        <img alt='' src={checkdung} />
        : 
        "- "
        }        
        Mật khẩu phải chứa ít nhất một số
        </p>
        <div className='choncachlaymatkhau'>
          <div className='choncachlaymatkhau1'>
          <p>Mật khẩu mới</p>
          </div>
          <div className='choncachlaymatkhau2'>
          <div className="control">
                  <input
                    className={`input ${errors1.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange1}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors1.password && (
                  <p className="help is-danger">{errors1.password}</p>
                )}
          </div>
          <div className='choncachlaymatkhau1'>
          <p>Nhập lại mật lại khẩu mới</p>
          </div>
          <div className='choncachlaymatkhau2'>
          <div className="control">
                  <input
                    className={`input ${errors1.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={e => setCheckrepass(e.target.value)}
                    // value=""
                    // value={value =>
                    //   value === password.current || "Mật khẩu nhập lại không chính xác"}
                    required
                  />
                </div>
                {
                <p>{thongbaocheckpass}</p>
                }
          </div>
        </div>
        <div className='huybotieptuc'>
        <button
    type="submit"
    className="tieptuc" onClick={() => handleInput()}
  >
    Chấp nhận
  </button>
        </div>
      </div>
      </form>
}
        </>
    );
}

export default Datlaimatkhau