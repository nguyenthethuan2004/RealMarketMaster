import { Button } from "@/components/ui/button";
import { FaDownload, FaEye, FaSyncAlt } from "react-icons/fa";

export default function Orders() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Đơn hàng của tôi</h2>
      
      <div className="bg-white rounded shadow overflow-hidden mb-6">
        <div className="p-4 bg-gray-50 border-b flex flex-wrap justify-between items-center">
          <div>
            <span className="font-medium">Đơn hàng #GV-2023-0159</span>
            <span className="text-sm text-gray-500 ml-3">Ngày đặt: 28/07/2023</span>
          </div>
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Hoàn thành</span>
        </div>
        
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-16 h-16 border rounded flex items-center justify-center bg-gray-50 mr-3">
                  <i className="fas fa-bullhorn text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="font-medium">Chiến dịch Facebook Ads Cao cấp</h3>
                  <p className="text-sm text-gray-500">Gói: 30 ngày</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 flex flex-col text-sm mb-4 md:mb-0">
              <span className="text-gray-500">Số lượng:</span>
              <span className="font-medium">1</span>
            </div>
            <div className="md:w-1/4 flex flex-col text-sm mb-4 md:mb-0">
              <span className="text-gray-500">Trạng thái:</span>
              <span className="font-medium">Đã kích hoạt</span>
            </div>
            <div className="md:w-1/4 flex flex-col text-sm">
              <span className="text-gray-500">Thành tiền:</span>
              <span className="font-medium">3,500,000 VNĐ</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex flex-wrap gap-3">
          <Button className="px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 text-sm">
            <FaEye className="mr-1" /> Xem chi tiết
          </Button>
          <Button className="px-3 py-1 bg-green-50 text-green-700 rounded hover:bg-green-100 text-sm">
            <FaDownload className="mr-1" /> Tải hóa đơn
          </Button>
          <Button className="px-3 py-1 bg-purple-50 text-purple-700 rounded hover:bg-purple-100 text-sm">
            <FaSyncAlt className="mr-1" /> Gia hạn
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded shadow overflow-hidden mb-6">
        <div className="p-4 bg-gray-50 border-b flex flex-wrap justify-between items-center">
          <div>
            <span className="font-medium">Đơn hàng #GV-2023-0142</span>
            <span className="text-sm text-gray-500 ml-3">Ngày đặt: 16/06/2023</span>
          </div>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Hoàn thành</span>
        </div>
        
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-16 h-16 border rounded flex items-center justify-center bg-gray-50 mr-3">
                  <i className="fas fa-envelope text-xl text-primary"></i>
                </div>
                <div>
                  <h3 className="font-medium">Email Marketing Pro</h3>
                  <p className="text-sm text-gray-500">Gói: 10,000 emails</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 flex flex-col text-sm mb-4 md:mb-0">
              <span className="text-gray-500">Số lượng:</span>
              <span className="font-medium">1</span>
            </div>
            <div className="md:w-1/4 flex flex-col text-sm mb-4 md:mb-0">
              <span className="text-gray-500">Trạng thái:</span>
              <span className="font-medium">Đã sử dụng: 8,763 emails</span>
            </div>
            <div className="md:w-1/4 flex flex-col text-sm">
              <span className="text-gray-500">Thành tiền:</span>
              <span className="font-medium">2,200,000 VNĐ</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex flex-wrap gap-3">
          <Button className="px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 text-sm">
            <FaEye className="mr-1" /> Xem chi tiết
          </Button>
          <Button className="px-3 py-1 bg-green-50 text-green-700 rounded hover:bg-green-100 text-sm">
            <FaDownload className="mr-1" /> Tải hóa đơn
          </Button>
          <Button className="px-3 py-1 bg-purple-50 text-purple-700 rounded hover:bg-purple-100 text-sm">
            <FaSyncAlt className="mr-1" /> Gia hạn
          </Button>
        </div>
      </div>
    </div>
  );
}
