import React from "react";

type SectionProps = {
  mode?: "primary" | "secondary";
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ mode = "primary", children }) => {
  const primaryClass =
    mode === "primary"
      ? "bg-stone-400 text-neutral-100"
      : "bg-neutral-100 text-stone-400";

  return (
    <div
      className={`${primaryClass} w-full p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20`}
    >
      {children}
    </div>
  );
};

export default Section;
