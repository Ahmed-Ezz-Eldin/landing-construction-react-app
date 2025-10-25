import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-sm text-white w-full">
      <nav className="fixed top-0 left-0 w-full h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-5 z-10   bg-cardBg text-textColor transition-all shadow">
        <Link to="/" >
          <img src={logo} alt="logo" width={100} />
        </Link>
        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
          <li>
            <Link to="/" className="text-lg hover:text-white transition">خدماتنا</Link>
          </li>
          <li>
            <Link to="/" className="text-lg hover:text-white transition">مشاريعنا</Link>
          </li>
          <li>
            <Link to="/" className="text-lg hover:text-white transition">من نحن</Link>
          </li>
          <li>
            <Link to="/" className="text-lg hover:text-white transition">الاراء</Link>
          </li>
          <li>
            <Link to="/" className="text-lg hover:text-white transition">تواصل معنا</Link>
          </li>
        </ul>

        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FaBars className="text-2xl cursor-pointer" />
        </button>
        {open && (
          <div  className="mobile-menu absolute top-[70px] left-0 w-full shadow-sm p-6  md:hidden bg-cardBg z-10">
            <ul className="flex flex-col space-y-4 text-lg">
              <li>
                <Link to="/" className="text-lg hover:text-white transition">خدماتنا</Link>
              </li>
              <li>
                <Link to="/" className="text-lg hover:text-white transition">مشاريعنا</Link>
              </li>
              <li>
                <Link to="/" className="text-lg hover:text-white transition">من نحن</Link>
              </li>
              <li>
                <Link to="/" className="text-lg hover:text-white transition">الاراء</Link>
              </li>
              <li>
                <Link to="/" className="text-lg hover:text-white transition">تواصل معنا</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
