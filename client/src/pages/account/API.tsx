import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FaCopy } from "react-icons/fa";

export default function API() {
  const { toast } = useToast();

  const handleCreateApiKey = () => {
    toast({
      title: "Thông báo",
      description: "Tính năng tạo API Key mới đang được phát triển",
    });
  };

  const handleCopyApiKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({
      title: "Đã sao chép",
      description: "API Key đã được sao chép vào clipboard",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">API & Tích hợp</h2>
        <Button 
          className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded"
          onClick={handleCreateApiKey}
        >
          <i className="fas fa-key mr-2"></i> Tạo API Key mới
        </Button>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
        <div className="flex">
          <div className="text-yellow-600 mr-3">
            <i className="fas fa-exclamation-triangle text-xl"></i>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-800">Lưu ý về bảo mật</h4>
            <p className="text-yellow-700 text-sm">API keys cung cấp quyền truy cập vào dữ liệu của bạn. Không chia sẻ keys với bất kỳ ai và giữ chúng an toàn.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border rounded mb-6">
        <div className="p-4 border-b">
          <h3 className="font-semibold">API Keys của bạn</h3>
        </div>
        <div className="p-4">
          <div className="border-b pb-4 mb-4">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">Website Integration</h4>
                <p className="text-sm text-gray-500">Tạo ngày: 10/06/2023 - Hết hạn: 10/06/2024</p>
              </div>
              <div className="flex space-x-2">
                <Button className="px-3 py-1 bg-red-50 text-red-700 rounded hover:bg-red-100 text-sm">Thu hồi</Button>
                <Button className="px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 text-sm">Làm mới</Button>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded flex items-center">
              <code className="text-sm flex-1 text-gray-600">gavani_api_3f7bc936a4d29e82c5d3aef5f8482bc7</code>
              <Button 
                className="ml-2 text-blue-600 hover:text-blue-800" 
                variant="ghost"
                onClick={() => handleCopyApiKey("gavani_api_3f7bc936a4d29e82c5d3aef5f8482bc7")}
                title="Sao chép"
              >
                <FaCopy />
              </Button>
            </div>
          </div>
          
          <div>
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">CRM Integration</h4>
                <p className="text-sm text-gray-500">Tạo ngày: 25/05/2023 - Hết hạn: 25/05/2024</p>
              </div>
              <div className="flex space-x-2">
                <Button className="px-3 py-1 bg-red-50 text-red-700 rounded hover:bg-red-100 text-sm">Thu hồi</Button>
                <Button className="px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 text-sm">Làm mới</Button>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded flex items-center">
              <code className="text-sm flex-1 text-gray-600">gavani_api_5e92f4d81c062a859b4a0e9c7b7f98a3</code>
              <Button 
                className="ml-2 text-blue-600 hover:text-blue-800" 
                variant="ghost"
                onClick={() => handleCopyApiKey("gavani_api_5e92f4d81c062a859b4a0e9c7b7f98a3")}
                title="Sao chép"
              >
                <FaCopy />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-4">Tài liệu API</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border rounded p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                <i className="fas fa-book"></i>
              </div>
              <h4 className="font-medium">Tài liệu tham khảo</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Tài liệu chi tiết về các endpoints, tham số và ví dụ.</p>
            <Button variant="link" className="text-blue-600 hover:underline text-sm p-0">Xem tài liệu</Button>
          </div>
          
          <div className="bg-white border rounded p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                <i className="fas fa-code"></i>
              </div>
              <h4 className="font-medium">Ví dụ mã nguồn</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Các ví dụ mã nguồn để giúp bạn bắt đầu với API.</p>
            <Button variant="link" className="text-blue-600 hover:underline text-sm p-0">Xem ví dụ</Button>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Tích hợp có sẵn</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border rounded p-4">
            <div className="h-16 flex items-center justify-center bg-blue-50 rounded mb-3">
              <span className="text-blue-600 text-lg font-bold">Salesforce</span>
            </div>
            <h4 className="font-medium mb-2">Salesforce</h4>
            <p className="text-sm text-gray-600 mb-3">Đồng bộ khách hàng tiềm năng với Salesforce CRM.</p>
            <Button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Kết nối</Button>
          </div>
          
          <div className="bg-white border rounded p-4">
            <div className="h-16 flex items-center justify-center bg-red-50 rounded mb-3">
              <span className="text-red-600 text-lg font-bold">Mailchimp</span>
            </div>
            <h4 className="font-medium mb-2">Mailchimp</h4>
            <p className="text-sm text-gray-600 mb-3">Quản lý email marketing và chiến dịch tự động.</p>
            <Button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Kết nối</Button>
          </div>
          
          <div className="bg-white border rounded p-4">
            <div className="h-16 flex items-center justify-center bg-green-50 rounded mb-3">
              <span className="text-green-600 text-lg font-bold">Zapier</span>
            </div>
            <h4 className="font-medium mb-2">Zapier</h4>
            <p className="text-sm text-gray-600 mb-3">Kết nối với hơn 3,000 ứng dụng và dịch vụ khác.</p>
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mb-2 inline-block">Đã kết nối</div>
            <Button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">Quản lý kết nối</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
