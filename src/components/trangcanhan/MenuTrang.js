import React, { useState } from "react";
import { Tabs, Tab, Content } from "./css/tab";
import Widget_left_baiviet from "./Widget_left_baiviet";
import Widget_right_baiviet from "./Widget_right_baiviet";
import { Link } from 'react-router-dom';
import Checkin from "./checkin/Checkin";

const MenuTrang = (props) => {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <div className="menutrang">
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Bài viết
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Giới thiệu
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
          Bạn bè
        </Tab>
        <Tab onClick={handleClick} active={active === 3} id={3}>
          Ảnh
        </Tab>
        <Tab onClick={handleClick} active={active === 4} id={4}>
          Video
        </Tab>
        <Tab onClick={handleClick} active={active === 5} id={5}>
          check in
        </Tab>
        <Tab onClick={handleClick} active={active === 6} id={6}>
        <Link to='/caidat' className='nav-link'>Cài đặt</Link> 
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
        <div className="content_trang">
            <Widget_left_baiviet />
            <Widget_right_baiviet />
            </div>
        </Content>
        <Content active={active === 1}>
          <h1>Content 2</h1>
        </Content>
        <Content active={active === 2}>
          <h1>Content 3</h1>
        </Content>
        <Content active={active === 3}>
          <h1>Content 4</h1>
        </Content>
        <Content active={active === 4}>
          <h1>Content 5</h1>
        </Content>
        <Content active={active === 5}>
        <div className="content_trang ck">
           <Checkin />
            </div>
        </Content>
        <Content active={active === 6}>
          <h1>Content 7</h1>
        </Content>
      </>
    </div>
  );
}

export default MenuTrang