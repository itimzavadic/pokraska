import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { Hero } from "@/components/sections/Hero";
import { Audience } from "@/components/sections/Audience";
import { Result } from "@/components/sections/Result";
import { Lead } from "@/components/sections/Lead";
import { Advantages } from "@/components/sections/Advantages";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
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
        <Advantages />
        <Pricing />
        <Gallery />
        <Contacts />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
