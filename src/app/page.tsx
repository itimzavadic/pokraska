import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Audience } from "@/components/sections/Audience";
import { Result } from "@/components/sections/Result";
import { Lead } from "@/components/sections/Lead";
import { Scenario } from "@/components/sections/Scenario";
import { Advantages } from "@/components/sections/Advantages";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Contacts } from "@/components/sections/Contacts";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <Result />
        <Lead />
        <Scenario />
        <Advantages />
        <Pricing />
        <Gallery />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
