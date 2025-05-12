import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function ChinhSachThanhVien() {
  const membershipLevels = [
    {
      name: "Thành viên Bạc",
      pointsNeeded: 1000,
      discount: "5%",
      icon: "🥈",
      color: "bg-gray-300",
      benefits: [
        "Giảm 5% cho mọi đơn hàng",
        "Tham gia chương trình ưu đãi sinh nhật",
        "Cập nhật thông tin khuyến mãi sớm nhất",
      ]
    },
    {
      name: "Thành viên Vàng",
      pointsNeeded: 3000,
      discount: "10%",
      icon: "🥇",
      color: "bg-yellow-300",
      benefits: [
        "Giảm 10% cho mọi đơn hàng",
        "Tham gia chương trình ưu đãi sinh nhật",
        "Miễn phí vận chuyển cho đơn hàng từ 500.000đ",
        "Quà tặng đặc biệt hàng quý",
      ]
    },
    {
      name: "Thành viên Kim Cương",
      pointsNeeded: 5000,
      discount: "15%",
      icon: "💎",
      color: "bg-blue-200",
      benefits: [
        "Giảm 15% cho mọi đơn hàng",
        "Tham gia chương trình ưu đãi sinh nhật với quà đặc biệt",
        "Miễn phí vận chuyển cho mọi đơn hàng",
        "Quà tặng đặc biệt hàng tháng",
        "Ưu tiên trải nghiệm sản phẩm mới",
        "Tư vấn viên riêng",
      ]
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-[#e52629]">CHÍNH SÁCH THÀNH VIÊN</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Banner */}
          <div className="relative h-64 rounded-lg overflow-hidden mb-10">
            <img 
              src="https://gavani.vn/images/cms/member-banner.jpg" 
              alt="Chính sách thành viên GAVANI" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
              <h2 className="text-white text-3xl font-bold mb-2">Chương trình Thành viên GAVANI</h2>
              <p className="text-white max-w-md">Tận hưởng những đặc quyền dành riêng cho khách hàng thân thiết của GAVANI</p>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-xl font-semibold mb-4">Giới thiệu chương trình</h2>
            <p className="mb-4">Chương trình thành viên GAVANI được xây dựng nhằm tri ân những khách hàng đã tin tưởng và đồng hành cùng GAVANI. Với chương trình này, quý khách hàng sẽ được tích lũy điểm từ mỗi giao dịch và nhận được nhiều ưu đãi hấp dẫn.</p>
            <p>Mỗi 1.000đ chi tiêu tại GAVANI sẽ được tích lũy 1 điểm thưởng. Điểm thưởng này sẽ được dùng để xác định hạng thành viên và các ưu đãi tương ứng.</p>
          </div>
          
          {/* Membership Levels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {membershipLevels.map((level, index) => (
              <Card key={index} className={`overflow-hidden border-t-4 ${level.color} transition-transform hover:scale-105`}>
                <CardHeader className="bg-gray-50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <span className="mr-2">{level.icon}</span>
                      {level.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-[#e52629]">-{level.discount}</Badge>
                  </div>
                  <CardDescription>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>0 điểm</span>
                        <span>{level.pointsNeeded} điểm</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <h4 className="font-medium mb-2 text-sm">Quyền lợi thành viên:</h4>
                  <ul className="space-y-1 text-sm">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#e52629] mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* How to Join */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-xl font-semibold mb-4">Cách thức tham gia</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#e52629] text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div className="ml-4">
                  <h3 className="font-medium">Đăng ký tài khoản</h3>
                  <p className="text-gray-600">Đăng ký tài khoản trên website GAVANI hoặc tại cửa hàng GAVANI gần nhất.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#e52629] text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div className="ml-4">
                  <h3 className="font-medium">Mua sắm và tích điểm</h3>
                  <p className="text-gray-600">Cứ mỗi 1.000đ chi tiêu tại GAVANI sẽ được tích lũy 1 điểm thưởng.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#e52629] text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div className="ml-4">
                  <h3 className="font-medium">Nâng hạng thành viên</h3>
                  <p className="text-gray-600">Khi đạt đủ số điểm yêu cầu, bạn sẽ được nâng hạng thành viên tự động.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#e52629] text-white flex items-center justify-center font-bold shrink-0">4</div>
                <div className="ml-4">
                  <h3 className="font-medium">Tận hưởng quyền lợi</h3>
                  <p className="text-gray-600">Tận hưởng các đặc quyền dựa trên hạng thành viên của bạn mỗi khi mua sắm.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Trở thành thành viên GAVANI ngay hôm nay!</h3>
            <p className="mb-6 max-w-xl mx-auto">Đăng ký tài khoản để bắt đầu tích điểm và nhận những ưu đãi hấp dẫn từ GAVANI.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#e52629] hover:bg-[#c81f22]">Đăng ký ngay</Button>
              <Button variant="outline" className="border-[#e52629] text-[#e52629]">Tìm hiểu thêm</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}