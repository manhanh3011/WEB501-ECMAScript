import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TourManagement from './admin/TourManagement';
import TourAdd from './admin/TourAdd';
import TourEdit from './admin/TourEdit';

function AdminDashboard() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };
    const location = useLocation();

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Quản trị Tour App</h1>
                        <span className="text-gray-600">Xin chào, {user?.email}</span>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/" className="text-blue-500 hover:text-blue-700">
                            Về trang chủ
                        </Link>
                        <button
                            onClick={logout}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            <i className="fas fa-sign-out-alt mr-2"></i>
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto p-4">
                <div className="flex gap-6">
                    {/* Sidebar */}
                    <div className="w-64 bg-white p-4 rounded shadow">
                        <nav className="space-y-2">
                            <Link
                                to="/admin"
                                className={`block p-2 rounded ${
                                    location.pathname === '/admin'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <i className="fas fa-home mr-2"></i>
                                Dashboard
                            </Link>
                            <Link
                                to="/admin/tours"
                                className={`block p-2 rounded ${
                                    location.pathname.startsWith('/admin/tours')
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <i className="fas fa-cog mr-2"></i>
                                Quản lý Tour
                            </Link>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-white p-4 rounded shadow">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <div className="text-center py-8">
                                        <h2 className="text-2xl font-bold mb-4">
                                            Chào mừng đến trang quản trị
                                        </h2>
                                    </div>
                                }
                            />
                            <Route path="/tours" element={<TourManagement />} />
                            <Route path="/tours/add" element={<TourAdd />} />
                            <Route path="/tours/edit/:id" element={<TourEdit />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
