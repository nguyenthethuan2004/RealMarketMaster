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
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  sizes?: string[];
  colors?: string[];
}

export default function Products() {
  const { category } = useParams();
  const { toast } = useToast();
  const [sort, setSort] = useState("popular");

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm thời trang" },
  ];

  // Sample product data for clothing store
  const products: Product[] = [
    {
      id: 1,
      name: "Áo sơ mi nam trắng",
      description: "Áo sơ mi nam tay dài trơn cao cấp",
      type: "ao-nam",
      price: 450000,
      originalPrice: 550000,
      rating: 4.5,
      reviews: 48,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Trắng", "Xanh nhạt", "Đen"]
    },
    {
      id: 2,
      name: "Áo thun nam cotton",
      description: "Áo thun nam ngắn tay chất liệu cotton thoáng mát",
      type: "ao-nam",
      price: 250000,
      originalPrice: 300000,
      rating: 4.0,
      reviews: 35,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Trắng", "Đen", "Xanh đậm", "Xám"]
    },
    {
      id: 3,
      name: "Áo khoác nữ dáng dài",
      description: "Áo khoác dáng dài phong cách Hàn Quốc",
      type: "ao-nu",
      price: 850000,
      originalPrice: 1050000,
      rating: 5.0,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Be", "Đen", "Nâu"]
    },
    {
      id: 4,
      name: "Áo thun nữ tay lỡ",
      description: "Áo thun nữ tay lỡ form rộng phong cách trẻ trung",
      type: "ao-nu",
      price: 180000,
      originalPrice: 220000,
      rating: 4.5,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      sizes: ["S", "M", "L"],
      colors: ["Trắng", "Đen", "Hồng", "Xanh mint"]
    },
    {
      id: 5,
      name: "Quần jeans nam slim fit",
      description: "Quần jeans nam ôm nhẹ, co giãn thoải mái",
      type: "quan-nam",
      price: 650000,
      originalPrice: 750000,
      rating: 4.0,
      reviews: 29,
      image: "https://images.unsplash.com/photo-1566207474742-0fa0fca0c6a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      sizes: ["29", "30", "31", "32", "33", "34"],
      colors: ["Xanh đậm", "Xanh nhạt", "Đen"]
    },
    {
      id: 6,
      name: "Quần âu nữ công sở",
      description: "Quần tây nữ thiết kế thanh lịch cho công sở",
      type: "quan-nu",
      price: 420000,
      originalPrice: 480000,
      rating: 4.0,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Đen", "Xám", "Xanh navy"]
    },
    {
      id: 7,
      name: "Giày cao gót nữ",
      description: "Giày cao gót mũi nhọn 5cm thiết kế sang trọng",
      type: "phu-kien",
      price: 550000,
      originalPrice: 650000,
      rating: 4.2,
      reviews: 38,
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      sizes: ["35", "36", "37", "38", "39"],
      colors: ["Đen", "Be", "Đỏ"]
    },
    {
      id: 8,
      name: "Túi xách nữ thời trang",
      description: "Túi xách nữ thiết kế hiện đại, sang trọng",
      type: "phu-kien",
      price: 750000,
      originalPrice: 850000,
      rating: 4.7,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      colors: ["Đen", "Nâu", "Trắng"]
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

  const getCategoryName = (categorySlug: string | undefined) => {
    switch (categorySlug) {
      case 'ao-nam':
        return 'Áo Nam';
      case 'quan-nam':
        return 'Quần Nam';
      case 'ao-nu':
        return 'Áo Nữ';
      case 'quan-nu':
        return 'Quần Nữ';
      case 'phu-kien':
        return 'Phụ kiện';
      default:
        return 'Tất cả sản phẩm';
    }
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Sản phẩm thời trang</h1>
        
        <div className="flex flex-wrap -mx-3">
          {/* Category sidebar */}
          <div className="w-full md:w-1/4 px-3 mb-6">
            <div className="bg-white rounded shadow p-4">
              <h2 className="font-bold mb-3 pb-2 border-b">Danh mục</h2>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/products/ao-nam" 
                    className={`flex items-center justify-between ${category === 'ao-nam' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Áo Nam</span>
                    <span className="text-sm text-gray-500">(12)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/products/quan-nam" 
                    className={`flex items-center justify-between ${category === 'quan-nam' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Quần Nam</span>
                    <span className="text-sm text-gray-500">(8)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/products/ao-nu" 
                    className={`flex items-center justify-between ${category === 'ao-nu' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Áo Nữ</span>
                    <span className="text-sm text-gray-500">(15)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/products/quan-nu" 
                    className={`flex items-center justify-between ${category === 'quan-nu' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Quần Nữ</span>
                    <span className="text-sm text-gray-500">(10)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/products/phu-kien" 
                    className={`flex items-center justify-between ${category === 'phu-kien' ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    <span>Phụ kiện</span>
                    <span className="text-sm text-gray-500">(18)</span>
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
                      <span>Dưới 200k</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox id="price-2" className="mr-2" />
                      <span>200k - 500k</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox id="price-3" className="mr-2" />
                      <span>500k - 1 triệu</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox id="price-4" className="mr-2" />
                      <span>Trên 1 triệu</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Kích cỡ</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="min-w-[40px]">S</Button>
                    <Button variant="outline" size="sm" className="min-w-[40px]">M</Button>
                    <Button variant="outline" size="sm" className="min-w-[40px]">L</Button>
                    <Button variant="outline" size="sm" className="min-w-[40px]">XL</Button>
                    <Button variant="outline" size="sm" className="min-w-[40px]">XXL</Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Màu sắc</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-6 h-6 rounded-full bg-black border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-white border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-red-500 border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-500 border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-yellow-500 border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-green-500 border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 border cursor-pointer"></div>
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
                {getCategoryName(category)}
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
                    <SelectItem value="newest">Mới nhất</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded shadow overflow-hidden group">
                  <div className="relative">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                      <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        -{Math.round((1 - product.price/product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    
                    <div className="flex items-center mb-2">
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
                    
                    {product.sizes && (
                      <div className="mb-2">
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.map(size => (
                            <span key={size} className="inline-block border border-gray-300 px-2 text-xs rounded">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="font-bold text-lg text-primary">{product.price.toLocaleString()} VNĐ</span>
                        {product.originalPrice && (
                          <span className="text-sm line-through text-gray-500 ml-2">{product.originalPrice.toLocaleString()} VNĐ</span>
                        )}
                      </div>
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
