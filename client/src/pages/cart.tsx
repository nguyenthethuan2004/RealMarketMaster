import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "wouter";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 animate-fadeIn">
          <Link href="/" className="hover:text-[#e52629] transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span>Giỏ hàng (0)</span>
        </div>

        <div className="flex flex-col items-center justify-center py-16">
          {/* Icon giỏ hàng trống với animation */}
          <div className="relative mb-8 animate-scaleIn">
            <div className="w-32 h-32 flex items-center justify-center">
              <HiOutlineShoppingBag className="w-full h-full text-[#e52629] animate-float" />
            </div>
            {/* Các icon trang trí xung quanh với animation */}
            <div className="absolute top-0 right-0 w-6 h-6 text-[#e52629] animate-spin-slow">
              +
            </div>
            <div className="absolute top-1/4 left-0 w-4 h-4 text-[#e52629] animate-bounce-slow">
              ○
            </div>
            <div className="absolute bottom-0 right-1/4 w-4 h-4 text-[#e52629] animate-pulse">
              △
            </div>
            <div className="absolute top-1/2 right-0 w-3 h-3 text-[#e52629] animate-bounce-slow">
              ▽
            </div>
          </div>

          <h2 className="text-2xl font-medium mb-4 animate-slideUp">
            "Hổng" có gì trong giỏ hết
          </h2>
          <p className="text-gray-500 mb-6 animate-slideUp animation-delay-200">
            Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!
          </p>
          <Link href="/">
            <Button className="bg-[#e52629] hover:bg-[#c81f22] text-white px-8 transform hover:scale-105 transition-all duration-300 animate-slideUp animation-delay-400">
              Mua sắm ngay
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Danh sách sản phẩm */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-[#e52629] font-medium">
                  {item.price.toLocaleString()}đ
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded hover:bg-gray-100"
                  >
                    <FiMinus />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded hover:bg-gray-100"
                  >
                    <FiPlus />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 p-1 text-gray-500 hover:text-red-500"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tổng tiền và thanh toán */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="font-medium mb-4">Tổng giỏ hàng</h2>

          <div className="flex justify-between mb-2">
            <span>Tạm tính</span>
            <span>{total.toLocaleString()}đ</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Phí vận chuyển</span>
            <span>Miễn phí</span>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between font-medium mb-4">
              <span>Tổng cộng</span>
              <span className="text-[#e52629]">{total.toLocaleString()}đ</span>
            </div>

            <Button className="w-full bg-[#e52629] hover:bg-[#c81f22] text-white">
              Tiến hành thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
