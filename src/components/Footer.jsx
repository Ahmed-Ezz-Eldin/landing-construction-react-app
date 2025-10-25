import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-secBg text-white py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-orange mb-4">
            شركة البناء الحديثة
          </h2>
          <p className="text-textColor leading-relaxed text-sm">
            نحن متخصصون في تقديم خدمات المقاولات العامة والتشطيب بأعلى معايير
            الجودة والدقة في التنفيذ.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange">
            روابط سريعة
          </h3>
          <ul className="space-y-2 text-textColor">
            <li>
              <Link
                to="/"
                className="hover:text-orange transition-colors duration-200"
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-orange transition-colors duration-200"
              >
                مشاريعنا
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-orange transition-colors duration-200"
              >
                لماذا نحن
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-orange transition-colors duration-200"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

 
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange">تابعنا</h3>
          <p className="text-textColor mb-4 text-sm">
            ابقَ على تواصل معنا عبر وسائل التواصل الاجتماعي.
          </p>
          <div className="flex gap-4">
            <Link
              to="https://facebook.com"
              target="_blank"
              aria-label="تابعنا على فيسبوك"
              className="w-9 h-9 flex items-center justify-center bg-orange/20 hover:bg-orange rounded-full transition-all"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              name="twitter"
              aria-label="تابعنا على تويتر"
              className="w-9 h-9 flex items-center justify-center bg-orange/20 hover:bg-orange rounded-full transition-all"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              aria-label="تابعنا على انستجرام"
              className="w-9 h-9 flex items-center justify-center bg-orange/20 hover:bg-orange rounded-full transition-all"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              aria-label="تابعنا على لينكد ان"
              className="w-9 h-9 flex items-center justify-center bg-orange/20 hover:bg-orange rounded-full transition-all"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ حقوق النشر */}
      <div className="text-center mt-10 text-textColor border-t border-white/10 pt-4 px-3 text-sm">
        © {new Date().getFullYear()} جميع الحقوق محفوظة المطور أحمد عزت.
      </div>
    </footer>
  );
};

export default Footer;
