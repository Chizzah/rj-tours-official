import React from "react";

import Header from "./UI/Header";
import Footer from "./UI/Footer";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1" style={{ minHeight: "calc(100vh - 168px)" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
