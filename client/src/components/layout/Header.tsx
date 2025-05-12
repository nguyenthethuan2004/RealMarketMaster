import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaHeadset, FaUser, FaShoppingCart } from "react-icons/fa";

export function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isLoggedIn = location.includes("account");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center w-full md:w-auto">
          <Link href="/" className="block">
            <div className="text-3xl font-bold">GAVANI</div>
          </Link>
          
          <form onSubmit={handleSearch} className="relative ml-6 w-full max-w-md">
            <Input
              type="text"
              placeholder="Tìm sản phẩm"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary hover:bg-yellow-400 px-3 py-1 rounded text-black"
            >
              <i className="fas fa-search"></i>
            </Button>
          </form>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0">
          <div className="flex items-center mr-6">
            <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white">
              <FaHeadset size={18} />
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium">Hỗ trợ khách hàng</div>
              <div className="text-primary font-bold">0971 411 122</div>
            </div>
          </div>
          
          <Link href={isLoggedIn ? "/account" : "/login"} className="flex items-center mr-6">
            <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white">
              <FaUser size={18} />
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium">Tài khoản</div>
              <div className="text-gray-700">{isLoggedIn ? "Quản lý" : "Đăng nhập"}</div>
            </div>
          </Link>
          
          <Link href="/cart" className="flex items-center relative">
            <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-gray-800">
              <FaShoppingCart size={18} />
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium">Giỏ hàng</div>
              <div className="text-gray-700">0</div>
            </div>
          </Link>
        </div>
      </div>
      
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="relative group py-3 px-4 cursor-pointer">
              <div className="flex items-center text-white">
                <i className="fas fa-bars mr-2"></i>
                <span className="font-medium">Danh mục sản phẩm</span>
              </div>
              
              <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-b-lg hidden group-hover:block z-10">
                <Link href="/products/ao-nam" className="block px-4 py-2 hover:bg-gray-100">Áo Nam</Link>
                <Link href="/products/quan-nam" className="block px-4 py-2 hover:bg-gray-100">Quần Nam</Link>
                <Link href="/products/ao-nu" className="block px-4 py-2 hover:bg-gray-100">Áo Nữ</Link>
                <Link href="/products/quan-nu" className="block px-4 py-2 hover:bg-gray-100">Quần Nữ</Link>
                <Link href="/products/phu-kien" className="block px-4 py-2 hover:bg-gray-100">Phụ kiện</Link>
              </div>
            </div>
            
            <div className="flex overflow-x-auto whitespace-nowrap py-3 flex-1 text-white">
              <Link href="/policies/warranty" className="inline-flex items-center px-3 py-1 hover:bg-primary/80">
                <i className="far fa-file-alt mr-2"></i>
                <span>Chính sách bảo hành</span>
              </Link>
              <Link href="/store-system" className="inline-flex items-center px-3 py-1 hover:bg-primary/80">
                <i className="fas fa-store mr-2"></i>
                <span>Hệ thống cửa hàng</span>
              </Link>
              <Link href="/user-guide" className="inline-flex items-center px-3 py-1 hover:bg-primary/80">
                <i className="fas fa-question-circle mr-2"></i>
                <span>Hướng dẫn mua hàng</span>
              </Link>
              <Link href="/member-policy" className="inline-flex items-center px-3 py-1 hover:bg-primary/80">
                <i className="fas fa-user-tag mr-2"></i>
                <span>Chính sách thành viên</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
