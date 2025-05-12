import { useState } from "react";
import { Link, useLocation } from "wouter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const loginSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu cần ít nhất 6 ký tự" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài khoản", href: "/account" },
    { label: "Đăng nhập" },
  ];

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      const response = await apiRequest("POST", "/api/auth/login", data);
      if (response.ok) {
        toast({
          title: "Đăng nhập thành công",
          description: "Chào mừng bạn quay trở lại!",
        });
        navigate("/account");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Đăng nhập thất bại",
        description: "Email hoặc mật khẩu không chính xác",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-center text-2xl font-bold mb-6">ĐĂNG NHẬP TÀI KHOẢN</h1>
          
          <div className="text-center mb-6">
            <p className="mb-2">
              Bạn chưa có tài khoản? <Link href="/register" className="text-primary hover:underline font-medium">Đăng ký tại đây</Link>
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email <span className="text-primary">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Email" 
                        {...field} 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu <span className="text-primary">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Mật khẩu" 
                        {...field} 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div>
                <p className="text-sm">
                  Quên mật khẩu? Nhấn vào <Link href="/forgot-password" className="text-primary hover:underline">đây</Link>
                </p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-yellow-400 text-black font-medium py-3 rounded transition duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Đang xử lý..." : "Đăng nhập"}
              </Button>
              
              <div className="text-center">
                <p className="text-gray-500 my-2">Hoặc đăng nhập bằng</p>
                <div className="flex justify-center gap-4">
                  <Button 
                    type="button" 
                    className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => {
                      toast({
                        title: "Thông báo",
                        description: "Đăng nhập bằng Google chưa được hỗ trợ",
                      });
                    }}
                  >
                    <FaGoogle className="mr-2" /> Đăng nhập Google
                  </Button>
                  <Button 
                    type="button" 
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => {
                      toast({
                        title: "Thông báo",
                        description: "Đăng nhập bằng Facebook chưa được hỗ trợ",
                      });
                    }}
                  >
                    <FaFacebookF className="mr-2" /> Đăng nhập Facebook
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
