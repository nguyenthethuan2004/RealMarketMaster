import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FiShoppingBag } from "react-icons/fi";
import { SiShopee } from "react-icons/si";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-0">
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
      
      {/* Top Products */}
      <h2 className="text-xl font-bold my-4 uppercase">THỜI TRANG NAM NỮ</h2>
      
      {/* Tabs for Gender */}
      <div className="flex mb-6">
        <div className="bg-[#e52629] text-white px-4 py-2 rounded-lg">Đồ đôi</div>
        <div className="px-4 py-2 ml-2">Thời trang Nam</div>
        <div className="px-4 py-2 ml-2">Thời trang Nữ</div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {/* Product 1 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-50%</div>
          
          {/* Product Image */}
          <div className="relative">
            <img 
              src="https://gavani.vn/images/galleries/9e83d94a-1a59-4772-a18b-fa4b6fc626ba/ao_thun_doi__gavani_akh_vitamin_c_1_800x800.jpg" 
              alt="Áo thun đôi" 
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
              <span className="text-xs text-gray-600 ml-1">5 (83 bán)</span>
            </div>
            
            <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo thun đôi kết hợp _ Gavani Akh Vitamin C</h3>
            
            <div className="flex items-center justify-between">
              <div className="text-[#e52629] font-bold">298,000₫</div>
              <div className="text-gray-400 line-through text-xs">598,000₫</div>
            </div>
            
            {/* Color Options */}
            <div className="flex mt-2 gap-1">
              <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-pink-300 border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700 border border-gray-300"></div>
            </div>
          </div>
        </div>
        
        {/* Product 2 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-39%</div>
          
          {/* Product Image */}
          <div className="relative">
            <img 
              src="https://gavani.vn/images/galleries/0fb91c90-16d2-44ab-a86a-1bbaef34ac13/ao_khoac_doi_ao_khoac_du_ao_hoodie_du_1_800x800.jpg" 
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
              <span className="text-xs text-gray-600 ml-1">5 (30 bán)</span>
            </div>
            
            <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo khoác ĐÔI, áo hoodie dù, áo khoác dù hoa Stand-up collar</h3>
            
            <div className="flex items-center justify-between">
              <div className="text-[#e52629] font-bold">598,000₫</div>
              <div className="text-gray-400 line-through text-xs">978,000₫</div>
            </div>
            
            {/* Color Options */}
            <div className="flex mt-2 gap-1">
              <div className="w-5 h-5 rounded-full bg-blue-600 border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-200 border border-gray-300"></div>
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
              src="https://gavani.vn/images/galleries/92f3ccd2-6dcc-4fe2-9f14-be3972dfa6da/ao_thun_doi__gavani_akh_king_to_the_earth_1_800x800.jpg" 
              alt="Áo thun đôi" 
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
              <span className="text-xs text-gray-600 ml-1">5 (47 bán)</span>
            </div>
            
            <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo thun đôi _ Gavani Akh King to the earth</h3>
            
            <div className="flex items-center justify-between">
              <div className="text-[#e52629] font-bold">298,000₫</div>
              <div className="text-gray-400 line-through text-xs">598,000₫</div>
            </div>
            
            {/* Color Options */}
            <div className="flex mt-2 gap-1">
              <div className="w-5 h-5 rounded-full bg-black border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-purple-400 border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-pink-300 border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
            </div>
          </div>
        </div>
        
        {/* Product 4 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-39%</div>
          
          {/* Product Image */}
          <div className="relative">
            <img 
              src="https://gavani.vn/images/galleries/c0ba2d15-8be7-4a28-b3cc-1a10c14b2d85/ao_khoac_doi_ao_khoac_du_ao_hoodie_du_2_800x800.jpg" 
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
              <span className="text-xs text-gray-600 ml-1">5 (40 bán)</span>
            </div>
            
            <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo khoác ĐÔI, áo khoác dù _ Gavani hoa Gentle</h3>
            
            <div className="flex items-center justify-between">
              <div className="text-[#e52629] font-bold">598,000₫</div>
              <div className="text-gray-400 line-through text-xs">978,000₫</div>
            </div>
            
            {/* Color Options */}
            <div className="flex mt-2 gap-1">
              <div className="w-5 h-5 rounded-full bg-black border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-teal-300 border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
            </div>
          </div>
        </div>
        
        {/* Product 5 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden relative group">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center z-10 text-sm font-bold">-57%</div>
          
          {/* Product Image */}
          <div className="relative">
            <img 
              src="https://gavani.vn/images/galleries/d45ef9b6-1a7d-4c54-b4ad-13b7c0eba4bc/ao_polo_doi_danh_cho_couple__gavani_pol_say_hi_1_800x800.jpg" 
              alt="Áo polo đôi" 
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
              <span className="text-xs text-gray-600 ml-1">5 (10 bán)</span>
            </div>
            
            <h3 className="text-xs font-medium mb-1 line-clamp-2">Áo polo đôi dành cho couple _ Gavani Pol Say Hi</h3>
            
            <div className="flex items-center justify-between">
              <div className="text-[#e52629] font-bold">298,000₫</div>
              <div className="text-gray-400 line-through text-xs">698,000₫</div>
            </div>
            
            {/* Color Options */}
            <div className="flex mt-2 gap-1">
              <div className="w-5 h-5 rounded-full bg-gray-200 border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-black border border-gray-300"></div>
              <div className="w-5 h-5 rounded-full bg-gray-700 border border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* View All Button */}
      <div className="flex justify-center mb-12">
        <Link href="/products">
          <Button variant="outline" className="rounded-full border-[#e52629] text-[#e52629] hover:bg-[#e52629] hover:text-white py-1 px-8">
            Xem tất cả
          </Button>
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
