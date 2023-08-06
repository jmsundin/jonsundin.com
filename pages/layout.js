import { Fragment } from "react";
import MainNav from "@/components/MainNav";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <MainNav />
      <main>{children}</main>
    </Fragment>
  );
}
