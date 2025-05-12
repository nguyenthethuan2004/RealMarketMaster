import { useState } from "react";
import { useParams } from "wouter";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Define product interface
interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  period: string;
  rating: number;
  reviews: number;
  image: string;
}

export default function Products() {
  const { category } = useParams();
  const { toast } = useToast();
  const [sort, setSort] = useState("popular");

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm & Dịch vụ tiếp thị" },
  ];

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Facebook Ads Pro",
      description: "Chiến dịch quảng cáo Facebook chuyên nghiệp cho bất động sản",
      type: "online-marketing",
      price: 3500000,
      period: "30 ngày",
      rating: 4.5,
      reviews: 48,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
    },
    {
      id: 2,
      name: "Email Marketing Pro",
      description: "Gói 10,000 emails với mẫu thiết kế chuyên nghiệp",
      type: "online-marketing",
      price: 2200000,
      period: "10,000 emails",
      rating: 4.0,
      reviews: 35,
      image: "https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
    },
    {
      id: 3,
      name: "Google Ads Premium",
      description: "Quảng cáo Google tìm kiếm và hiển thị cho BĐS",
      type: "online-marketing",
      price: 4500000,
      period: "30 ngày",
      rating: 5.0,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
    },
    {
      id: 4,
      name: "Landing Page Pro",
      description: "Trang đích chuyên nghiệp cho dự án bất động sản",
      type: "design",
      price: 2800000,
      period: "trang",
      rating: 4.5,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
    },
    {
      id: 5,
      name: "SEO Bất Động Sản",
      description: "Tối ưu hóa website BĐS của bạn trên công cụ tìm kiếm",
      type: "online-marketing",
      price: 3200000,
      period: "3 tháng",
      rating: 4.0,
      reviews: 29,
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
    },
    {
      id: 6,
      name: "Quản lý MXH",
      description: "Quản lý và phát triển các kênh mạng xã hội BĐS",
      type: "online-marketing",
      price: 2500000,
      period: "tháng",
      rating: 4.0,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80"
    },
  ];

  // Filter products by category if specified
  const filteredProducts = category ? products.filter(p => p.type === category) : products;

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: `${product.name} đã được thêm vào giỏ hàng.`,
    });
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Sản phẩm & Dịch vụ tiếp thị</h1>
        
        <div className="flex flex-wrap -mx-3">
          {/* Category sidebar */}
          <div className="w-full md:w-1/4 px-3 mb-6">
            <div className="bg-white rounded shadow p-4">
              <h2 className="font-bold mb-3 pb-2 border-b">Danh mục</h2>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/products/online-marketing" 
                    className={`flex items-center justify-between ${category === 'online-marketing' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Dịch vụ tiếp thị online</span>
                    <span className="text-sm text-gray-500">(15)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/products/advertising" 
                    className={`flex items-center justify-between ${category === 'advertising' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Vật phẩm quảng cáo</span>
                    <span className="text-sm text-gray-500">(8)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/products/design" 
                    className={`flex items-center justify-between ${category === 'design' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Thiết kế quảng cáo</span>
                    <span className="text-sm text-gray-500">(12)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/products/analytics" 
                    className={`flex items-center justify-between ${category === 'analytics' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Công cụ phân tích</span>
                    <span className="text-sm text-gray-500">(6)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/products/packages" 
                    className={`flex items-center justify-between ${category === 'packages' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Các gói dịch vụ</span>
                    <span className="text-sm text-gray-500">(4)</span>
                  </a>
                </li>
              </ul>
              
              <h2 className="font-bold mt-6 mb-3 pb-2 border-b">Bộ lọc</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Giá</h3>
                  <div className="space-y-1">
                    <label className="flex items-center">
                      <Checkbox id="price-1" className="mr-2" />
                      <span>Dưới 1 triệu VNĐ</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox id="price-2" className="mr-2" />
                      <span>1 - 3 triệu VNĐ</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox id="price-3" className="mr-2" />
                      <span>3 - 5 triệu VNĐ</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox id="price-4" className="mr-2" />
                      <span>Trên 5 triệu VNĐ</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Đánh giá</h3>
                  <div className="space-y-1">
                    <label className="flex items-center">
                      <Checkbox id="rating-5" className="mr-2" />
                      <span className="flex">
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox id="rating-4" className="mr-2" />
                      <span className="flex">
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-gray-300"></i>
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox id="rating-3" className="mr-2" />
                      <span className="flex">
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-gray-300"></i>
                        <i className="fas fa-star text-gray-300"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="w-full md:w-3/4 px-3">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <h2 className="text-xl font-bold">
                {category === 'online-marketing' ? 'Dịch vụ tiếp thị online' : 
                 category === 'advertising' ? 'Vật phẩm quảng cáo' :
                 category === 'design' ? 'Thiết kế quảng cáo' :
                 category === 'analytics' ? 'Công cụ phân tích' :
                 category === 'packages' ? 'Các gói dịch vụ' :
                 'Tất cả sản phẩm'}
              </h2>
              <div className="flex items-center">
                <span className="mr-2 text-sm">Sắp xếp theo:</span>
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sắp xếp theo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Phổ biến nhất</SelectItem>
                    <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                    <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
                    <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded shadow overflow-hidden">
                  <div className="p-4">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden mb-4">
                      <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-400"></i>
                        ))}
                        {product.rating % 1 !== 0 && (
                          <i className="fas fa-star-half-alt text-yellow-400"></i>
                        )}
                        {Array.from({ length: 5 - Math.ceil(product.rating) }).map((_, i) => (
                          <i key={i} className="fas fa-star text-gray-300"></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-lg">{product.price.toLocaleString()} VNĐ</span>
                      <span className="text-sm text-gray-500">/ {product.period}</span>
                    </div>
                    
                    <Button 
                      className="w-full py-2 bg-secondary hover:bg-yellow-400 text-black font-medium rounded"
                      onClick={() => handleAddToCart(product)}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <nav className="flex">
                <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-50">
                  <i className="fas fa-chevron-left"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-primary text-white">1</a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border-t border-b border-gray-300 hover:bg-gray-50">2</a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border-t border-b border-gray-300 hover:bg-gray-50">3</a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-50">
                  <i className="fas fa-chevron-right"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
