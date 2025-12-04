import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Tạo Auth Context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Kiểm tra localStorage khi app khởi động
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('user');
        toast.error('Lỗi dữ liệu đăng nhập');
      }
    }
    setLoading(false);
  }, []);

  // Hàm login
  const login = async (email, password) => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;

      // Tìm user có email và password khớp
      const foundUser = users.find(u => u.email === email && u.password === password);

      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('user', JSON.stringify(foundUser));
        return { success: true };
      } else {
        toast.error('Sai email hoặc mật khẩu');
        return { success: false };
      }
    } catch (error) {
      toast.error('Lỗi kết nối server');
      return { success: false };
    }
  };

  // Hàm logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Hàm kiểm tra đã đăng nhập
  const isAuthenticated = () => {
    return user !== null;
  };

  // Hàm kiểm tra admin
  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook để sử dụng Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
