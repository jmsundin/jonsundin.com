import { Fragment } from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <MainNav />
      <main className="relative mb-20">{children}</main>
      <Footer />
    </Fragment>
  );
}
