import { Fragment } from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <MainNav />
      <main className="mb-20">{children}</main>
      <Footer />
    </div>
  );
}
