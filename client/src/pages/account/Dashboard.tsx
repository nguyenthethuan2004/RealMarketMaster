import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tổng quan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600">Chiến dịch đang chạy</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <i className="fas fa-bullhorn"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600">Khách hàng tiềm năng</p>
              <p className="text-2xl font-bold">247</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600">Lượt truy cập</p>
              <p className="text-2xl font-bold">1,563</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Hoạt động gần đây</h3>
        <div className="bg-gray-50 rounded border">
          <div className="p-3 border-b">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="font-medium">Chiến dịch email "Nhà phố Q9" đã hoàn thành</p>
                <p className="text-sm text-gray-500">2 giờ trước</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-b">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                <i className="fas fa-user-plus"></i>
              </div>
              <div>
                <p className="font-medium">5 khách hàng mới từ form liên hệ</p>
                <p className="text-sm text-gray-500">Hôm qua</p>
              </div>
            </div>
          </div>
          
          <div className="p-3">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3">
                <i className="fas fa-chart-pie"></i>
              </div>
              <div>
                <p className="font-medium">Báo cáo hiệu suất tháng 7 đã sẵn sàng</p>
                <p className="text-sm text-gray-500">3 ngày trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Chiến dịch tiếp thị gần đây</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 border-b">Tên chiến dịch</th>
                <th className="p-3 border-b">Loại</th>
                <th className="p-3 border-b">Trạng thái</th>
                <th className="p-3 border-b">Kết quả</th>
                <th className="p-3 border-b">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b">Căn hộ cao cấp Q2</td>
                <td className="p-3 border-b">Email</td>
                <td className="p-3 border-b">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Đang chạy</span>
                </td>
                <td className="p-3 border-b">32 leads</td>
                <td className="p-3 border-b">
                  <Button variant="link" className="text-blue-600 hover:underline text-sm p-0">
                    Xem chi tiết
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b">Nhà phố Q9</td>
                <td className="p-3 border-b">Facebook Ads</td>
                <td className="p-3 border-b">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Hoàn thành</span>
                </td>
                <td className="p-3 border-b">156 leads</td>
                <td className="p-3 border-b">
                  <Button variant="link" className="text-blue-600 hover:underline text-sm p-0">
                    Xem chi tiết
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b">Biệt thự nghỉ dưỡng Vũng Tàu</td>
                <td className="p-3 border-b">Google Ads</td>
                <td className="p-3 border-b">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Đang chuẩn bị</span>
                </td>
                <td className="p-3 border-b">-</td>
                <td className="p-3 border-b">
                  <Button variant="link" className="text-blue-600 hover:underline text-sm p-0">
                    Xem chi tiết
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
