import Image from "next/image";
import Link from "next/link";
import CTAButton from "./cta-button";
import { Menu } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
];
export default function Header() {
  return (
    <header className="w-full max-w-[90rem] mx-auto fixed md:px-20 px-10 md:top-18 top-12 left-1/2 -translate-x-1/2">
      <div className="flex items-center justify-between">
        <Image
          height={127}
          width={515}
          src={"/logo.svg"}
          alt="Symentum Logo"
          className="md:w-32 w-24 h-auto"
        />
        <div className="hidden bg-[#737373]/8 py-3 px-6 rounded-full max-w-[40rem] w-full md:flex items-center justify-between">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-950">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="block md:hidden">
          <button type="button">
            <Menu color="" />
          </button>
        </div>
        <div className="hidden md:block">
          <CTAButton variant="primary">{"Let's Collaborate"}</CTAButton>
        </div>
      </div>
    </header>
  );
}
