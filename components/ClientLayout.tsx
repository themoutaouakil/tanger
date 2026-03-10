"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// Temporarily disabled to debug
// import ScrollToTop from "./ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}

