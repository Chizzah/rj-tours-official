import React from "react";

import Layout from "../components/Layout";
import ContactForm from "../components/Forms/ContactForm";
import { StaticImage } from "gatsby-plugin-image";
import Heading from "../components/UI/Heading";

export default function Contact() {
  return (
    <Layout>
      <section className="w-full">
        <div className="relative w-full">
          <StaticImage
            className="w-full h-full xl:h-[50vh]"
            src="../images/contact-us-img.jpg"
            alt="hero image"
          />
          <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full">
            <Heading text="Contact us" />
          </div>
        </div>
        <div className="w-full h-full p-4 md:p-8 lg:p-16 bg-stone-400">
          <div className="xl:max-w-[864px] xl:mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
