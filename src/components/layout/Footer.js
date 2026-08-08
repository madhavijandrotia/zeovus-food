import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
const COMPANY_LINKS = [
  { label: "Our Story", href: "/our-story" },
  { label: "Innovation", href: "/innovation" },
  { label: "Manufacturing & Capabilities", href: "/manufacturing" },
  { label: "Partner With Us", href: "/working-together" },
  { label: "Contact Us", href: "/contact" },
];
const PRODUCT_LINKS = [
  "Staples & Dry Groceries",
  "Spices & Seasonings",
  "Ready-to-Eat & Instant Foods",
  "Condiments & Sauces",
  "Healthy Snacking",
  "Beverages & Smoothies",
];
const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M13.5 9H15V6.5h-1.8C11.1 6.5 10 7.6 10 9.6V11H8.5v2.5H10V19h2.6v-5.5H14l.4-2.5h-1.8V9.7c0-.5.2-.7.9-.7Z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 8.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm0 5.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm4.2-5.55a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0ZM19.9 8.1c-.06-1.2-.33-2.27-1.2-3.14-.87-.87-1.94-1.14-3.14-1.2-1.24-.07-4.95-.07-6.19 0-1.2.06-2.26.33-3.14 1.2-.87.87-1.13 1.94-1.2 3.14-.07 1.24-.07 4.95 0 6.19.06 1.2.33 2.27 1.2 3.14.88.87 1.94 1.14 3.14 1.2 1.24.07 4.95.07 6.19 0 1.2-.06 2.27-.33 3.14-1.2.87-.87 1.14-1.94 1.2-3.14.07-1.24.07-4.94 0-6.19Zm-1.6 7.52a2.53 2.53 0 0 1-1.43 1.43c-.99.4-3.34.3-4.44.3s-3.45.1-4.44-.3a2.53 2.53 0 0 1-1.43-1.43c-.4-.99-.3-3.34-.3-4.44s-.1-3.45.3-4.44A2.53 2.53 0 0 1 7.09 5.3c.99-.4 3.34-.3 4.44-.3s3.45-.1 4.44.3c.68.27 1.16.75 1.43 1.43.4.99.3 3.34.3 4.44s.1 3.45-.3 4.44Z",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    path: "M16.5 4h-2.3v10.4a2.3 2.3 0 1 1-1.9-2.27V9.8a4.6 4.6 0 1 0 4.2 4.6V9.1c.83.6 1.85.96 3 .96V7.75c-1.7 0-3-1.4-3-3.1V4Z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.94 8.5H4.56V19h2.38V8.5ZM5.75 4.5a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76ZM19.5 12.9c0-2.6-1.4-3.8-3.26-3.8-1.5 0-2.17.83-2.55 1.4V8.5H11.3c.03.7 0 10.5 0 10.5h2.4v-5.87c0-.31.02-.62.12-.85.24-.62.8-1.26 1.75-1.26 1.24 0 1.73.94 1.73 2.32V19h2.4v-6.1Z",
  },
];
export default function Footer() {
  return (
    <footer className="site-footer">
      {" "}
      <div className="site-footer__container site-footer__grid">
        {" "}
        <div className="site-footer__brand">
          {" "}
          <Link href="/" className="site-footer__logo-link">
            {" "}
            <Image
              src="/logo.png"
              alt="Zeovus Food"
              width={180}
              height={90}
              className="site-footer__logo"
            />{" "}
          </Link>{" "}
          <p>
            {" "}
            Zeovus Food (India) Pvt. Ltd. <br /> India{" "}
          </p>{" "}
          <a href="mailto:connect@zeovus.com"> connect@zeovus.com </a>{" "}
        </div>{" "}
        <nav className="site-footer__col" aria-label="Company">
          {" "}
          <h4>Company</h4>{" "}
          <ul>
            {" "}
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                {" "}
                <Link href={link.href}>{link.label}</Link>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </nav>{" "}
        <nav className="site-footer__col" aria-label="Products">
          {" "}
          <h4>Products</h4>{" "}
          <ul>
            {" "}
            {PRODUCT_LINKS.map((label) => (
              <li key={label}>
                {" "}
                <Link href="/products">{label}</Link>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </nav>{" "}
        <nav className="site-footer__col" aria-label="Group">
          {" "}
          <h4>Group</h4>{" "}
          <ul>
            {" "}
            <li>
              {" "}
              <Link href="/">Zeovus Group</Link>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
        <nav className="site-footer__col" aria-label="Legal">
          {" "}
          <h4>Legal</h4>{" "}
          <ul>
            {" "}
            <li>
              {" "}
              <Link href="/privacy-policy">Privacy Policy</Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link href="/terms-of-service"> Terms of Service </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
      </div>{" "}
      <div className="site-footer__container site-footer__bottom">
        {" "}
        <span>
          {" "}
          © {new Date().getFullYear()} Zeovus Food. All rights reserved.{" "}
        </span>{" "}
        <div className="site-footer__socials">
          {" "}
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                {" "}
                <path d={social.path} />{" "}
              </svg>{" "}
            </a>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
