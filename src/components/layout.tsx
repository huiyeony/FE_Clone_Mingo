import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col  bg-[#121212]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
