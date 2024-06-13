import React from "react";

type ButtonProps = {
  mode?: "primary" | "secondary";
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
};

const Button: React.FC<ButtonProps> = ({
  mode = "primary",
  type = undefined,
  text,
}) => {
  const primaryClass =
    mode === "primary"
      ? "bg-stone-400 text-neutral-100 hover:bg-stone-300"
      : "bg-neutral-100 text-stone-400 hover:bg-neutral-200";

  return (
    <button
      type={type}
      className={`px-8 py-4 font-semibold uppercase border-none text-sm lg:text-md ${primaryClass} col-span-3`}
    >
      {text}
    </button>
  );
};

export default Button;
