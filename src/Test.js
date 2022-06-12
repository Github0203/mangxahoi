import * as React from "react";
import { useState } from "react";
import Slider from "react-slick";
const Tincuon = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div style={{ padding: "0 30px", background: "#ccc" }}>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >     
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Tincuon;
