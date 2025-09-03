import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function CTAButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}) {
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white text-gray-950",
  };
  return (
    <Link
      href={"/contact"}
      className={clsx(
        "inline-flex items-center p-2.5 pl-5 gap-4 rounded-full md:font-normal font-medium",
        variants[variant]
      )}
    >
      <span>{children || "Let's Collaborate"}</span>
      <span className="inline-block p-2 bg-white rounded-full">
        <ArrowUpRight className="text-gray-950" size={18} color="#1E1E1F" />
      </span>
    </Link>
  );
}
