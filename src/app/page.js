import Image from "next/image";
import { Hero } from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import OurTeams from "./components/OurTeam";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <OurTeams />
      <Testimonial />
    </>
  );
}
