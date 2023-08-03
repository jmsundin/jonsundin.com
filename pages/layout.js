import MainNav from "@/components/MainNav";
import { Fragment } from "react";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <MainNav />
      <main className="w-screen h-screen -mt-20 pt-20">{children}</main>
    </Fragment>
  );
}
