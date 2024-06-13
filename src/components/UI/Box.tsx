import React from "react";

type BoxProps = {
  children: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="w-full text-center lg:w-10/12 lg:mx-auto 2xl:w-8/12">
      {children}
    </div>
  );
};

export default Box;
