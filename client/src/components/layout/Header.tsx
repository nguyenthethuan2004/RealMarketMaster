import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import { FiPhoneCall, FiUser, FiShoppingCart } from "react-icons/fi";
import { BiCircle } from "react-icons/bi";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const isLoggedIn = location.includes("account");

  // Xử lý sticky header khi scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // TODO: Implement search functionality
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const productCategories = [
    { id: "ao-khoac-nu", name: "ÁO KHOÁC NỮ" },
    { id: "ao-khoac-nam", name: "ÁO KHOÁC NAM" },
    { id: "ao-khoac-doi", name: "ÁO KHOÁC ĐÔI" },
    { id: "ao-thun-nu", name: "ÁO THUN NỮ" },
    { id: "ao-thun-nam", name: "ÁO THUN NAM" },
    { id: "ao-thun-doi", name: "ÁO THUN ĐÔI" },
    { id: "ao-thun-polo-nu", name: "ÁO THUN POLO NỮ" },
    { id: "ao-polo-nam", name: "ÁO POLO NAM" },
    { id: "ao-polo-doi", name: "ÁO POLO ĐÔI" },
  ];

  const headerLinks = [
    { id: "chinh-sach-bao-hanh", name: "Chính sách bảo hành", icon: "🔒" },
    { id: "he-thong-cua-hang", name: "Hệ thống cửa hàng", icon: "🏬" },
    { id: "huong-dan-su-dung", name: "Hướng dẫn sử dụng", icon: "📋" },
    { id: "chinh-sach-thanh-vien", name: "Chính sách thành viên", icon: "👤" },
  ];

  return (
    <header className={`bg-white w-full z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 shadow-md header-sticky' : ''}`}>
      {/* Top header */}
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center w-full md:w-auto">
          <button 
            className="md:hidden mr-4 text-gray-700"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <HiOutlineMenu size={24} />
          </button>
          
          <Link href="/" className="block transform hover:scale-105 transition-transform">
            <div className="flex items-center">
              <span className="font-bold text-2xl text-black">
                <span>G</span>
                <span className="text-[#e52629]">A</span>
                <span>V</span>
                <span className="text-[#e52629]">A</span>
                <span>NI</span>
              </span>
            </div>
          </Link>
          
          <form onSubmit={handleSearch} className="relative ml-6 w-full max-w-md">
            <Input
              type="text"
              placeholder="Tìm theo tên"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e52629] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit"
              className="absolute right-0 top-0 h-full bg-yellow-400 hover:bg-yellow-500 px-3 rounded-r-lg text-black transition-colors"
            >
              <HiOutlineSearch size={20} />
            </Button>
          </form>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0 gap-6">
          <a href="tel:0971411122" className="flex items-center group">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f6f6f6] rounded-full text-[#e52629] group-hover:bg-[#ffe8e8] transition-colors">
              <FiPhoneCall className="text-[#e52629]" size={20} />
            </div>
            <div className="ml-2">
              <div className="text-xs text-gray-600">Hỗ trợ khách hàng</div>
              <div className="text-[#e52629] font-bold text-sm">0971 411 122</div>
            </div>
          </a>
          
          <Link href={isLoggedIn ? "/account" : "/login"} className="flex items-center group">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f6f6f6] rounded-full group-hover:bg-[#ffe8e8] transition-colors">
              <FiUser className="text-[#e52629]" size={20} />
            </div>
            <div className="ml-2">
              <div className="text-xs text-gray-600">Tài khoản</div>
              <div className="text-sm">Đăng nhập</div>
            </div>
          </Link>
          
          <Link href="/cart" className="flex items-center relative group">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f6f6f6] rounded-full group-hover:bg-[#ffe8e8] transition-colors">
              <FiShoppingCart className="text-[#e52629]" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#e52629] text-white rounded-full flex items-center justify-center text-xs font-bold">0</span>
            </div>
            <div className="ml-2">
              <div className="text-xs text-gray-600">Giỏ hàng</div>
              <div className="text-sm font-medium">0đ</div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-[#e52629] border-b border-[#e52629]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="relative group">
              <button 
                className="flex items-center text-white py-3 px-4 cursor-pointer hover:bg-[#c81f22] transition-colors"
                onMouseEnter={() => setHoveredCategory("main")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <HiOutlineMenu className="mr-2" size={20} />
                <span className="font-medium text-sm">Danh mục sản phẩm</span>
              </button>
              
              <div 
                className={`absolute left-0 top-full w-64 bg-white shadow-lg z-30 ${hoveredCategory === "main" ? "block" : "hidden"}`}
                onMouseEnter={() => setHoveredCategory("main")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {productCategories.map((category) => (
                  <Link 
                    key={category.id}
                    href={`/products/${category.id}`} 
                    className="block px-4 py-2 hover:bg-gray-100 text-sm border-b hover:text-[#e52629] transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="hidden md:flex overflow-x-auto whitespace-nowrap py-3 flex-1 text-white justify-between">
              {headerLinks.map((link) => (
                <Link 
                  key={link.id}
                  href={`/${link.id}`} 
                  className="inline-flex items-center px-3 py-1 hover:bg-[#c81f22] transition-colors"
                >
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden bg-white shadow-lg absolute w-full z-40 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">
          <div className="font-bold text-lg mb-2 text-[#e52629]">Danh mục sản phẩm</div>
          {productCategories.map((category, index) => (
            <Link 
              key={category.id}
              href={`/products/${category.id}`} 
              className="flex items-center py-2 border-b hover:text-[#e52629] transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <BiCircle className="mr-2 text-[#e52629]" size={8} />
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Slider nav controls - floating on sides */}
      <div className="hidden md:block">
        <button 
          className="fixed left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-[#e52629] shadow-md hover:bg-white transition-colors z-40"
          aria-label="Previous"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <button 
          className="fixed right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-[#e52629] shadow-md hover:bg-white transition-colors z-40"
          aria-label="Next"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </header>
  );
}
