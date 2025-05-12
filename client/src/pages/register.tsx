import { useState } from "react";
import { Link, useLocation } from "wouter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const registerSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu cần ít nhất 6 ký tự" }),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: "Bạn phải đồng ý với điều khoản và chính sách",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Register() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài khoản", href: "/account" },
    { label: "Đăng ký" },
  ];

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    try {
      const { confirmPassword, terms, ...userData } = data;
      const response = await apiRequest("POST", "/api/auth/register", userData);
      if (response.ok) {
        toast({
          title: "Đăng ký thành công",
          description: "Tài khoản của bạn đã được tạo thành công!",
        });
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        variant: "destructive",
        title: "Đăng ký thất bại",
        description: "Có lỗi xảy ra trong quá trình đăng ký.",
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
          <h1 className="text-center text-2xl font-bold mb-6">ĐĂNG KÝ TÀI KHOẢN</h1>
          
          <div className="text-center mb-6">
            <p className="mb-2">
              Bạn đã có tài khoản? <Link href="/login" className="text-primary hover:underline font-medium">Đăng nhập tại đây</Link>
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Họ và tên <span className="text-primary">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Họ và tên" 
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Số điện thoại <span className="text-primary">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Số điện thoại" 
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
              
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Xác nhận mật khẩu <span className="text-primary">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Xác nhận mật khẩu" 
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
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="text-sm leading-tight">
                      <FormLabel className="ml-2">
                        Tôi đồng ý với <Link href="/terms" className="text-primary hover:underline">Điều khoản dịch vụ</Link> và <Link href="/privacy" className="text-primary hover:underline">Chính sách bảo mật</Link>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-yellow-400 text-black font-medium py-3 rounded transition duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Đang xử lý..." : "Đăng ký"}
              </Button>
              
              <div className="text-center">
                <p className="text-gray-500 my-2">Hoặc đăng ký bằng</p>
                <div className="flex justify-center gap-4">
                  <Button 
                    type="button" 
                    className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => {
                      toast({
                        title: "Thông báo",
                        description: "Đăng ký bằng Google chưa được hỗ trợ",
                      });
                    }}
                  >
                    <FaGoogle className="mr-2" /> Đăng ký với Google
                  </Button>
                  <Button 
                    type="button" 
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => {
                      toast({
                        title: "Thông báo",
                        description: "Đăng ký bằng Facebook chưa được hỗ trợ",
                      });
                    }}
                  >
                    <FaFacebookF className="mr-2" /> Đăng ký với Facebook
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
