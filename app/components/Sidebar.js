"use client";

import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

const Sidebar = ({children}) => {
  return (
    <>
      <div className="h-full">
        <DesktopSidebar />
        <MobileFooter />
        <main className="lg:ml-52 h-full">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
