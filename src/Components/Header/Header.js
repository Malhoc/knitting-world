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
            { value: "all", label: "All Categories" },
            { value: "men", label: "Men" },
            { value: "women", label: "Women" },
            { value: "kids", label: "Kids" },
          ]}
        />
        <HeaderNavBar />
      </header>
    </>
  );
}
