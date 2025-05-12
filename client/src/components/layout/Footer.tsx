import { Link } from "wouter";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-8">
      <div className="bg-white py-8">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/">
                <div className="flex items-center mb-4">
                  <span className="font-bold text-2xl text-black">
                    <span>G</span>
                    <span className="text-[#e52629]">A</span>
                    <span>V</span>
                    <span className="text-[#e52629]">A</span>
                    <span>NI</span>
                  </span>
                </div>
              </Link>

              <p className="text-sm mb-4 text-gray-600 leading-relaxed">
                Thương hiệu thời trang GAVANI phát triển mạnh về dòng áo khoác
                và áo phông hình in đặc biệt chú trọng đến chất lượng của chất
                liệu, màu mã, form dáng và cả quy trình sản xuất an toàn, thân
                thiện.
              </p>

              <div className="flex items-center mb-3">
                <MdLocationOn size={18} className="text-[#e52629] mr-2" />
                <span className="text-sm">TP. Hồ Chí Minh, Việt Nam</span>
              </div>

              <div className="flex items-center mb-3">
                <FaPhoneAlt size={16} className="text-[#e52629] mr-2" />
                <span className="text-sm">Hotline: 0971 411 122</span>
              </div>

              <div className="flex items-center mb-3">
                <FaEnvelope size={16} className="text-[#e52629] mr-2" />
                <span className="text-sm">Email: info@gavani.vn</span>
              </div>

              <div className="text-xs text-gray-500 mt-4">
                © Bản quyền thuộc về EGANY | Cung cấp bởi Haravan
              </div>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-base font-bold mb-4 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#e52629]">
                Chính sách
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tim-kiem" className="hover:text-[#e52629]">
                    Tìm kiếm
                  </Link>
                </li>
                <li>
                  <Link href="/gioi-thieu" className="hover:text-[#e52629]">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chinh-sach-doi-tra"
                    className="hover:text-[#e52629]"
                  >
                    Chính sách đổi trả & bảo hành
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chinh-sach-bao-mat"
                    className="hover:text-[#e52629]"
                  >
                    Chính sách bảo mật
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dieu-khoan-dich-vu"
                    className="hover:text-[#e52629]"
                  >
                    Điều khoản dịch vụ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="text-base font-bold mb-4 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#e52629]">
                Hỗ trợ khách hàng
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/huong-dan-mua-hang"
                    className="hover:text-[#e52629]"
                  >
                    Hướng dẫn mua hàng
                  </Link>
                </li>
                <li>
                  <Link
                    href="/huong-dan-su-dung"
                    className="hover:text-[#e52629]"
                  >
                    Hướng dẫn sử dụng
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chinh-sach-doi-tra"
                    className="hover:text-[#e52629]"
                  >
                    Chính sách đổi trả & bảo hành
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quy-trinh-giao-nhan"
                    className="hover:text-[#e52629]"
                  >
                    Quy trình giao nhận và thanh toán
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chinh-sach-thanh-vien"
                    className="hover:text-[#e52629]"
                  >
                    Chính sách thành viên
                  </Link>
                </li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-base font-bold mb-4 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#e52629]">
                Phương thức thanh toán
              </h3>
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="border border-gray-200 rounded p-2 flex items-center justify-center">
                  <img
                    src="https://gavani.vn/images/2023/06/momo.png"
                    alt="MoMo"
                    className="h-8"
                  />
                </div>
                <div className="border border-gray-200 rounded p-2 flex items-center justify-center">
                  <img
                    src="https://gavani.vn/images/2023/06/zalopay.png"
                    alt="ZaloPay"
                    className="h-8"
                  />
                </div>
                <div className="border border-gray-200 rounded p-2 flex items-center justify-center">
                  <img
                    src="https://gavani.vn/images/2023/06/visa.png"
                    alt="Visa"
                    className="h-8"
                  />
                </div>
                <div className="border border-gray-200 rounded p-2 flex items-center justify-center">
                  <img
                    src="https://gavani.vn/images/2023/06/mastercard.png"
                    alt="Mastercard"
                    className="h-8"
                  />
                </div>
                <div className="border border-gray-200 rounded p-2 flex items-center justify-center">
                  <img
                    src="https://gavani.vn/images/2023/06/jcb.png"
                    alt="JCB"
                    className="h-8"
                  />
                </div>
              </div>

              <div className="mb-4">
                <a
                  href="http://online.gov.vn/Home/WebDetails/78935"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://gavani.vn/images/2023/06/bo-cong-thuong.png"
                    alt="Đã thông báo Bộ Công Thương"
                    className="h-14"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="container mx-auto container-padding py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xs text-gray-500 mb-4 md:mb-0">
          Thiết kế bởi{" "}
          <a href="https://Gavani.vn" className="text-[#e52629]">
            Gavani.vn
          </a>
        </div>

        <div className="flex space-x-4 items-center">
          <a
            href="https://facebook.com/gavani.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[#e52629] text-white rounded-full flex items-center justify-center hover:opacity-90"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://www.instagram.com/gavani.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[#e52629] text-white rounded-full flex items-center justify-center hover:opacity-90"
          >
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
