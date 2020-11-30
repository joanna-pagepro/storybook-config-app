import React from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import Inner from "./inner";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { Layout as default, Inner };
