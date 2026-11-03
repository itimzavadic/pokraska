import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { CallFab } from "@/components/CallFab";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Audience } from "@/components/sections/Audience";
import { Result } from "@/components/sections/Result";
import { Lead } from "@/components/sections/Lead";
import { Scenario } from "@/components/sections/Scenario";
import { Advantages } from "@/components/sections/Advantages";
import { Pricing } from "@/components/sections/Pricing";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { Contacts } from "@/components/sections/Contacts";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-28">
        <Hero />
        <Audience />
        <Result />
        <Lead />
        <Scenario />
        <Advantages />
        <Pricing />
        <SocialProof />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
      <BottomNav />
      <CallFab />
    </>
  );
}
