import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white-100 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <img className="w-50" src="https://hanoitourist.vn/sites/default/files/image%2034%20%282%29.png"  alt="logo" />
        <nav className="flex gap-15 mr-15">
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Giới thiệu</Link>
          <Link to="/booking">Đặt tour</Link>
          <Link to="/news">Tin tức</Link>
          <Link to="/contact">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}

export default  Header;