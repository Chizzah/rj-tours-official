import React from "react";

type TextProps = {
  text: string;
};

const Button: React.FC<TextProps> = ({ text }) => {
  return (
    <p className="text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
      {text}
    </p>
  );
};

export default Button;
