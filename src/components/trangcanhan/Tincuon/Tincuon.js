import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Tincuon.css';


const Tincuon = () => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 3,
      speed: 500
    };  
    return (
      <div className="slidenoibat">
        <Slider {...settings}>  
          <div>
            <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=1" />
            <span>Bộ sưu tập</span>
          </div>
          <div>
            <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=2" />
            <span>Bộ sưu tập</span>
          </div>
          <div>
            <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=3" />
            <span>Bộ sưu tập</span>
          </div>
          <div>
            <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=4" />
            <span>Bộ sưu tập</span>
          </div>
          <div>
            <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=5" />
            <span>Bộ sưu tập</span>
          </div>
        </Slider>
      </div>
    );
}
export default Tincuon