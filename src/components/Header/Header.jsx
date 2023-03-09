import React from "react";
import logo from "../../assets/lws-logo.svg";

const Header = () => {
  return (
    <div id='header'>
      <div className='container'>
        <img src={logo} alt='logo' className='logo' />
        {/* <img src='./img/lws-logo.svg' alt='logo' className='logo' /> */}
        <div className='flex items-center'>
          <a className='text-white min-w-[50px] font-medium' href='#'>
            Home
          </a>
          <button className='log-btn btn'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
