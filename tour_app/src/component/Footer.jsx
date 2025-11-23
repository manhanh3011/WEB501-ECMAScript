import Button from "./Button";

function Footer() {
  return (
    <div className="bg-blue-900 mt-20 text-white py-8">
        <div className="flex justify-around items-start">
            <div>
                <h3 className="text-xl font-semibold mb-3">Du lịch nước ngoài</h3>
                <ul className="space-y-1 text-sm">
                    <li>Ai Cập</li>
                    <li>Dubai</li>
                    <li>Hàn Quốc</li>
                    <li>Philippines</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3">Du lịch  trong nước</h3>
                <ul className="space-y-1 text-sm">
                    <li>Cô Tô</li>
                    <li>Hà Nội</li>
                    <li>Ninh Bình</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3">Tour theo chủ đề</h3>
                <ul className="space-y-1 text-sm">
                    <li>Chùm tour Hoa Anh Đào</li>
                    <li>Chùm tour Du Xuân</li>
                    <li>Chùm tour Khuyến mại VITM</li>
                    <li>Chùm tour Châu Âu hoa lệ</li>
                    <li>Chùm tour Du lịch Hè</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3">Liên kết nhanh</h3>
                <ul className="space-y-1 text-sm">
                    <li>Tin tức</li>
                    <li>Giới thiệu</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div>
                <div className="flex items-center p-1 w-70 rounded-lg bg-red-500">
                    <i class="fa-solid fa-phone-volume "></i>
                    <Button className="bg-none" label="Hỗ trợ: 0965934518" />
                </div>
                <div className="flex items-center p-1 mt-3 w-70 rounded-lg bg-blue-500">
                    <i class="fa-solid fa-phone-volume "></i>
                    <Button className="bg-none" label="Hotline: 19004518" />
                </div>
            </div>
        </div>
        <div className="flex justify-around items-start mt-8 p-5">
            <img className="w-40" src="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/7d/4e/09/logo-nh-n-di-n-thuong.jpg" alt="logo" />
            <p className="text-sm leading-6 text-left">
                Thông tin chủ sở hữu webiste: Công ty Lữ hành Hanoitourist <br />
                Địa chỉ: Số 18, Phố Lý Thường Kiệt, Phường Cửa Nam, Thành phố Hà Nội, Việt Nam <br /> 
                Hotline: 19004518 <br />
                Email: info@hanoitourist.vn <br />
                ĐKHĐCN: Số 0100107500-021 đăng ký ngày 14/06/2024. <br />
                Nơi cấp: Phòng Đăng ký kinh doanh, Sở KH và ĐT Thành phố Hà Nội <br />
                GPKD LHQT & ND: Số 01-442/2019/CDLQGVN-GP LHQT cấp ngày 30/08/2024 <br />
            </p>
            <div className="p-2">
                <h3 className="text-lg font-semibold mb-2">Kết nối với chúng tôi</h3>
                <i className="fa-brands fa-facebook text-4xl pr-3 text-teal-300"></i>
                <i className="fa-brands fa-youtube text-4xl pr-5 text-red-600" ></i>
                <i className="fa-brands fa-tiktok text-4xl pr-3 pl-2 bg-black rounded-full" ></i>
                <i className="fa-brands fa-instagram text-4xl pl-3 text-amber-300"></i>
                <img className="w-40 mt-5" src="https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png" alt="logo-đã thông báo" />
            </div>
        </div>

    </div>
  );
}

export default Footer;
