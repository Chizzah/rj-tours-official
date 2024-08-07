import React from "react";

import Layout from "../components/Layout";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import HeritageWalks from "../components/Home/HeritageWalks";
import CommunityTours from "../components/Home/CommunityTours";
import BikeTours from "../components/Home/BikeTours";
import Testimonials from "../components/Home/Testimonials";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <HeritageWalks />
      <CommunityTours />
      <BikeTours />
      <Testimonials />
    </Layout>
  );
}
