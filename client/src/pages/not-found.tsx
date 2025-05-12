import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy trang</h2>
        <p className="text-gray-600 mb-8">
          Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển sang vị trí khác.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-primary hover:bg-red-700 w-full sm:w-auto">
              Về trang chủ
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" className="w-full sm:w-auto">
              Xem sản phẩm
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Bạn có thể thử:</h3>
          <ul className="text-gray-600 text-left list-disc pl-5 space-y-1">
            <li>Kiểm tra lại đường dẫn URL</li>
            <li>Trở về trang trước đó</li>
            <li>Sử dụng thanh tìm kiếm ở trên cùng</li>
            <li>Truy cập danh mục sản phẩm của chúng tôi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
