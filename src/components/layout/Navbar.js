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
  { label: "WORKING TOGETHER", href: "/working-together" },
  { label: "BLOGS", href: "/blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-[#f4e8cf]">
      {/* Main Navbar */}
      <div className="mx-auto flex h-[90px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex shrink-0 items-center lg:translate-y-[10px]"
        >
          <Image
            src="/logo.png"
            alt="Zeovus Food"
            width={160}
            height={60}
            priority
            className="h-auto w-[140px] object-contain lg:w-[160px]"
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
                className={`rounded-md px-5 py-3 font-heading text-[13px] font-semibold uppercase tracking-[1px] transition-all duration-300 ${
                  active
                    ? "bg-[#5b3a1f] text-[#f4e8cf]"
                    : "text-[#5b3a1f] hover:bg-[#eadcc0]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center text-[#5b3a1f] lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-[#f4e8cf] transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col border-t border-[#d8c8a8] py-4">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`mx-4 my-1 rounded-md px-5 py-4 font-heading text-[13px] font-medium uppercase tracking-[1px] transition-all duration-300 ${
                  active
                    ? "bg-[#5b3a1f] text-[#f4e8cf]"
                    : "text-[#5b3a1f] hover:bg-[#eadcc0]"
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
