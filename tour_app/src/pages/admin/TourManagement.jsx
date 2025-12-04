import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function TourManagement() {
    const [tours, setTours] = useState([]);
    const [filteredTours, setFilteredTours] = useState([]);
    const [loading, setLoading] = useState(true);

    // State cho tìm kiếm và lọc
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [activeFilter, setActiveFilter] = useState('');

    // Hàm lấy danh sách tour
    const fetchTours = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/tours');
            setTours(response.data);
            setFilteredTours(response.data);
        } catch (err) {
            toast.error('Không thể tải danh sách tour');
        } finally {
            setLoading(false);
        }
    };

    // Hàm lọc tours
    const filterTours = () => {
        let filtered = tours;

        // Lọc theo từ khóa tìm kiếm
        if (searchTerm) {
            filtered = filtered.filter(tour =>
                tour.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Lọc theo category
        if (categoryFilter) {
            filtered = filtered.filter(tour => tour.category === categoryFilter);
        }

        // Lọc theo trạng thái active
        if (activeFilter !== '') {
            const isActive = activeFilter === 'true';
            filtered = filtered.filter(tour => tour.active === isActive);
        }

        setFilteredTours(filtered);
    };

    // Hàm xóa tour
    const handleDelete = async (id) => {
        if (!confirm('Bạn có chắc chắn muốn xóa tour này?')) {
            return;
        }

        try {
            await axios.delete(`http://localhost:3000/tours/${id}`);
            setTours(tours.filter(tour => tour.id !== id));
            toast.success('Xóa tour thành công!');
        } catch (err) {
            toast.error('Lỗi khi xóa tour');
        }
    };

    // Hàm toggle active status
    const handleToggleActive = async (id, currentActive) => {
        try {
            await axios.patch(`http://localhost:3000/tours/${id}`, {
                active: !currentActive
            });
            setTours(tours.map(tour =>
                tour.id === id ? { ...tour, active: !currentActive } : tour
            ));
        } catch (err) {
            toast.error('Lỗi khi cập nhật trạng thái');
        }
    };

    // Load data lần đầu
    useEffect(() => {
        fetchTours();
    }, []);

    // Lọc khi các filter thay đổi
    useEffect(() => {
        filterTours();
    }, [tours, searchTerm, categoryFilter, activeFilter]);

    if (loading) {
        return <div className="text-center py-8">Đang tải...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Quản lý Tour</h2>
                <Link
                    to="/admin/tours/add"
                    className="bg-green-500 text-white px-8 py-3 rounded hover:bg-green-600 text-lg font-medium"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Thêm Tour Mới
                </Link>
            </div>

            {/* Bộ lọc và tìm kiếm */}
            <div className="bg-gray-50 p-4 rounded mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Tìm kiếm */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Tìm kiếm theo tên
                        </label>
                        <input
                            type="text"
                            placeholder="Nhập tên tour..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    {/* Lọc theo category */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Loại tour
                        </label>
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Tất cả</option>
                            <option value="tour nội địa">Tour nội địa</option>
                            <option value="tour quốc tế">Tour quốc tế</option>
                        </select>
                    </div>

                    {/* Lọc theo trạng thái */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Trạng thái
                        </label>
                        <select
                            value={activeFilter}
                            onChange={(e) => setActiveFilter(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Tất cả</option>
                            <option value="true">Hoạt động</option>
                            <option value="false">Không hoạt động</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Bảng danh sách tour */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="p-3 text-left font-medium text-gray-700">ID</th>
                            <th className="p-3 text-left font-medium text-gray-700">Tên Tour</th>
                            <th className="p-3 text-left font-medium text-gray-700">Giá</th>
                            <th className="p-3 text-left font-medium text-gray-700">Thời gian</th>
                            <th className="p-3 text-left font-medium text-gray-700">Số chỗ</th>
                            <th className="p-3 text-left font-medium text-gray-700">Loại</th>
                            <th className="p-3 text-left font-medium text-gray-700">Trạng thái</th>
                            <th className="p-3 text-left font-medium text-gray-700">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTours.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="p-8 text-center text-gray-500">
                                    Không tìm thấy tour nào
                                </td>
                            </tr>
                        ) : (
                            filteredTours.map((tour) => (
                                <tr key={tour.id} className="hover:bg-gray-50 border-t">
                                    <td className="p-3">{tour.id}</td>
                                    <td className="p-3">
                                        <div className="max-w-xs truncate" title={tour.name}>
                                            {tour.name}
                                        </div>
                                    </td>
                                    <td className="p-3">{tour.price ? tour.price.toLocaleString() : '0'}đ</td>
                                    <td className="p-3">{tour.duration}</td>
                                    <td className="p-3">{tour.slots || 0}</td>
                                    <td className="p-3">{tour.category}</td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => handleToggleActive(tour.id, tour.active)}
                                            className={`px-2 py-1 rounded text-xs ${
                                                tour.active
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}
                                        >
                                            {tour.active ? 'Hoạt động' : 'Không hoạt động'}
                                        </button>
                                    </td>
                                    <td className="p-3 space-x-2">
                                        <Link
                                            to={`/admin/tours/edit/${tour.id}`}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <i className="fas fa-edit mr-1"></i>
                                            Sửa
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(tour.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <i className="fas fa-trash mr-1"></i>
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TourManagement;
