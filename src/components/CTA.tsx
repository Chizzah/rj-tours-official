import React from "react";

import { navigate } from "gatsby";

import Heading from "./UI/Heading";

type CTAProps = {
  link: string;
  text: string;
};

const CTA: React.FC<CTAProps> = ({ link, text }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full p-8 bg-stone-400 lg:py-16">
      <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
        <Heading as="h2" text="Book Your Tour Today" />
        <p className="text-md lg:text-lg text-neutral-100">
          Embark on a journey that goes beyond sightseeing. Experience the
          essence of Oudtshoorn through our community tours, where history,
          culture and sustainability converge.
        </p>
        <button
          className="w-full px-8 py-2 text-sm font-semibold uppercase lg:py-4 lg:px-16 bg-neutral-100 text-stone-400 lg:text-lg lg:w-96 hover:bg-neutral-200"
          onClick={() => navigate(link)}
        >
          {text}
        </button>
      </div>
    </section>
  );
};

export default CTA;
