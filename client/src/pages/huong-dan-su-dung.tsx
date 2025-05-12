import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function HuongDanSuDung() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-[#e52629]">HƯỚNG DẪN SỬ DỤNG</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="ao-khoac" className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
                <TabsTrigger value="ao-khoac" className="data-[state=active]:bg-[#e52629] data-[state=active]:text-white">
                  Áo khoác GAVANI
                </TabsTrigger>
                <TabsTrigger value="ao-thun" className="data-[state=active]:bg-[#e52629] data-[state=active]:text-white">
                  Áo thun GAVANI
                </TabsTrigger>
                <TabsTrigger value="ao-polo" className="data-[state=active]:bg-[#e52629] data-[state=active]:text-white">
                  Áo polo GAVANI
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ao-khoac" className="space-y-6 animate-in fade-in-50 duration-300">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#e52629]">Hướng dẫn sử dụng áo khoác GAVANI</h2>
                  <img 
                    src="https://gavani.vn/images/galleries/new_jacket_collection.jpg" 
                    alt="Áo khoác GAVANI" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="space-y-4 mt-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">1. Hướng dẫn giặt và bảo quản</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Giặt tay nhẹ nhàng với nước lạnh hoặc nước ấm dưới 30 độ C.</li>
                        <li>Không sử dụng chất tẩy mạnh, chỉ dùng nước giặt nhẹ dành cho quần áo.</li>
                        <li>Không vắt mạnh, nên vắt nhẹ để tránh biến dạng áo.</li>
                        <li>Phơi trong bóng râm, tránh ánh nắng trực tiếp gây phai màu.</li>
                        <li>Không sử dụng máy sấy, để áo khô tự nhiên.</li>
                        <li>Là ủi với nhiệt độ thấp, không quá 110 độ C.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">2. Đặc tính sản phẩm</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Chất liệu: Polyester cao cấp, chống thấm nước, chống bụi bẩn.</li>
                        <li>Chống UV: Bảo vệ làn da khỏi tác hại của tia UVA và UVB.</li>
                        <li>Khả năng cản gió tốt, phù hợp cho thời tiết se lạnh.</li>
                        <li>Thiết kế hiện đại, form dáng gọn gàng phù hợp cho nhiều vóc dáng.</li>
                        <li>Túi áo có khóa kéo an toàn, bảo vệ vật dụng cá nhân.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">3. Lưu ý khi sử dụng</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Tránh tiếp xúc với các vật sắc nhọn có thể làm rách áo.</li>
                        <li>Không ngâm áo quá lâu trong nước để tránh hư hỏng các chi tiết áo.</li>
                        <li>Khi gặp vết bẩn cứng đầu, chỉ làm sạch cục bộ tại vị trí bẩn.</li>
                        <li>Bảo quản trong tủ quần áo nơi khô ráo, thoáng mát.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ao-thun" className="space-y-6 animate-in fade-in-50 duration-300">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#e52629]">Hướng dẫn sử dụng áo thun GAVANI</h2>
                  <img 
                    src="https://gavani.vn/images/cms/ao-thun-cotton-may-min.jpg" 
                    alt="Áo thun GAVANI" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="space-y-4 mt-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">1. Hướng dẫn giặt và bảo quản</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Lộn trái áo khi giặt để bảo vệ màu sắc và hình in.</li>
                        <li>Giặt tay nhẹ nhàng hoặc máy giặt với chế độ nhẹ.</li>
                        <li>Sử dụng nước giặt dành cho vải cotton, không dùng nước tẩy.</li>
                        <li>Phơi trong bóng râm, tránh ánh nắng trực tiếp gây phai màu.</li>
                        <li>Là ủi ở nhiệt độ thấp hoặc trung bình, lộn trái áo khi ủi qua hình in.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">2. Đặc tính sản phẩm</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Chất liệu: 100% cotton cao cấp, thấm hút mồ hôi tốt.</li>
                        <li>Co giãn 4 chiều, thoải mái khi vận động.</li>
                        <li>Công nghệ in/thêu bền màu, không bong tróc.</li>
                        <li>Form dáng hiện đại, phù hợp với nhiều vóc dáng.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">3. Lưu ý khi sử dụng</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Không giặt chung với quần áo màu sậm khi áo màu sáng.</li>
                        <li>Tránh ngâm áo quá lâu trong nước giặt.</li>
                        <li>Không vắt mạnh, chỉ vắt nhẹ để tránh biến dạng áo.</li>
                        <li>Áo thun mới nên giặt riêng trong 2-3 lần giặt đầu tiên.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ao-polo" className="space-y-6 animate-in fade-in-50 duration-300">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#e52629]">Hướng dẫn sử dụng áo polo GAVANI</h2>
                  <img 
                    src="https://gavani.vn/images/cms/polo-thun-ca-sau-may-min.jpg" 
                    alt="Áo polo GAVANI" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="space-y-4 mt-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">1. Hướng dẫn giặt và bảo quản</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Lộn trái áo khi giặt để bảo vệ màu sắc và hình thêu.</li>
                        <li>Giặt tay nhẹ nhàng hoặc máy giặt với chế độ nhẹ.</li>
                        <li>Sử dụng nước giặt dành cho vải cao cấp, không dùng nước tẩy.</li>
                        <li>Phơi trong bóng râm, tránh ánh nắng trực tiếp.</li>
                        <li>Là ủi ở nhiệt độ thấp hoặc trung bình, chú ý khi ủi qua logo thêu.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">2. Đặc tính sản phẩm</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Chất liệu: Cotton cá sấu cao cấp, thoáng mát.</li>
                        <li>Thấm hút mồ hôi tốt, thoải mái khi mặc trong thời gian dài.</li>
                        <li>Logo thêu tinh tế, chỉn chu từng đường kim mũi chỉ.</li>
                        <li>Cổ và tay áo được dệt riêng, bền đẹp không bị giãn.</li>
                        <li>Form dáng vừa vặn, lịch sự phù hợp cho nhiều hoàn cảnh.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">3. Lưu ý khi sử dụng</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Cài kín nút khi treo áo để cổ áo không bị biến dạng.</li>
                        <li>Không giặt với nước quá nóng làm co rút vải.</li>
                        <li>Phơi áo bằng cách treo lên móc, tránh phơi ngang làm áo giãn.</li>
                        <li>Khi ủi, chú ý không ủi trực tiếp lên logo hoặc hình thêu.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <Separator className="my-8" />
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Video hướng dẫn bảo quản sản phẩm GAVANI</h2>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-gray-500">Video hướng dẫn đang được cập nhật</p>
                  <p className="text-sm text-gray-400 mt-2">Vui lòng quay lại sau</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-center">Nếu bạn cần hỗ trợ thêm về việc sử dụng và bảo quản sản phẩm, vui lòng liên hệ hotline <span className="text-[#e52629] font-bold">0971 411 122</span> để được tư vấn.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}