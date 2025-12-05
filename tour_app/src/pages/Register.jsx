import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validateData = () => {
        let message = '';

        if (!email || !password) {
            message = 'Cần nhập đầy đủ thông tin';
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            message = 'Email không hợp lệ';
        }

        if (password && password.length < 6) {
            message = 'Mật khẩu phải ít nhất 6 ký tự';
        }

        return message;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = validateData();
        if (message) {
            toast.error(message);
            return;
        }

        try {
            // Kiểm tra email đã tồn tại chưa
            const response = await axios.get('http://localhost:3000/users');
            const users = response.data;
            const existingUser = users.find(u => u.email === email);

            if (existingUser) {
                toast.error('Email đã được sử dụng');
                return;
            }

            // Tạo user mới
            const newUser = {
                id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
                name: email.split('@')[0],
                email: email.trim(),
                password: password,
                role: 'user'
            };

            await axios.post('http://localhost:3000/users', newUser);
            toast.success('Đăng ký thành công!');
            navigate('/login');
        } catch {
            toast.error('Lỗi đăng ký tài khoản');
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 p-4 min-h-screen">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Đăng ký tài khoản
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:bg-gray-400 mb-4"
                    >
                        Đăng ký
                    </button>

                    <div className="text-center">
                        <span className="text-gray-600">Đã có tài khoản? </span>
                        <Link to="/login" className="text-blue-500 hover:text-blue-700">
                            Đăng nhập
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;