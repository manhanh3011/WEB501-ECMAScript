import '../App.css';
import Footer from '../component/Footer';
import Header from "../component/Header";

function About() {
  return (
    <div className='container mx-auto'>
      <Header />
      <h3 className='text-2xl text-left mt-5'>Về công ty</h3>
      <p className='mt-5 text-left'>
        <span className='font-bold mr-2'>Công ty Lữ hành Hanoitourist</span>  
        là đơn vị trực thuộc Tổng Công ty Du lịch Hà Nội - doanh nghiệp nhà nước có vị thế hàng đầu, tự hào là đơn vị đi đầu trong ngành du lịch Việt Nam
      </p>
      <p className='mt-5 text-left'>
        Tiền thân là Công ty Du lịch Hà Nội được thành lập từ ngày 25/3/1963, đến ngày 12/7/2004, UBND Thành phố Hà Nội ra Quyết định thành lập Tổng Công ty Du lịch Hà Nội, thí điểm hoạt động theo mô hình công ty mẹ - công ty con, trên cơ sở tập hợp một số doanh nghiệp kinh doanh du lịch trên địa bàn thành phố với mục tiêu tập trung xây dựng một Tổng công ty du lịch lớn, có thương hiệu mạnh, hoạt động đa ngành nghề, đa sở hữu, có sức cạnh tranh cao và hội nhập kinh tế quốc tế hiệu quả, phù hợp với yêu cầu phát triển ngành du lịch và nền kinh tế Thủ đô. Hiện nay, Tổng công ty Du lịch Hà Nội đang hoạt động và phát triển mạnh mẽ trong các lĩnh vực: Lữ hành, Khách sạn, Thương mại, Văn phòng cho thuê, Giải trí và Điện ảnh.
      </p>
      <p className='mt-5 text-left'>
        <span className='font-bold mr-2'>Công ty Lữ hành Hanoitourist</span>  
        hiện đang cung cấp dịch vụ trong nhiều lĩnh vực khác nhau như:
      </p>
      <ul className='list-disc text-left ml-15'>
        <li>Du lịch nội địa</li>
        <li>Du lịch quốc tế Outbound (đưa khách du lịch Việt Nam ra nước ngoài) </li>
        <li>Du lịch quốc tế Inbound (đón khách du lịch nước ngoài vào Việt Nam)</li>
        <li>Du lịch M.I.C.E (du lịch kết hợp hội nghị, hội thảo, triển lãm,... dành cho doanh nghiệp)</li>
        <li>Dịch vụ tư vấn Visa</li>
        <li>.....</li>
      </ul>
      <p className='mt-5 text-left'>
        Quy tụ đội ngũ Lãnh đạo, điều hành, kinh doanh, hướng dẫn viên có nhiều năm kinh nghiệm, Hanoitourist luôn nỗ lực mang đến những trải nghiệm vượt trội nhờ sự am hiểu sâu sắc về ngành, giá thành hợp lý, dịch vụ chuyên biệt hoá theo nhu cầu của khách hàng. 
      </p>
      <p className='mt-5 text-left'>
        Bằng sự nỗ lực không ngừng và sự lắng nghe ý kiến từ phía khách hàng, Hanoitourist phấn đấu trở thành thương hiệu lữ hành hàng đầu, có uy tín lớn ở Việt Nam và khu vực; xây dựng hệ thống sản phẩm dịch vụ đẳng cấp, góp phần nâng tầm trải nghiệm của du khách và thương hiệu Du lịch Việt Nam trên trường quốc tế.
      </p>
      <p className='mt-5 text-left'>
        Chúng tôi tin tưởng, với vị thế hàng đầu và đội ngũ nhân sự chuyên nghiệp đã phục vụ hàng nghìn đoàn khách trong và ngoài nước đến hầu hết những địa danh nổi tiếng khắp Việt Nam và thế giới, Hanoitourist sẽ làm hài lòng các Quý khách hàng.
      </p>
      <img className='mt-5 p-4' src="https://hanoitourist.vn/sites/default/files/inline-images/Ch%C6%B0a%20c%C3%B3%20t%C3%AAn%20%281200%20x%20800%20px%29%20%2823%29.png" alt="ảnh công ty" />
      <p className='mt-1 font-bold text-xl'>Hanoitourist - Cùng bạn khám phá thế giới!</p>
      <Footer />
    </div>
  );
}

export default About;
