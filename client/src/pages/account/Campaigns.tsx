import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Campaigns() {
  const { toast } = useToast();

  const handleCreateCampaign = () => {
    toast({
      title: "Thông báo",
      description: "Tính năng tạo chiến dịch mới đang được phát triển",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Chiến dịch tiếp thị</h2>
        <Button 
          className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded"
          onClick={handleCreateCampaign}
        >
          <i className="fas fa-plus mr-2"></i> Tạo chiến dịch mới
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="bg-white border rounded overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex flex-wrap items-center justify-between">
              <h3 className="text-lg font-semibold">Căn hộ cao cấp Q2</h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Đang chạy</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>Loại: Email Marketing</p>
              <p>Ngày bắt đầu: 15/07/2023</p>
              <p>Ngày kết thúc: 15/08/2023</p>
            </div>
            <div className="mt-3 flex items-center">
              <div className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
                <div className="h-2 bg-green-500 rounded-full" style={{width: "65%"}}></div>
              </div>
              <span className="text-sm font-medium">65%</span>
            </div>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            <Button className="px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
              <i className="fas fa-eye mr-1"></i> Xem chi tiết
            </Button>
            <Button className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded hover:bg-yellow-100">
              <i className="fas fa-edit mr-1"></i> Chỉnh sửa
            </Button>
            <Button className="px-3 py-1 bg-red-50 text-red-700 rounded hover:bg-red-100">
              <i className="fas fa-stop-circle mr-1"></i> Dừng chiến dịch
            </Button>
            <Button className="px-3 py-1 bg-purple-50 text-purple-700 rounded hover:bg-purple-100">
              <i className="fas fa-chart-bar mr-1"></i> Báo cáo
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="bg-white border rounded overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex flex-wrap items-center justify-between">
              <h3 className="text-lg font-semibold">Nhà phố Q9</h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Hoàn thành</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>Loại: Facebook Ads</p>
              <p>Ngày bắt đầu: 01/06/2023</p>
              <p>Ngày kết thúc: 30/06/2023</p>
            </div>
            <div className="mt-3 flex items-center">
              <div className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
                <div className="h-2 bg-blue-500 rounded-full" style={{width: "100%"}}></div>
              </div>
              <span className="text-sm font-medium">100%</span>
            </div>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            <Button className="px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
              <i className="fas fa-eye mr-1"></i> Xem chi tiết
            </Button>
            <Button className="px-3 py-1 bg-green-50 text-green-700 rounded hover:bg-green-100">
              <i className="fas fa-copy mr-1"></i> Sao chép
            </Button>
            <Button className="px-3 py-1 bg-purple-50 text-purple-700 rounded hover:bg-purple-100">
              <i className="fas fa-chart-bar mr-1"></i> Báo cáo
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="bg-white border rounded overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex flex-wrap items-center justify-between">
              <h3 className="text-lg font-semibold">Biệt thự nghỉ dưỡng Vũng Tàu</h3>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Đang chuẩn bị</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>Loại: Google Ads</p>
              <p>Ngày bắt đầu: 01/08/2023</p>
              <p>Ngày kết thúc: 31/08/2023</p>
            </div>
            <div className="mt-3 flex items-center">
              <div className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
                <div className="h-2 bg-yellow-500 rounded-full" style={{width: "40%"}}></div>
              </div>
              <span className="text-sm font-medium">40%</span>
            </div>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            <Button className="px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100">
              <i className="fas fa-eye mr-1"></i> Xem chi tiết
            </Button>
            <Button className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded hover:bg-yellow-100">
              <i className="fas fa-edit mr-1"></i> Chỉnh sửa
            </Button>
            <Button className="px-3 py-1 bg-green-50 text-green-700 rounded hover:bg-green-100">
              <i className="fas fa-play-circle mr-1"></i> Bắt đầu chiến dịch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
