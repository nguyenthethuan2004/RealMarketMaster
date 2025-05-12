import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FiShoppingBag } from "react-icons/fi";
import { SiShopee } from "react-icons/si";
import { FaFacebookF, FaTiktok, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
  
  return (
    <div className="container mx-auto px-4 py-0">
      {/* Main Hero Slider */}
      <div className="relative h-[300px] md:h-[400px] mb-8 overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/50 transition"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/50 transition"
        >
          <FaChevronRight />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      
      <h2 className="text-xl font-bold my-4 text-center sm:text-left uppercase">DANH MỤC SẢN PHẨM</h2>
      
      {/* Product Categories Circular Icons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Link href="/products/ao-khoac-nu" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_khoac_nu.png" alt="Áo khoác nữ" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO KHOÁC NỮ</p>
        </Link>
        
        <Link href="/products/ao-khoac-nam" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_khoac_nam.png" alt="Áo khoác nam" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO KHOÁC NAM</p>
        </Link>
        
        <Link href="/products/ao-khoac-doi" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_khoac_doi.png" alt="Áo khoác đôi" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO KHOÁC ĐÔI</p>
        </Link>
        
        <Link href="/products/ao-thun-nu" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_thun_nu.png" alt="Áo thun nữ" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO THUN NỮ</p>
        </Link>
        
        <Link href="/products/ao-thun-nam" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_thun_nam.png" alt="Áo thun nam" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO THUN NAM</p>
        </Link>
        
        <Link href="/products/ao-thun-doi" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_thun_doi.png" alt="Áo thun đôi" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO THUN ĐÔI</p>
        </Link>
        
        <Link href="/products/ao-thun-polo-nu" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_polo_nu.png" alt="Áo thun polo nữ" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO THUN POLO NỮ</p>
        </Link>
        
        <Link href="/products/ao-polo-nam" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_polo_nam.png" alt="Áo polo nam" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO POLO NAM</p>
        </Link>
        
        <Link href="/products/ao-polo-doi" className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#e8793b] flex items-center justify-center mx-auto overflow-hidden">
            <img src="https://gavani.vn/images/2023/06/ao_polo_doi.png" alt="Áo polo đôi" className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p className="text-xs mt-2">ÁO POLO ĐÔI</p>
        </Link>
      </div>
      
      {/* Store System Banner */}
      <div className="w-full h-56 sm:h-80 mb-8 relative">
        <img 
          src="https://gavani.vn/images/2023/06/he_thong_cua_hang_gavani_1.jpg" 
          alt="Hệ thống cửa hàng GAVANI" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">HỆ THỐNG CỬA HÀNG GAVANI</h2>
          <div className="flex gap-2 items-center mt-4">
            <span className="text-sm">&lt;&lt;&lt;</span>
            <Link href="/he-thong-cua-hang">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">XEM NGAY</Button>
            </Link>
            <span className="text-sm">&gt;&gt;&gt;</span>
          </div>
        </div>
      </div>
      
      {/* Deal Section with Promo Banner */}
      <div className="mb-8">
        <div className="bg-[#e52629] text-white py-4 px-6 rounded-t-md">
          <h2 className="text-xl font-bold">DEAL HỜI GIÁ TỐT</h2>
        </div>
        
        <div className="bg-white p-4 border border-gray-200 rounded-b-md">
          {/* Promo Banner */}
          <div className="bg-gray-100 p-2 mb-4 rounded flex flex-wrap justify-center md:justify-between text-sm">
            <div className="flex items-center mr-4">
              <span className="font-bold">BẢN TIN KHUYẾN MÃI</span>
            </div>
            <div className="flex flex-wrap">
              <div className="mx-2 whitespace-nowrap">Freeship đơn hàng từ 299K</div>
              <div className="mx-2 whitespace-nowrap">Mua càng nhiều giảm càng sâu</div>
              <div className="mx-2 whitespace-nowrap">Freeship đơn hàng từ 299K</div>
              <div className="mx-2 whitespace-nowrap">Mua càng nhiều</div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {/* Product 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-67%</div>
              
              {/* Product Image */}
              <div className="relative">
                <img 
                  src="https://gavani.vn/images/galleries/5c19ff8b-f11a-4583-a4fa-f4b50f45aac9/ao_thun_nam_basic_ngan_tay_1_800x800.jpg" 
                  alt="Áo thun nam basic" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white">
                    <FiShoppingBag size={18} />
                  </button>
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
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-67%</div>
              
              {/* Product Image */}
              <div className="relative">
                <img 
                  src="https://gavani.vn/images/galleries/c1a51efa-70bd-4b1e-942e-8beeabbdf5cc/ao_thun_nu_form_rong_tay_ngan__gavani_akh_party_time_1_800x800.jpg" 
                  alt="Áo thun nữ form rộng" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Quick View Button */}
                <div className="absolute right-2 top-2">
                  <button className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white">
                    <FiShoppingBag size={18} />
                  </button>
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
            
            {/* Product 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-50%</div>
              
              {/* Product Image */}
              <div className="relative">
                <img 
                  src="https://gavani.vn/images/galleries/31878edf-9c0a-45fd-8644-6f4a2e2cd9ef/ao_thun_nam_cotton_form_rong__gavani_akh_vitamin_c_1_800x800.jpg" 
                  alt="Áo thun nam cotton" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white">
                    <FiShoppingBag size={18} />
                  </button>
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
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-50%</div>
              
              {/* Product Image */}
              <div className="relative">
                <img 
                  src="https://gavani.vn/images/galleries/c2fd6f97-08df-4f95-ba64-e41e62bbb05a/ao_thun_nu_cotton_form_rong__gavani_akh_vitamin_c_1_800x800.jpg" 
                  alt="Áo thun nữ cotton" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white">
                    <FiShoppingBag size={18} />
                  </button>
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
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-39%</div>
              
              {/* Product Image */}
              <div className="relative">
                <img 
                  src="https://gavani.vn/images/galleries/e6f75cb6-a4be-4f6a-8082-8f9e1c0a9f3e/ao_khoac_doi_nu_ao_khoac_gio_2_lop__gavani_hoa_stand_up_collar_1_800x800.jpg" 
                  alt="Áo khoác đôi" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white">
                    <FiShoppingBag size={18} />
                  </button>
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
        </div>
      </div>
      
      {/* ÁO KHOÁC GAVANI Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold my-4 uppercase">ÁO KHOÁC GAVANI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Banner Image */}
          <div className="md:col-span-1 relative h-[300px] rounded-md overflow-hidden">
            <img 
              src="https://gavani.vn/images/galleries/new_jacket_collection.jpg" 
              alt="New Jacket Collection" 
              className="w-full h-full object-cover"
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
                <Button className="bg-white text-[#ff5a5f] hover:bg-gray-100 border-none rounded-full">
                  GET A 39% DISCOUNT
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Products 3 Column Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Product 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-35%</div>
              
              {/* Product Image */}
              <div className="relative">
                <img 
                  src="https://gavani.vn/images/galleries/9a4b1ba7-1aaf-4deb-a11a-b6d731b9ae48/ao_khoac_nu_uv_chong_nang_va_khang_khuan_gavani_hoa_ultra_thin_pink_1_800x800.jpg" 
                  alt="Áo khoác nữ UV" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white">
                    <FiShoppingBag size={18} />
                  </button>
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
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-35%</div>
              
              {/* Product Image */}
              <div className="relative">
                <img 
                  src="https://gavani.vn/images/galleries/4c6ea9b7-0c31-47bc-9bd6-f7cbabc075c2/ao_khoac_nu_uv_chong_nang_va_khang_khuan_gavani_hoa_sun_safety_peach_1_800x800.jpg" 
                  alt="Áo khoác nữ UV" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white">
                    <FiShoppingBag size={18} />
                  </button>
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
            <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-35%</div>
              
              {/* Product Image */}
              <div className="relative">
                <img 
                  src="https://gavani.vn/images/galleries/ef9de654-74e9-4fef-a7b9-c2beb5642e86/ao_khoac_nam_chong_uv_chong_nang_va_khang_khuan_gavani_hoa_sun_safety_1_800x800.jpg" 
                  alt="Áo khoác nam UV" 
                  className="w-full h-48 object-cover"
                />
                
                {/* Gavani Watermark */}
                <div className="absolute top-2 right-2">
                  <img src="https://gavani.vn/images/gavani_trademark.png" alt="Gavani" className="w-16" />
                </div>
                
                {/* Add to Cart Button */}
                <div className="absolute right-2 bottom-2">
                  <button className="w-10 h-10 rounded-full bg-[#e52629] flex items-center justify-center text-white">
                    <FiShoppingBag size={18} />
                  </button>
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
            <Button variant="outline" className="rounded-full border-[#e52629] text-[#e52629] hover:bg-[#e52629] hover:text-white py-1 px-8">
              Xem tất cả
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Online Channels */}
      <h2 className="text-xl font-bold mb-6 uppercase">CÁC KÊNH ONLINE GAVANI</h2>
      <div className="flex flex-wrap justify-center md:justify-between gap-8 mb-12">
        <Link href="https://shopee.vn/gavani.vn" target="_blank" className="flex items-center justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
            <SiShopee className="w-full h-full text-[#ee4d2d]" />
          </div>
        </Link>
        
        <Link href="https://www.lazada.vn/shop/gavani" target="_blank" className="flex items-center justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
            <FaLaptopCode className="w-full h-full text-[#0f146c]" />
          </div>
        </Link>
        
        <Link href="https://www.facebook.com/gavani.vn" target="_blank" className="flex items-center justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
            <FaFacebookF className="w-3/4 h-3/4 text-[#1877f2]" />
          </div>
        </Link>
        
        <Link href="https://www.tiktok.com/@gavani.vn" target="_blank" className="flex items-center justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
            <FaTiktok className="w-3/4 h-3/4 text-black" />
          </div>
        </Link>
      </div>
      
      {/* Promo Banner Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative h-60 overflow-hidden rounded-md">
          <img 
            src="https://gavani.vn/images/cms/polo-thun-ca-sau-may-min.jpg" 
            alt="Áo polo thun cá sấu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-black/40 to-transparent">
            <h3 className="text-white font-bold text-2xl mb-2">ÁO POLO THUN CÁ SẤU</h3>
            <p className="text-white uppercase mb-4">MỀM MỊN - CO GIÃN - THOÁNG MÁT</p>
            <Link href="/products/ao-polo">
              <Button className="bg-[#e52629] text-white hover:bg-[#c81f22] rounded-none w-32">
                XEM TẤT CẢ
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative h-60 overflow-hidden rounded-md">
          <img 
            src="https://gavani.vn/images/cms/ao-thun-cotton-may-min.jpg" 
            alt="Áo thun cotton" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-gradient-to-r from-black/40 to-transparent">
            <h3 className="text-white font-bold text-2xl mb-2">ÁO THUN COTTON</h3>
            <p className="text-white uppercase mb-4">MỀM MỊN - CO GIÃN - THOÁNG MÁT</p>
            <Link href="/products/ao-thun">
              <Button className="bg-[#e52629] text-white hover:bg-[#c81f22] rounded-none w-32">
                XEM TẤT CẢ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
