import { Outlet } from "react-router-dom";
import Header from "../components/ui/Shared/Header";
import Footer from "../components/ui/Shared/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
