import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Ngonngu extends Component {
  render() {
    return (
      <div className='ngonngu'>
        <Link to="/login">Login</Link>
          <a href='=#'><img src='https://www.pngkit.com/png/detail/382-3826500_vietnam-flag-circle-icon-vietnam-flag-flags-of.png' /></a>
          <a href='=#'><img src='https://bocatvangtravel.com.vn/images/topicon_lanen.png' /></a>
      </div>
    )
  }
}
