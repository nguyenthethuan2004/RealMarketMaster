import { Header } from "./Header";
import { Footer } from "./Footer";
import { SupportButtons } from "./SupportButtons";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow w-full">
        <div className="container mx-auto px-4">{children}</div>
      </main>
      <Footer />
      <SupportButtons />
    </div>
  );
}
