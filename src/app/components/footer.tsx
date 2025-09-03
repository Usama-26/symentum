import React from "react";
import Container from "./container";
import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex items-center justify-between text-gray-700 py-8 border-t border-gray-100 text-lg">
          <p>© Symentum 2024. All rights reserved.</p>
          <div className="text-right flex justify-between gap-20">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
