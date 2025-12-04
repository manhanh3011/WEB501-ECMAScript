import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img className="w-50" src="https://hanoitourist.vn/sites/default/files/image%2034%20%282%29.png" alt="logo" />
        <nav className="flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
          <Link to="/about" className="hover:text-blue-600">Giới thiệu</Link>

          {/* Hiển thị link Admin chỉ khi đã đăng nhập */}
          {isAuthenticated() && (
            <Link to="/admin" className="text-blue-600 font-semibold hover:text-blue-700">
              Quản trị
            </Link>
          )}

          {/* Hiển thị nút logout khi đã đăng nhập */}
          {isAuthenticated() ? (
            <button
              onClick={logout}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              <i className="fas fa-sign-out-alt mr-1"></i>
              Đăng xuất
            </button>
          ) : (
            <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700">
              <i className="fas fa-sign-in-alt mr-1"></i>
              Đăng nhập
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;