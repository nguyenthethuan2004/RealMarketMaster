import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "wouter";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Dashboard from "./Dashboard";
import Campaigns from "./Campaigns";
import API from "./API";
import Profile from "./Profile";
import Orders from "./Orders";
import { FaTachometerAlt, FaBullhorn, FaKey, FaUserEdit, FaShoppingBasket, FaSignOutAlt } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

export default function Account() {
  const { tab } = useParams();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>(tab || "dashboard");
  const [user, setUser] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
  });

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài khoản" },
  ];

  useEffect(() => {
    // Update active tab when URL param changes
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const handleLogout = () => {
    // Implement logout functionality
    toast({
      title: "Đăng xuất thành công",
      description: "Tạm biệt, hẹn gặp lại!",
    });
    navigate("/login");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "campaigns":
        return <Campaigns />;
      case "api":
        return <API />;
      case "profile":
        return <Profile />;
      case "orders":
        return <Orders />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Quản lý tài khoản</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-white rounded shadow p-4">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                <FaUserEdit />
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/account/dashboard"
                    className={`block px-3 py-2 rounded ${activeTab === "dashboard" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <FaTachometerAlt className="inline mr-2" /> Tổng quan
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/account/campaigns"
                    className={`block px-3 py-2 rounded ${activeTab === "campaigns" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                    onClick={() => setActiveTab("campaigns")}
                  >
                    <FaBullhorn className="inline mr-2" /> Chiến dịch tiếp thị
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/account/api"
                    className={`block px-3 py-2 rounded ${activeTab === "api" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                    onClick={() => setActiveTab("api")}
                  >
                    <FaKey className="inline mr-2" /> API & Tích hợp
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/account/profile"
                    className={`block px-3 py-2 rounded ${activeTab === "profile" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <FaUserEdit className="inline mr-2" /> Thông tin cá nhân
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/account/orders"
                    className={`block px-3 py-2 rounded ${activeTab === "orders" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                    onClick={() => setActiveTab("orders")}
                  >
                    <FaShoppingBasket className="inline mr-2" /> Đơn hàng
                  </Link>
                </li>
                <li>
                  <button 
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="inline mr-2" /> Đăng xuất
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded shadow p-6 md:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
}
