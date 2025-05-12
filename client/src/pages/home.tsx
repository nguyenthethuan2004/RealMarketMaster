import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">Công cụ tiếp thị cho môi giới bất động sản</h1>
        <p className="text-lg mb-6">
          Gavani cung cấp các giải pháp tiếp thị toàn diện giúp môi giới bất động sản tăng hiệu quả, tiếp cận nhiều khách hàng tiềm năng và tối ưu chi phí quảng cáo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <i className="fas fa-bullhorn text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Chiến dịch tiếp thị</h3>
            <p className="text-gray-600 mb-4">Tạo và quản lý chiến dịch quảng cáo trên nhiều nền tảng với giao diện đơn giản, dễ sử dụng.</p>
            <Link href="/products/online-marketing">
              <Button className="bg-blue-600 hover:bg-blue-700">Tìm hiểu thêm</Button>
            </Link>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <i className="fas fa-users text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Quản lý khách hàng</h3>
            <p className="text-gray-600 mb-4">Lưu trữ và theo dõi thông tin khách hàng tiềm năng, lịch sử tương tác và cơ hội bán hàng.</p>
            <Link href="/products/crm">
              <Button className="bg-green-600 hover:bg-green-700">Tìm hiểu thêm</Button>
            </Link>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
              <i className="fas fa-chart-line text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Phân tích dữ liệu</h3>
            <p className="text-gray-600 mb-4">Theo dõi hiệu suất chiến dịch, phân tích chi tiết ROI và tối ưu hóa ngân sách quảng cáo.</p>
            <Link href="/products/analytics">
              <Button className="bg-purple-600 hover:bg-purple-700">Tìm hiểu thêm</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" alt="Facebook Ads Pro" className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold mb-2">Facebook Ads Pro</h3>
              <p className="text-sm text-gray-600 mb-3">Chiến dịch quảng cáo Facebook chuyên nghiệp</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">3,500,000 VNĐ</span>
                <span className="text-sm text-gray-500">/ 30 ngày</span>
              </div>
              
              <Button className="w-full py-2 bg-secondary hover:bg-yellow-400 text-black font-medium rounded">
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" alt="Email Marketing Pro" className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold mb-2">Email Marketing Pro</h3>
              <p className="text-sm text-gray-600 mb-3">Gói 10,000 emails với mẫu thiết kế chuyên nghiệp</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">2,200,000 VNĐ</span>
                <span className="text-sm text-gray-500">/ 10,000 emails</span>
              </div>
              
              <Button className="w-full py-2 bg-secondary hover:bg-yellow-400 text-black font-medium rounded">
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" alt="Google Ads Premium" className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold mb-2">Google Ads Premium</h3>
              <p className="text-sm text-gray-600 mb-3">Quảng cáo Google tìm kiếm và hiển thị cho BĐS</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">4,500,000 VNĐ</span>
                <span className="text-sm text-gray-500">/ 30 ngày</span>
              </div>
              
              <Button className="w-full py-2 bg-secondary hover:bg-yellow-400 text-black font-medium rounded">
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" alt="Social Media Management" className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold mb-2">Quản lý MXH</h3>
              <p className="text-sm text-gray-600 mb-3">Quản lý và phát triển các kênh mạng xã hội BĐS</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">2,500,000 VNĐ</span>
                <span className="text-sm text-gray-500">/ tháng</span>
              </div>
              
              <Button className="w-full py-2 bg-secondary hover:bg-yellow-400 text-black font-medium rounded">
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <Link href="/products">
            <Button className="bg-primary hover:bg-red-700 px-6 py-3">
              Xem tất cả sản phẩm
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Tại sao chọn Gavani?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
              <i className="fas fa-check-circle text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Hiệu quả cao</h3>
              <p className="text-gray-600">Các chiến dịch được tối ưu hóa để mang lại hiệu suất cao nhất cho ngân sách quảng cáo của bạn.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
              <i className="fas fa-tools text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Dễ sử dụng</h3>
              <p className="text-gray-600">Giao diện thân thiện, không cần kiến thức chuyên sâu về kỹ thuật hay marketing.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
              <i className="fas fa-headset text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Hỗ trợ 24/7</h3>
              <p className="text-gray-600">Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn trong quá trình triển khai chiến dịch.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
