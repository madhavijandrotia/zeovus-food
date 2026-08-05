"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "FORMULATION", href: "/formulation" },
  { label: "MANUFACTURING", href: "/manufacturing" },
  { label: "PRODUCTS", href: "/products" },
  { label: "BLOGS", href: "/blogs" },
  { label: "WORKING TOGETHER", href: "/working-together" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#181917]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo.webp"
            alt="Zeovus Food"
            width={135}
            height={60}
            priority
            className="h-auto w-[120px] lg:w-[135px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`cursor-pointer rounded-md px-5 py-3 font-heading text-[13px] font-medium uppercase tracking-[1px] transition-all duration-300 ${
                  active
                    ? "bg-[#f6f2d5] text-[#1a1a1a]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-[#181917]/95 transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col border-t border-white/10 py-4">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`mx-4 my-1 cursor-pointer rounded-md px-5 py-4 font-heading text-[13px] font-medium uppercase tracking-[1px] transition ${
                  active
                    ? "bg-[#f6f2d5] text-[#1a1a1a]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
