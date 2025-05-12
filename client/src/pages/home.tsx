import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="mb-8 bg-gradient-to-r from-primary to-red-800 text-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thời trang đẳng cấp cho phong cách của bạn</h1>
            <p className="text-lg mb-6">
              Gavani mang đến những bộ sưu tập thời trang cao cấp, thiết kế hiện đại và chất liệu bền đẹp, giúp bạn tự tin thể hiện phong cách cá nhân.
            </p>
            <Link href="/products">
              <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-6 py-3">
                Mua sắm ngay
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
              alt="Thời trang Gavani" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Danh mục sản phẩm</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
              <i className="fas fa-tshirt text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Thời trang nam</h3>
            <p className="text-gray-600 mb-4">Áo, quần, phụ kiện cho phái mạnh với thiết kế hiện đại, lịch lãm.</p>
            <Link href="/products/ao-nam">
              <Button className="bg-blue-600 hover:bg-blue-700">Xem sản phẩm</Button>
            </Link>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4 mx-auto">
              <i className="fas fa-female text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Thời trang nữ</h3>
            <p className="text-gray-600 mb-4">Đầm, áo, quần và các sản phẩm thời trang dành cho phái đẹp.</p>
            <Link href="/products/ao-nu">
              <Button className="bg-pink-600 hover:bg-pink-700">Xem sản phẩm</Button>
            </Link>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 mx-auto">
              <i className="fas fa-gem text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Phụ kiện</h3>
            <p className="text-gray-600 mb-4">Giày dép, túi xách, thắt lưng và nhiều phụ kiện thời trang khác.</p>
            <Link href="/products/phu-kien">
              <Button className="bg-purple-600 hover:bg-purple-700">Xem sản phẩm</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" alt="Áo sơ mi nam" className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold mb-2">Áo sơ mi nam trắng</h3>
              <p className="text-sm text-gray-600 mb-3">Áo sơ mi nam tay dài trơn cao cấp</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">450,000 VNĐ</span>
                <span className="text-sm line-through text-gray-500">550,000 VNĐ</span>
              </div>
              
              <Button className="w-full py-2 bg-secondary hover:bg-yellow-400 text-black font-medium rounded">
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" alt="Áo khoác nữ" className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold mb-2">Áo khoác nữ dáng dài</h3>
              <p className="text-sm text-gray-600 mb-3">Áo khoác dáng dài phong cách Hàn Quốc</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">850,000 VNĐ</span>
                <span className="text-sm line-through text-gray-500">1,050,000 VNĐ</span>
              </div>
              
              <Button className="w-full py-2 bg-secondary hover:bg-yellow-400 text-black font-medium rounded">
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1566207474742-0fa0fca0c6a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" alt="Quần jeans nam" className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold mb-2">Quần jeans nam slim fit</h3>
              <p className="text-sm text-gray-600 mb-3">Quần jeans nam ôm nhẹ, co giãn thoải mái</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">650,000 VNĐ</span>
                <span className="text-sm line-through text-gray-500">750,000 VNĐ</span>
              </div>
              
              <Button className="w-full py-2 bg-secondary hover:bg-yellow-400 text-black font-medium rounded">
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80" alt="Giày nữ" className="object-cover w-full h-full" />
              </div>
              <h3 className="font-bold mb-2">Giày cao gót nữ</h3>
              <p className="text-sm text-gray-600 mb-3">Giày cao gót mũi nhọn 5cm thiết kế sang trọng</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg">550,000 VNĐ</span>
                <span className="text-sm line-through text-gray-500">650,000 VNĐ</span>
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
      
      {/* Benefits */}
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Tại sao chọn Gavani?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
              <i className="fas fa-check-circle text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Chất lượng cao cấp</h3>
              <p className="text-gray-600">Các sản phẩm được tuyển chọn kỹ lưỡng, chất liệu cao cấp, đảm bảo độ bền đẹp theo thời gian.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
              <i className="fas fa-truck text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Giao hàng nhanh chóng</h3>
              <p className="text-gray-600">Đơn hàng được xử lý và giao đến tay bạn trong thời gian ngắn nhất có thể.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
              <i className="fas fa-undo text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Đổi trả dễ dàng</h3>
              <p className="text-gray-600">Chính sách đổi trả trong 30 ngày nếu sản phẩm không vừa ý hoặc có lỗi từ nhà sản xuất.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
