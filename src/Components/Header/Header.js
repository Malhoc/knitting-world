import React from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import HeaderNavBar from "./HeaderNavBar";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <HeaderTop />
        <HeaderMiddle
          options={[
            { value: "All", label: "All Categories" },
            { value: "Scarves", label: "Scarves" },         
          ]}
        />
        <HeaderNavBar />
      </header>
    </>
  );
}
