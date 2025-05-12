import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Home from "@/pages/home";
import Account from "@/pages/account";
import Products from "@/pages/products";
import ChinhSachBaoHanh from "@/pages/chinh-sach-bao-hanh";
import HeThongCuaHang from "@/pages/he-thong-cua-hang";
import HuongDanSuDung from "@/pages/huong-dan-su-dung";
import ChinhSachThanhVien from "@/pages/chinh-sach-thanh-vien";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/account" component={Account} />
      <Route path="/account/:tab" component={Account} />
      <Route path="/products" component={Products} />
      <Route path="/products/:category" component={Products} />
      <Route path="/chinh-sach-bao-hanh" component={ChinhSachBaoHanh} />
      <Route path="/he-thong-cua-hang" component={HeThongCuaHang} />
      <Route path="/huong-dan-su-dung" component={HuongDanSuDung} />
      <Route path="/chinh-sach-thanh-vien" component={ChinhSachThanhVien} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
