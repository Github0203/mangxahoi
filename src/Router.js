import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dangkythanhcong from "./components/dangnhap/Dangkythanhcong";
import Dangnhap from "./components/dangnhap/Dangnhap";
import Taotaikhoan from "./components/dangnhap/Taotaikhoan";
import Datlaimatkhau from "./components/Login/Datlaimatkhau";
import Quenmatkhau from "./components/Login/Quenmatkhau"
import Test1 from "./components/Login/Guiemail";
import Trangnewfeed from "./components/trangnewfeeds/Trangnewfeed";
import Trangcanhan from "./components/trangcanhan/Trangcanhan";
import Caidat from "./components/caidat/Caidat";
import Test from "./Test";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            {/* <Route path='/bocatvang' element={<Bocatvang /> } />
            <Route path='/login' element={<Login /> } />
            <Route path='/register' element={<Register /> } />
            <Route path='/about' element={<Gioithieuvecongty />} /> */}
            <Route exact path="/" element={<Dangnhap />} />
            <Route exact path="/trangcanhan" element={<Trangcanhan />} />
            <Route exact path="/newfeeds" element={<Trangnewfeed />} />
            <Route exact path="/taotaikhoan" element={<Taotaikhoan />} />
            <Route exact path="/dangkythanhcong" element={<Dangkythanhcong />} />
            <Route exact path="/quenmatkhau" element={<Quenmatkhau /> } />
            <Route exact path="/datlaimatkhau" element={<Datlaimatkhau /> } />
            <Route exact path="/caidat" element={<Caidat /> } />
            <Route exact path="/test1" element={<Test1 /> } />
            <Route exact path="/test" element={<Test /> } />
            </Routes>
            </BrowserRouter>            
    );
};

export default Router;
