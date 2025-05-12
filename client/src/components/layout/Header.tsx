import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import { FiPhoneCall, FiUser, FiShoppingCart } from "react-icons/fi";

export function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = location.includes("account");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center w-full md:w-auto">
          <button 
            className="md:hidden mr-4 text-gray-700"
            onClick={toggleMenu}
          >
            <HiOutlineMenu size={24} />
          </button>
          
          <Link href="/" className="block">
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
              placeholder="Tìm theo tên sản phẩm"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit"
              className="absolute right-0 top-0 h-full bg-yellow-400 hover:bg-yellow-500 px-3 rounded-r-lg text-black"
            >
              <HiOutlineSearch size={20} />
            </Button>
          </form>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0 gap-6">
          <a href="tel:0971411122" className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f6f6f6] rounded-full text-[#e52629]">
              <FiPhoneCall className="text-[#e52629]" size={20} />
            </div>
            <div className="ml-2">
              <div className="text-xs text-gray-600">Hỗ trợ khách hàng</div>
              <div className="text-[#e52629] font-bold text-sm">0971 411 122</div>
            </div>
          </a>
          
          <Link href={isLoggedIn ? "/account" : "/login"} className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f6f6f6] rounded-full">
              <FiUser className="text-[#e52629]" size={20} />
            </div>
            <div className="ml-2">
              <div className="text-xs text-gray-600">Tài khoản</div>
              <div className="text-sm">{isLoggedIn ? "Đăng nhập" : "Đăng nhập"}</div>
            </div>
          </Link>
          
          <Link href="/cart" className="flex items-center relative">
            <div className="w-10 h-10 flex items-center justify-center bg-[#f6f6f6] rounded-full">
              <FiShoppingCart className="text-[#e52629]" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#e52629] text-white rounded-full flex items-center justify-center text-xs font-bold">0</span>
            </div>
            <div className="ml-2">
              <div className="text-xs text-gray-600">Giỏ hàng</div>
              <div className="text-sm">0</div>
            </div>
          </Link>
        </div>
      </div>
      
      <div className="bg-[#e52629] border-b border-[#e52629]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="relative group">
              <button className="flex items-center text-white py-3 px-4 cursor-pointer hover:bg-[#c81f22] transition-colors">
                <HiOutlineMenu className="mr-2" size={20} />
                <span className="font-medium text-sm">Danh mục sản phẩm</span>
              </button>
              
              <div className="absolute left-0 top-full w-64 bg-white shadow-lg z-30 hidden group-hover:block">
                <Link href="/products/ao-khoac-nu" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO KHOÁC NỮ</Link>
                <Link href="/products/ao-khoac-nam" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO KHOÁC NAM</Link>
                <Link href="/products/ao-khoac-doi" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO KHOÁC ĐÔI</Link>
                <Link href="/products/ao-thun-nu" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO THUN NỮ</Link>
                <Link href="/products/ao-thun-nam" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO THUN NAM</Link>
                <Link href="/products/ao-thun-doi" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO THUN ĐÔI</Link>
                <Link href="/products/ao-thun-polo-nu" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO THUN POLO NỮ</Link>
                <Link href="/products/ao-polo-nam" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO POLO NAM</Link>
                <Link href="/products/ao-polo-doi" className="block px-4 py-2 hover:bg-gray-100 text-sm border-b">ÁO POLO ĐÔI</Link>
              </div>
            </div>
            
            <div className="hidden md:flex overflow-x-auto whitespace-nowrap py-3 flex-1 text-white">
              <Link href="/chinh-sach-bao-hanh" className="inline-flex items-center px-3 py-1 hover:bg-[#c81f22] transition-colors">
                <span className="text-sm">Chính sách bảo hành</span>
              </Link>
              <Link href="/he-thong-cua-hang" className="inline-flex items-center px-3 py-1 hover:bg-[#c81f22] transition-colors">
                <span className="text-sm">Hệ thống cửa hàng</span>
              </Link>
              <Link href="/huong-dan-su-dung" className="inline-flex items-center px-3 py-1 hover:bg-[#c81f22] transition-colors">
                <span className="text-sm">Hướng dẫn sử dụng</span>
              </Link>
              <Link href="/chinh-sach-thanh-vien" className="inline-flex items-center px-3 py-1 hover:bg-[#c81f22] transition-colors">
                <span className="text-sm">Chính sách thành viên</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
          <div className="p-4">
            <div className="font-bold text-lg mb-2">Danh mục sản phẩm</div>
            <Link href="/products/ao-khoac-nu" className="block py-2 border-b">ÁO KHOÁC NỮ</Link>
            <Link href="/products/ao-khoac-nam" className="block py-2 border-b">ÁO KHOÁC NAM</Link>
            <Link href="/products/ao-khoac-doi" className="block py-2 border-b">ÁO KHOÁC ĐÔI</Link>
            <Link href="/products/ao-thun-nu" className="block py-2 border-b">ÁO THUN NỮ</Link>
            <Link href="/products/ao-thun-nam" className="block py-2 border-b">ÁO THUN NAM</Link>
            <Link href="/products/ao-thun-doi" className="block py-2 border-b">ÁO THUN ĐÔI</Link>
            <Link href="/products/ao-thun-polo-nu" className="block py-2 border-b">ÁO THUN POLO NỮ</Link>
            <Link href="/products/ao-polo-nam" className="block py-2 border-b">ÁO POLO NAM</Link>
            <Link href="/products/ao-polo-doi" className="block py-2">ÁO POLO ĐÔI</Link>
          </div>
        </div>
      )}
    </header>
  );
}
