import MainNav from "./MainNav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 relative">{children}</main>
      <Footer />
    </div>
  );
}