import Layout from "@/components/layout/Layout";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export default function HeThongCuaHang() {
  const storeLocations = [
    {
      id: 1,
      name: "GAVANI THE GARDEN",
      address: "Tầng B1, TTTM The Garden, Mễ Trì, Nam Từ Liêm, Hà Nội",
      phone: "0971 411 122",
      openHours: "9:00 - 22:00",
      image: "https://gavani.vn/images/cms/garden-shop.jpg"
    },
    {
      id: 2,
      name: "GAVANI ROYAL CITY",
      address: "Tầng B2, TTTM Royal City, 72A Nguyễn Trãi, Thanh Xuân, Hà Nội",
      phone: "0971 411 122",
      openHours: "9:00 - 22:00",
      image: "https://gavani.vn/images/cms/royal-city-shop.jpg"
    },
    {
      id: 3,
      name: "GAVANI AEON MALL HÀ ĐÔNG",
      address: "Tầng 2, TTTM Aeon Mall Hà Đông, Dương Nội, Hà Đông, Hà Nội",
      phone: "0971 411 122",
      openHours: "9:00 - 22:00",
      image: "https://gavani.vn/images/cms/aeon-mall-shop.jpg"
    },
    {
      id: 4,
      name: "GAVANI TIMES CITY",
      address: "Tầng B1, TTTM Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội",
      phone: "0971 411 122",
      openHours: "9:00 - 22:00",
      image: "https://gavani.vn/images/cms/timescity-shop.jpg"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-[#e52629]">HỆ THỐNG CỬA HÀNG GAVANI</h1>
        
        {/* Banner */}
        <div className="w-full h-56 sm:h-80 mb-8 relative rounded-lg overflow-hidden">
          <img 
            src="https://gavani.vn/images/2023/06/he_thong_cua_hang_gavani_1.jpg" 
            alt="Hệ thống cửa hàng GAVANI" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">HỆ THỐNG CỬA HÀNG GAVANI</h2>
            <p className="text-lg text-center max-w-2xl px-4">Khám phá các cửa hàng GAVANI trên toàn quốc với không gian hiện đại, sang trọng cùng đội ngũ nhân viên nhiệt tình, chu đáo</p>
          </div>
        </div>
        
        {/* Store Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {storeLocations.map((store) => (
            <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-60 overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#e52629] mb-4">{store.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-[#e52629] min-w-[20px] mt-1" />
                    <p className="ml-3">{store.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <FaPhone className="text-[#e52629] min-w-[20px]" />
                    <p className="ml-3">{store.phone}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <FaClock className="text-[#e52629] min-w-[20px]" />
                    <p className="ml-3">Thời gian mở cửa: {store.openHours} (Tất cả các ngày trong tuần)</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href={`https://www.google.com/maps/search/${encodeURIComponent(store.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#e52629] text-white px-4 py-2 rounded transition-colors hover:bg-[#c81f22]"
                  >
                    Xem bản đồ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-gray-100 p-8 rounded-lg mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Bạn cần hỗ trợ thêm?</h3>
          <p className="mb-6">Liên hệ với chúng tôi qua hotline hoặc email để được tư vấn miễn phí.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:0971411122" className="flex items-center justify-center gap-2 bg-[#e52629] text-white px-6 py-3 rounded-lg hover:bg-[#c81f22] transition-colors">
              <FaPhone />
              <span>0971 411 122</span>
            </a>
            <a href="mailto:cskh@gavani.vn" className="flex items-center justify-center gap-2 bg-white text-[#e52629] border border-[#e52629] px-6 py-3 rounded-lg hover:bg-[#fff8f8] transition-colors">
              <span>cskh@gavani.vn</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}