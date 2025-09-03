import React from "react";

export default function Container({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-[90rem] mx-auto md:p-10 p-5">
      {children}
    </section>
  );
}
