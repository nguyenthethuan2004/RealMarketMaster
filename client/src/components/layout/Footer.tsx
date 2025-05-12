import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Về Gavani</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white">Giới thiệu</Link></li>
              <li><Link href="/careers" className="hover:text-white">Tuyển dụng</Link></li>
              <li><Link href="/news" className="hover:text-white">Tin tức</Link></li>
              <li><Link href="/contact" className="hover:text-white">Liên hệ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/help" className="hover:text-white">Trung tâm trợ giúp</Link></li>
              <li><Link href="/buying-guide" className="hover:text-white">Hướng dẫn mua hàng</Link></li>
              <li><Link href="/payment-methods" className="hover:text-white">Phương thức thanh toán</Link></li>
              <li><Link href="/return-policy" className="hover:text-white">Chính sách đổi trả</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Danh mục sản phẩm</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/products/ao-nam" className="hover:text-white">Áo Nam</Link></li>
              <li><Link href="/products/quan-nam" className="hover:text-white">Quần Nam</Link></li>
              <li><Link href="/products/ao-nu" className="hover:text-white">Áo Nữ</Link></li>
              <li><Link href="/products/quan-nu" className="hover:text-white">Quần Nữ</Link></li>
              <li><Link href="/products/phu-kien" className="hover:text-white">Phụ kiện</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">
                <FaTwitter />
              </a>
            </div>
            
            <h3 className="text-lg font-bold mb-2">Đăng ký nhận tin</h3>
            <form onSubmit={handleSubscribe} className="flex">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="px-4 py-2 flex-1 rounded-l focus:outline-none text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-primary hover:bg-red-700 px-4 py-2 rounded-r">
                Đăng ký
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Gavani. Tất cả các quyền được bảo lưu.</p>
          <div className="mt-2 space-x-4">
            <Link href="/terms" className="hover:text-white">Điều khoản sử dụng</Link>
            <Link href="/privacy" className="hover:text-white">Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
