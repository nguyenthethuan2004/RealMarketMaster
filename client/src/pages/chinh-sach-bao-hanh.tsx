import Layout from "@/components/layout/Layout";

export default function ChinhSachBaoHanh() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-[#e52629]">CHÍNH SÁCH BẢO HÀNH</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">QUY ĐỊNH VỀ BẢO HÀNH SẢN PHẨM GAVANI</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">1. Điều kiện bảo hành</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sản phẩm được bảo hành trong thời gian 30 ngày kể từ ngày mua hàng.</li>
                  <li>Sản phẩm còn đầy đủ tem, nhãn, mác của nhà sản xuất.</li>
                  <li>Hóa đơn mua hàng hoặc phiếu giao hàng của GAVANI là căn cứ để được bảo hành.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">2. Phạm vi bảo hành</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bảo hành các lỗi do nhà sản xuất</li>
                  <li>Các lỗi phát sinh trong quá trình sử dụng bình thường như: đường chỉ, nút, khóa kéo, keo dán...</li>
                  <li>Màu phai do lỗi của nhà sản xuất, không phải do quá trình sử dụng.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">3. Trường hợp không được bảo hành</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sản phẩm đã quá thời hạn bảo hành.</li>
                  <li>Sản phẩm không còn tem, nhãn, mác của nhà sản xuất.</li>
                  <li>Sản phẩm bị hư hỏng do lỗi của người sử dụng.</li>
                  <li>Sản phẩm bị hư hỏng do thiên tai, hỏa hoạn, lũ lụt...</li>
                  <li>Sản phẩm có dấu hiệu đã được sửa chữa trước đó.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">4. Quy trình bảo hành</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Khách hàng mang sản phẩm đến trực tiếp cửa hàng GAVANI gần nhất.</li>
                  <li>Thời gian bảo hành từ 3-7 ngày làm việc tùy theo tình trạng sản phẩm.</li>
                  <li>Trong trường hợp không thể sửa chữa được, GAVANI sẽ đổi sản phẩm mới tương đương.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">5. Thông tin liên hệ</h3>
                <p className="mb-2">Mọi thắc mắc về chính sách bảo hành, khách hàng vui lòng liên hệ:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hotline: <span className="text-[#e52629] font-bold">0971 411 122</span></li>
                  <li>Email: <span className="text-[#e52629]">cskh@gavani.vn</span></li>
                  <li>Giờ làm việc: 8h30 - 22h00 mỗi ngày</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-center italic">GAVANI luôn cố gắng mang đến cho khách hàng sự trải nghiệm và hài lòng cao nhất với sản phẩm và dịch vụ.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}