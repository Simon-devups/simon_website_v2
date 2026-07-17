// app/components/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // لیست آیتم‌های منو (برای جلوگیری از تکرار کد)
  const navItems = [
    { name: "صفحه اصلی", href: "/" },
    { name: "خدمات ما", href: "/khadamat" },
    { name: "نمونه کارها", href: "/portfolios" },
    { name: "درباره ما", href: "/aboutUs" },
    { name: "تماس با ما", href: "/contactUs" },
  ];

  // تابع تشخیص مسیر فعال (با در نظر گرفتن صفحه اصلی)
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  // توابع کنترل منوی موبایل
  const toggleMenu = () => setMobileOpen(!mobileOpen);
  const closeMenu = () => setMobileOpen(false);

  // وقتی اندازه‌ی صفحه به دسکتاپ می‌رسد، منو را ببند
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="container nav-wrap">
        {/* لوگو */}
        <Link href="/" className="logo">
          <span className="logo-mark">
            <img src="/Group 25.svg" style={{width: "100%", height: '100%' ,borderRadius: '9px'}}/>
          </span>
          سایمون
        </Link>

        {/* منوی دسکتاپ */}
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "active" : ""}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* بخش راست هدر (دکمه + برگر) */}
        <div className="nav-cta">
          <Link href="/#contact" className="btn btn-orange">
            درخواست مشاوره
          </Link>
          <span
            className={`burger ${mobileOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            {mobileOpen ? "✕" : "☰"}
          </span>
        </div>
      </div>

      {/* منوی موبایل */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <Link href="/#contact" className="btn btn-orange" onClick={closeMenu}>
            درخواست مشاوره
          </Link>
        </div>
      </div>
    </header>
  );
}