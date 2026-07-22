import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
  let name = "Rimuru";
  let age = "20";
  let job = "Demon Lord";
  let phNo = "+91-9876543210";
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="contentSpace">
        <Outlet context={{ name, age, job, phNo }} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
