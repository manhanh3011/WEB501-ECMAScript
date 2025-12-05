import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function TourAdd() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        duration: '',
        startLocation: '',
        departure: '',
        startDate: '',
        slots: '',
        category: 'tour nội địa',
        active: true
    });

    const validateData = () => {
        let message = '';

        if (!formData.name.trim() || !formData.description.trim() || !formData.price ||
            !formData.image.trim() || !formData.duration.trim() || !formData.startLocation.trim() ||
            !formData.departure.trim() || !formData.startDate || formData.slots === '') {
            message = 'Cần nhập đầy đủ thông tin';
        }

        if (formData.price && (isNaN(formData.price) || formData.price <= 0)) {
            message = 'Giá tour phải lớn hơn 0';
        }

        if (formData.slots && (isNaN(formData.slots) || formData.slots < 0)) {
            message = 'Số chỗ phải lớn hơn hoặc bằng 0';
        }

        if (formData.name && (formData.name.length < 5 || formData.name.length > 100)) {
            message = 'Tên tour phải 5-100 ký tự';
        }

        if (formData.description && (formData.description.length < 10 || formData.description.length > 1000)) {
            message = 'Mô tả phải 10-1000 ký tự';
        }

        return message;
    };

    // Hàm xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Hàm submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = validateData();
        if (message) {
            toast.error(message);
            return;
        }

        try {
            const tourData = {
                ...formData,
                price: parseFloat(formData.price),
                slots: parseInt(formData.slots)
            };

            await axios.post('http://localhost:3000/tours', tourData);
            toast.success('Thêm tour thành công!');
            navigate('/admin/tours');
        } catch (error) {
            toast.error('Lỗi khi thêm tour');
        }
    };

    return (
        <div className="mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Thêm Tour Mới</h2>
                <button
                    onClick={() => navigate('/admin/tours')}
                    className="bg-gray-500 text-white px-8 py-3 rounded hover:bg-gray-600 text-lg font-medium"
                >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Quay lại
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">
                            Tên tour <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Nhập tên tour"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block font-medium mb-1">
                            Giá tour (VNĐ) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Nhập giá tour"
                            min="0"
                        />
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block font-medium mb-1">
                            Thời gian <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Ví dụ: 3 ngày 2 đêm"
                        />
                    </div>

                    {/* Start Location */}
                    <div>
                        <label className="block font-medium mb-1">
                            Điểm khởi hành <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="startLocation"
                            value={formData.startLocation}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Ví dụ: TP. Hồ Chí Minh"
                        />
                    </div>

                    {/* Departure */}
                    <div>
                        <label className="block font-medium mb-1">
                            Nơi khởi hành <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="departure"
                            value={formData.departure}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Ví dụ: TP. Hồ Chí Minh"
                        />
                    </div>

                    {/* Start Date */}
                    <div>
                        <label className="block font-medium mb-1">
                            Ngày khởi hành <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    {/* Slots */}
                    <div>
                        <label className="block font-medium mb-1">
                            Số chỗ <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="slots"
                            value={formData.slots}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Nhập số chỗ"
                            min="0"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block font-medium mb-1">
                            Loại tour <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="tour nội địa">Tour nội địa</option>
                            <option value="tour quốc tế">Tour quốc tế</option>
                        </select>
                    </div>
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-medium mb-1">
                        URL hình ảnh <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium mb-1">
                        Mô tả <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Nhập mô tả chi tiết về tour"
                    ></textarea>
                </div>

                {/* Active Checkbox */}
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="active"
                            checked={formData.active}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span>Tour đang hoạt động</span>
                    </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/tours')}
                        className="bg-gray-500 text-white px-8 py-3 rounded hover:bg-gray-600 text-lg font-medium"
                    >
                        Hủy
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 disabled:bg-gray-400 text-lg font-medium"
                    >
                        Thêm Tour
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TourAdd;
