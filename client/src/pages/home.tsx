import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FiShoppingBag } from "react-icons/fi";
import { SiShopee } from "react-icons/si";
import { FaFacebookF, FaTiktok, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set loaded state after component mount to trigger animations
  useEffect(() => {
    setIsLoaded(true);
    
    // Set auto-rotate for slider
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const slides = [
    {
      image: "https://gavani.vn/images/banners/banner-new-1.jpg",
      alt: "Thời trang Gavani"
    },
    {
      image: "https://gavani.vn/images/banners/banner-new-2.jpg",
      alt: "Thời trang Gavani"
    },
    {
      image: "https://gavani.vn/images/banners/banner-new-3.jpg",
      alt: "Thời trang Gavani"
    },
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const thoiTrangNamNuProducts = [
    {
      id: 1,
      name: "Áo thun đôi kết hợp _ Gavani Akh Vitamin C",
      price: 298000,
      originalPrice: 598000,
      discount: "-50%",
      rating: 5,
      sales: 83,
      image: "https://gavani.vn/images/galleries/9e83d94a-1a59-4772-a18b-fa4b6fc626ba/ao_thun_doi__gavani_akh_vitamin_c_1_800x800.jpg",
      colors: ["gray-200", "pink-300", "gray-700"]
    },
    {
      id: 2,
      name: "Áo khoác ĐÔI, áo hoodie dù, áo khoác dù hoa Stand-up collar",
      price: 598000,
      originalPrice: 978000,
      discount: "-39%",
      rating: 5,
      sales: 30,
      image: "https://gavani.vn/images/galleries/0fb91c90-16d2-44ab-a86a-1bbaef34ac13/ao_khoac_doi_ao_khoac_du_ao_hoodie_du_1_800x800.jpg",
      colors: ["blue-600", "gray-200", "yellow-200"]
    },
    {
      id: 3,
      name: "Áo thun đôi _ Gavani Akh King to the earth",
      price: 298000,
      originalPrice: 598000,
      discount: "-50%",
      rating: 5,
      sales: 47,
      image: "https://gavani.vn/images/galleries/92f3ccd2-6dcc-4fe2-9f14-be3972dfa6da/ao_thun_doi__gavani_akh_king_to_the_earth_1_800x800.jpg",
      colors: ["black", "purple-400", "pink-300", "gray-200"]
    },
    {
      id: 4,
      name: "Áo khoác ĐÔI, áo khoác dù _ Gavani hoa Gentle",
      price: 598000,
      originalPrice: 978000,
      discount: "-39%",
      rating: 5,
      sales: 40,
      image: "https://gavani.vn/images/galleries/c0ba2d15-8be7-4a28-b3cc-1a10c14b2d85/ao_khoac_doi_ao_khoac_du_ao_hoodie_du_2_800x800.jpg",
      colors: ["black", "teal-300", "gray-200"]
    },
    {
      id: 5,
      name: "Áo polo đôi dành cho couple _ Gavani Pol Say Hi",
      price: 298000,
      originalPrice: 698000,
      discount: "-57%",
      rating: 5,
      sales: 10,
      image: "https://gavani.vn/images/galleries/d45ef9b6-1a7d-4c54-b4ad-13b7c0eba4bc/ao_polo_doi_danh_cho_couple__gavani_pol_say_hi_1_800x800.jpg",
      colors: ["gray-200", "black", "gray-700"]
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-0">
      {/* Main Hero Slider */}
      <div className={`relative h-[300px] md:h-[400px] mb-8 overflow-hidden ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
        <div 
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        
        {/* Slide Navigation Buttons */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/50 transition button-press"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/50 transition button-press"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Các kênh quảng cáo */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
        <div className="relative h-60 overflow-hidden rounded-md hover-lift">
          <img 
            src="https://gavani.vn/images/cms/polo-thun-ca-sau-may-min.jpg" 
            alt="Áo polo thun cá sấu" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-black/40 to-transparent">
            <h3 className="text-white font-bold text-2xl mb-2">ÁO POLO THUN CÁ SẤU</h3>
            <p className="text-white uppercase mb-4">MỀM MỊN - CO GIÃN - THOÁNG MÁT</p>
            <Link href="/products/ao-polo">
              <Button className="bg-[#e52629] text-white hover:bg-[#c81f22] rounded-none w-32 button-press">
                XEM TẤT CẢ
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative h-60 overflow-hidden rounded-md hover-lift">
          <img 
            src="https://gavani.vn/images/cms/ao-thun-cotton-may-min.jpg" 
            alt="Áo thun cotton" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-black/40 to-transparent">
            <h3 className="text-white font-bold text-2xl mb-2">ÁO THUN COTTON</h3>
            <p className="text-white uppercase mb-4">MỀM MỊN - CO GIÃN - THOÁNG MÁT</p>
            <Link href="/products/ao-thun">
              <Button className="bg-[#e52629] text-white hover:bg-[#c81f22] rounded-none w-32 button-press">
                XEM TẤT CẢ
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Deal Section with Promo Banner */}
      <div className={`mb-8 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
        <div className="bg-[#e52629] text-white py-4 px-6 rounded-t-md">
          <h2 className="text-xl font-bold">DEAL HỜI GIÁ TỐT</h2>
        </div>
        
        <div className="bg-white p-4 border border-gray-200 rounded-b-md">
          {/* Promo Banner */}
          <div className="bg-gray-100 p-2 mb-4 rounded flex flex-wrap justify-center md:justify-between text-sm">
            <div className="flex items-center mr-4">
              <span className="font-bold">BẢN TIN KHUYẾN MÃI</span>
            </div>
            <div className="flex flex-wrap animate-marquee">
              <div className="mx-2 whitespace-nowrap">Freeship đơn hàng từ 299K</div>
              <div className="mx-2 whitespace-nowrap">Mua càng nhiều giảm càng sâu</div>
              <div className="mx-2 whitespace-nowrap">Freeship đơn hàng từ 299K</div>
              <div className="mx-2 whitespace-nowrap">Mua càng nhiều</div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {/* Product 1 */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">-67%</div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="https://gavani.vn/images/galleries/5c19ff8b-f11a-4583-a4fa-f4b50f45aac9/ao_thun_nam_basic_ngan_tay_1_800x800.jpg" 
                  alt="Áo thun nam basic" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href="/products/ao-thun/ao-thun-nam-basic">
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">5 (66 bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo thun nam basic, ngắn tay - Gavani Akh Dreamlover</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">99,000₫</div>
                  <div className="text-gray-400 line-through text-xs">299,000₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  <div className="w-5 h-5 rounded-full bg-gray-500 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-black border border-gray-300"></div>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">-67%</div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="https://gavani.vn/images/galleries/c1a51efa-70bd-4b1e-942e-8beeabbdf5cc/ao_thun_nu_form_rong_tay_ngan__gavani_akh_party_time_1_800x800.jpg" 
                  alt="Áo thun nữ form rộng" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Quick View Button */}
                <div className="absolute right-2 top-2">
                  <button className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-gray-700 button-press transform transition-transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href="/products/ao-thun/ao-thun-nu-form-rong">
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">5 (14 bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo thun nữ form rộng tay ngắn - Gavani Akh Party Time</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">99,000₫</div>
                  <div className="text-gray-400 line-through text-xs">299,000₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  <div className="w-5 h-5 rounded-full bg-black border border-gray-300"></div>
                </div>
              </div>
            </div>
            
            {/* Additional Products (Same pattern, different animation delay) */}
            {/* Product 3 */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">-50%</div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="https://gavani.vn/images/galleries/31878edf-9c0a-45fd-8644-6f4a2e2cd9ef/ao_thun_nam_cotton_form_rong__gavani_akh_vitamin_c_1_800x800.jpg" 
                  alt="Áo thun nam cotton" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href="/products/ao-thun/ao-thun-nam-cotton">
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">5 (178 bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo thun nam cotton form rộng - Gavani Akh Vitamin C</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">149,000₫</div>
                  <div className="text-gray-400 line-through text-xs">299,000₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  <div className="w-5 h-5 rounded-full bg-gray-300 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-500 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-gray-300"></div>
                </div>
              </div>
            </div>
            
            {/* Product 4 */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">-50%</div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="https://gavani.vn/images/galleries/c2fd6f97-08df-4f95-ba64-e41e62bbb05a/ao_thun_nu_cotton_form_rong__gavani_akh_vitamin_c_1_800x800.jpg" 
                  alt="Áo thun nữ cotton" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href="/products/ao-thun/ao-thun-nu-cotton">
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">5 (102 bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo thun nữ cotton form rộng - Gavani Akh Vitamin C</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">149,000₫</div>
                  <div className="text-gray-400 line-through text-xs">299,000₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  <div className="w-5 h-5 rounded-full bg-gray-300 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-500 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-gray-300"></div>
                </div>
              </div>
            </div>
            
            {/* Product 5 */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">-39%</div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="https://gavani.vn/images/galleries/e6f75cb6-a4be-4f6a-8082-8f9e1c0a9f3e/ao_khoac_doi_nu_ao_khoac_gio_2_lop__gavani_hoa_stand_up_collar_1_800x800.jpg" 
                  alt="Áo khoác đôi" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href="/products/ao-khoac/ao-khoac-doi-nu">
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">5 (305 bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo khoác đôi nữ, áo khoác gió 2 lớp - Gavani hoa Stand-up collar</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">299,000₫</div>
                  <div className="text-gray-400 line-through text-xs">489,000₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-pink-200 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* View All Button */}
          <div className="flex justify-center">
            <Link href="/products">
              <Button 
                variant="outline" 
                className="rounded-full border-[#e52629] text-[#e52629] hover:bg-[#e52629] hover:text-white py-1 px-8 button-press"
              >
                Xem tất cả
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* ÁO KHOÁC GAVANI Section */}
      <div className={`mb-8 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
        <h2 className="text-xl font-bold my-4 uppercase">ÁO KHOÁC GAVANI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Banner Image */}
          <div className="md:col-span-1 relative h-[300px] rounded-md overflow-hidden">
            <img 
              src="https://gavani.vn/images/galleries/new_jacket_collection.jpg" 
              alt="New Jacket Collection" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#ff5a5f]/80 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">NEW JACKET<br />COLLECTION</h3>
                <ul className="text-white text-xs space-y-1">
                  <li>• Form dáng unisex - Dày dặn, chất liệu chống nước</li>
                  <li>• Chất vải dù mềm, nhẹ - Co dãn 4 chiều, siêu thoáng</li>
                  <li>• Bảo vệ làn da khỏi tia UV và tác hại từ bụi mịn</li>
                  <li>• Có lớp lót bên trong - Cản gió tốt</li>
                  <li>• Mặc bền theo thời gian - Không xù, không bai</li>
                </ul>
              </div>
              
              <Link href="/products/ao-khoac">
                <Button className="bg-white text-[#ff5a5f] hover:bg-gray-100 border-none rounded-full button-press">
                  GET A 39% DISCOUNT
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Products 3 Column Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Product 1 */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">-35%</div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="https://gavani.vn/images/galleries/9a4b1ba7-1aaf-4deb-a11a-b6d731b9ae48/ao_khoac_nu_uv_chong_nang_va_khang_khuan_gavani_hoa_ultra_thin_pink_1_800x800.jpg" 
                  alt="Áo khoác nữ UV" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href="/products/ao-khoac/ao-khoac-nu-uv">
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">5 (50 bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo khoác nữ UV, chống nắng và kháng khuẩn Gavani Hoa Ultra-Thin</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">299,000₫</div>
                  <div className="text-gray-400 line-through text-xs">459,000₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  <div className="w-5 h-5 rounded-full bg-pink-300 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-500 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-teal-300 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-black border border-gray-300"></div>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.7s'}}>
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">-35%</div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="https://gavani.vn/images/galleries/4c6ea9b7-0c31-47bc-9bd6-f7cbabc075c2/ao_khoac_nu_uv_chong_nang_va_khang_khuan_gavani_hoa_sun_safety_peach_1_800x800.jpg" 
                  alt="Áo khoác nữ UV" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href="/products/ao-khoac/ao-khoac-nu-uv-sun-safety">
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">5 (278 bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo khoác nữ UV, chống nắng và kháng khuẩn Gavani HOZ SUN SAFETY</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">299,000₫</div>
                  <div className="text-gray-400 line-through text-xs">459,000₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  <div className="w-5 h-5 rounded-full bg-orange-200 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-black border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-700 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-teal-300 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-pink-300 border border-gray-300"></div>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">-35%</div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src="https://gavani.vn/images/galleries/ef9de654-74e9-4fef-a7b9-c2beb5642e86/ao_khoac_nam_chong_uv_chong_nang_va_khang_khuan_gavani_hoa_sun_safety_1_800x800.jpg" 
                  alt="Áo khoác nam UV" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href="/products/ao-khoac/ao-khoac-nam-uv">
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-xs text-gray-600 ml-1">5 (294 bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo khoác nam chống uv, chống nắng và kháng khuẩn Gavani HOZ SUN SAFETY</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">299,000₫</div>
                  <div className="text-gray-400 line-through text-xs">459,000₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  <div className="w-5 h-5 rounded-full bg-teal-300 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-black border border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center mt-6">
          <Link href="/products/ao-khoac">
            <Button 
              variant="outline" 
              className="rounded-full border-[#e52629] text-[#e52629] hover:bg-[#e52629] hover:text-white py-1 px-8 button-press"
            >
              Xem tất cả
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Thời trang Nam Nữ */}
      <div className={`mb-8 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
        <h2 className="text-xl font-bold my-4 uppercase">THỜI TRANG NAM NỮ</h2>
        
        {/* Tabs for Gender */}
        <div className="flex mb-6">
          <div className="bg-[#e52629] text-white px-4 py-2 rounded-lg">Đồ đôi</div>
          <div className="px-4 py-2 ml-2 cursor-pointer hover:bg-gray-100 transition-colors">Thời trang Nam</div>
          <div className="px-4 py-2 ml-2 cursor-pointer hover:bg-gray-100 transition-colors">Thời trang Nữ</div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {thoiTrangNamNuProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`border border-gray-200 rounded-lg overflow-hidden relative group hover-lift stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`}
              style={{animationDelay: `${1.0 + index * 0.1}s`}}
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold pulse">
                {product.discount}
              </div>
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <Link href={`/products/${product.id}`}>
                    <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white button-press transform transition-transform hover:scale-110">
                      <FiShoppingBag size={18} />
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-2">
                <div className="flex items-center mb-1">
                  {Array(product.rating).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-xs text-gray-600 ml-1">{product.rating} ({product.sales} bán)</span>
                </div>
                
                <h3 className="text-xs font-medium mb-1 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="text-[#e52629] font-bold">{product.price.toLocaleString()}₫</div>
                  <div className="text-gray-400 line-through text-xs">{product.originalPrice.toLocaleString()}₫</div>
                </div>
                
                {/* Color Options */}
                <div className="flex mt-2 gap-1">
                  {product.colors.map((color, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full bg-${color} border border-gray-300`}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center mb-8">
          <Link href="/products">
            <Button 
              variant="outline" 
              className="rounded-full border-[#e52629] text-[#e52629] hover:bg-[#e52629] hover:text-white py-1 px-8 button-press"
            >
              Xem tất cả
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Product Categories Circular Icons */}
      <h2 className={`text-xl font-bold my-4 text-center sm:text-left uppercase ${isLoaded ? 'fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
        DANH MỤC SẢN PHẨM
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { path: "/products/ao-khoac-nu", img: "ao_khoac_nu.png", name: "ÁO KHOÁC NỮ" },
          { path: "/products/ao-khoac-nam", img: "ao_khoac_nam.png", name: "ÁO KHOÁC NAM" },
          { path: "/products/ao-khoac-doi", img: "ao_khoac_doi.png", name: "ÁO KHOÁC ĐÔI" },
          { path: "/products/ao-thun-nu", img: "ao_thun_nu.png", name: "ÁO THUN NỮ" },
          { path: "/products/ao-thun-nam", img: "ao_thun_nam.png", name: "ÁO THUN NAM" },
          { path: "/products/ao-thun-doi", img: "ao_thun_doi.png", name: "ÁO THUN ĐÔI" },
          { path: "/products/ao-thun-polo-nu", img: "ao_polo_nu.png", name: "ÁO THUN POLO NỮ" },
          { path: "/products/ao-polo-nam", img: "ao_polo_nam.png", name: "ÁO POLO NAM" },
          { path: "/products/ao-polo-doi", img: "ao_polo_doi.png", name: "ÁO POLO ĐÔI" },
        ].map((item, index) => (
          <Link 
            key={index}
            href={item.path} 
            className={`text-center stagger-item hover-lift ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}
            style={{animationDelay: `${1.3 + index * 0.05}s`}}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
              <img 
                src={`https://gavani.vn/images/2023/06/${item.img}`} 
                alt={item.name} 
                className="w-14 h-14 sm:w-16 sm:h-16"
              />
            </div>
            <p className="text-xs mt-2">{item.name}</p>
          </Link>
        ))}
      </div>
      
      {/* Store System Banner */}
      <div className={`w-full h-56 sm:h-80 mb-8 relative rounded-lg overflow-hidden ${isLoaded ? 'scale-in' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
        <img 
          src="https://gavani.vn/images/2023/06/he_thong_cua_hang_gavani_1.jpg" 
          alt="Hệ thống cửa hàng GAVANI" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">HỆ THỐNG CỬA HÀNG GAVANI</h2>
          <div className="flex gap-2 items-center mt-4">
            <span className="text-sm">&lt;&lt;&lt;</span>
            <Link href="/he-thong-cua-hang">
              <Button 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white hover:text-black button-press"
              >
                XEM NGAY
              </Button>
            </Link>
            <span className="text-sm">&gt;&gt;&gt;</span>
          </div>
        </div>
      </div>
      
      {/* Online Channels */}
      <h2 className={`text-xl font-bold mb-6 uppercase ${isLoaded ? 'fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1.5s'}}>
        CÁC KÊNH ONLINE GAVANI
      </h2>
      <div className="flex flex-wrap justify-center md:justify-between gap-8 mb-12">
        {[
          { href: "https://shopee.vn/gavani.vn", icon: <SiShopee className="w-full h-full text-[#ee4d2d]" /> },
          { href: "https://www.lazada.vn/shop/gavani", icon: <FaLaptopCode className="w-full h-full text-[#0f146c]" /> },
          { href: "https://www.facebook.com/gavani.vn", icon: <FaFacebookF className="w-3/4 h-3/4 text-[#1877f2]" /> },
          { href: "https://www.tiktok.com/@gavani.vn", icon: <FaTiktok className="w-3/4 h-3/4 text-black" /> },
        ].map((item, index) => (
          <Link 
            key={index}
            href={item.href} 
            target="_blank" 
            className={`flex items-center justify-center stagger-item ${isLoaded ? 'fade-in' : 'opacity-0'}`}
            style={{animationDelay: `${1.6 + 0.1 * index}s`}}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center hover-scale">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
