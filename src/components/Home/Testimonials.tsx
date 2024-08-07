import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

export default function Testimonials() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <section className="py-8 lg:py-16 bg-stone-400">
      <h2 className="px-8 mb-4 text-xl font-semibold uppercase text-neutral-100 lg:text-3xl lg:mb-8 lg:text-center">
        Testimonials
      </h2>
      <div className="lg:mx-auto lg:w-[1240px]">
        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide">
            <div className="flex flex-col justify-between p-8 m-4 shadow text-stone-400 bg-neutral-100 h-72 lg:w-96 lg:h-80">
              <p className="mb-4 text-sm">
                Utmost professionalism! Well structured and very informative
                tour. Such an eye opening experience, from all the sites we had
                visited to the moment our tour had ended. Never in my life I
                would have thought that the different communities in the
                townships of Oudtshoorn were and still are experiencing these
                heartbreaking circumstances.
              </p>
              <div className="flex items-center gap-2 rounded-full">
                <StaticImage
                  className="rounded-full"
                  src="../../images/matthew-testimonial.jpg"
                  alt="Matthew Stalmeester"
                />
                <h3 className="font-semibold uppercase">Matthew Stalmeester</h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="flex flex-col justify-between p-8 m-4 shadow text-stone-400 bg-neutral-100 h-72 lg:w-96 lg:h-80">
              <p className="mb-4 text-sm">
                My name is Stephan Penderis and I would just like to share my
                experience that I had on a tour through some of the outer parts
                of Oudtshoorn with Roydin. I will start off by saying that I
                felt welcomed and comfortable right of the bat till the end of
                our journey. This was definitely worth my time and I can
                recommend anyone to sign up for a tour.
              </p>
              <div className="flex items-center gap-2 rounded-full">
                <StaticImage
                  className="rounded-full"
                  src="../../images/stephan-testimonial.jpg"
                  alt="Stephan Penderis"
                />
                <h3 className="font-semibold uppercase">Stephan Penderis</h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="flex flex-col justify-between p-8 m-4 shadow text-stone-400 bg-neutral-100 h-72 lg:w-96 lg:h-80">
              <p className="mb-4 text-sm">
                Utmost professionalism! Well structured and very informative
                tour. Such an eye opening experience, from all the sites we had
                visited to the moment our tour had ended. Never in my life I
                would have thought that the different communities in the
                townships of Oudtshoorn were and still are experiencing these
                heartbreaking circumstances.
              </p>
              <div className="flex items-center gap-2 rounded-full">
                <StaticImage
                  className="rounded-full"
                  src="../../images/matthew-testimonial.jpg"
                  alt="Matthew Stalmeester"
                />
                <h3 className="font-semibold uppercase">Matthew Stalmeester</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
