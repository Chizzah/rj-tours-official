import React from "react";

type HeadingProps = {
  mode?: "primary" | "secondary";
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ mode = "primary", as, text }) => {
  const primaryClass =
    mode === "primary" ? "text-neutral-100" : "text-stone-400";

  switch (as) {
    case "h2":
      return (
        <h2
          className={`text-2xl font-semibold uppercase lg:text-3xl ${primaryClass}`}
        >
          {text}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`text-xl font-semibold uppercase lg:text-2xl ${primaryClass}`}
        >
          {text}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`text-lg font-semibold uppercase lg:text-xl ${primaryClass}`}
        >
          {text}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`text-md font-semibold uppercase lg:text-lg ${primaryClass}`}
        >
          {text}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`text-xs font-semibold uppercase lg:text-sm ${primaryClass}`}
        >
          {text}
        </h6>
      );
    default:
      return (
        <h1
          className={`text-4xl font-semibold uppercase lg:text-5xl ${primaryClass}`}
        >
          {text}
        </h1>
      );
  }
};

export default Heading;
