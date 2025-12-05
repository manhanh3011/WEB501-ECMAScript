import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem('user') || 'null'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <header className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img className="w-50" src="https://hanoitourist.vn/sites/default/files/image%2034%20%282%29.png" alt="logo" />
        <nav className="flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
          <Link to="/about" className="hover:text-blue-600">Giới thiệu</Link>

          {/* Hiển thị link Admin chỉ khi đã đăng nhập */}
          {user && (
            <Link to="/admin" className="text-blue-600 font-semibold hover:text-blue-700">
              Quản trị
            </Link>
          )}

          {/* Hiển thị nút logout khi đã đăng nhập */}
          {user ? (
            <button
              onClick={logout}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              <i className="fas fa-sign-out-alt mr-1"></i>
              Đăng xuất
            </button>
          ) : (
            <div className="flex gap-4 items-center">
              <Link to="/register" className="text-green-600 font-semibold hover:text-green-700">
                <i className="fas fa-user-plus mr-1"></i>
                Đăng ký
              </Link>
              <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700">
                <i className="fas fa-sign-in-alt mr-1"></i>
                Đăng nhập
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;