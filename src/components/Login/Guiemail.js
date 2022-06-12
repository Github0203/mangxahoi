import { React, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export default function Guiemail() {

const [status, setStatus] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const sendEmail = (data, e) => {
    e.preventDefault();
    setStatus(false);
    emailjs
      .sendForm(
        "service_pghqn1k",
        "template_rnd4ja8",
        e.target,
        "_kvutOTiV_z3Qn1-w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  //onSubmit={(e) => handleSubmit(() => sendEmail(e))}
  return (


    <div className='huybotieptuc'>
 <h2>QUÊN MẬT KHẨU</h2>
{status ? 
<p>Cung cấp email tài khoản của bạn mà bạn muốn đặt lại mật khẩu của mình</p>
:
<p>Bạn sẽ nhận được một email có liên kết để đặt lại mật khẩu của mình. Hãy kiểm tra hộp thư đến của bạn</p>
}
 
      <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
        <div className="form-group mb-0 py-3">
          <input
            className="form-control-chung"
            id="message"
            rows="3"
            placeholder="Nhập email đã đăng ký..."
            name="message"
            {...register("message", { required: true })}
          ></input>
          {errors.message && (
            <div style={{ color: "red" }} className="invalid-feedback d-block">
              Vui lòng nhập email....
            </div>
          )}
        </div>
           
            
            <input
              className="yeucaulienketdatlaimatkhau"
              type="submit"
              value="Yêu cầu liên kết lấy lại mật khẩu"
            />
      </form>
                                                


</div>
   
  );
}
