import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import RankBoard from "@/components/RankBoard";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <RankBoard />
        <Manifesto />
        <Services />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
