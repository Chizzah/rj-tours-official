import React from "react";

import Layout from "../components/Layout";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import HeritageWalks from "../components/Home/HeritageWalks";
import CommunityTours from "../components/Home/CommunityTours";
import BikeTours from "../components/Home/BikeTours";
import Testimonials from "../components/Home/Testimonials";
import ContactForm from "../components/Forms/ContactForm";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <HeritageWalks />
      <CommunityTours />
      <BikeTours />
      <Testimonials />
      <section className="px-4 py-8 text-neutral-100 bg-stone-400">
        <ContactForm />
      </section>
    </Layout>
  );
}
