import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaUser } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

const profileSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự" }),
  phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  birthdate: z.string(),
  company: z.string(),
  position: z.string(),
  specialty: z.string(),
  address: z.string(),
  district: z.string(),
  city: z.string(),
  zipcode: z.string(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function Profile() {
  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "Nguyễn Văn A",
      phone: "0901234567",
      email: "nguyenvana@example.com",
      birthdate: "1990-01-01",
      company: "BĐS Vàng",
      position: "Môi giới cấp cao",
      specialty: "Nhà phố",
      address: "123 Nguyễn Văn Linh",
      district: "Quận 7",
      city: "TP. Hồ Chí Minh",
      zipcode: "70000",
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Profile updated:", data);
    toast({
      title: "Thành công",
      description: "Thông tin cá nhân đã được cập nhật",
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Thông tin cá nhân</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <div className="bg-white p-4 rounded shadow text-center">
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center text-white text-3xl">
                  <FaUser />
                </div>
                <h3 className="font-medium my-3">{form.watch("name")}</h3>
                <p className="text-sm text-gray-500 mb-4">Môi giới bất động sản</p>
                <Button type="button" className="w-full px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <i className="fas fa-camera mr-2"></i> Thay đổi ảnh
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-semibold mb-4 pb-2 border-b">Thông tin cơ bản</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Họ và tên</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
                        <FormLabel className="text-sm font-medium">Số điện thoại</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
                        <FormLabel className="text-sm font-medium">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="birthdate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Ngày sinh</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <h3 className="font-semibold mb-4 pb-2 border-b">Thông tin chuyên nghiệp</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Công ty</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Chức vụ</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="specialty"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-sm font-medium">Lĩnh vực chuyên môn</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
                              <SelectValue placeholder="Chọn lĩnh vực" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Căn hộ chung cư">Căn hộ chung cư</SelectItem>
                            <SelectItem value="Nhà phố">Nhà phố</SelectItem>
                            <SelectItem value="Biệt thự">Biệt thự</SelectItem>
                            <SelectItem value="Đất nền">Đất nền</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <h3 className="font-semibold mb-4 pb-2 border-b">Địa chỉ</h3>
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Địa chỉ</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Quận/Huyện</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Tỉnh/Thành phố</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="zipcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Mã bưu điện</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="button" 
                    variant="outline"
                    className="px-6 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 mr-2"
                    onClick={() => form.reset()}
                  >
                    Hủy
                  </Button>
                  <Button 
                    type="submit" 
                    className="px-6 py-2 bg-primary hover:bg-red-700 text-white rounded"
                  >
                    Lưu thay đổi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
