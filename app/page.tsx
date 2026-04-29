import Navbar from '@/components/site/navbar';
import Hero from '@/components/site/hero';
import Marquee from '@/components/site/marquee';
import Portfolio from '@/components/site/portfolio';
import BeforeAfter from '@/components/site/before-after';
import Differentials from '@/components/site/differentials';
import Process from '@/components/site/process';
import Learn from '@/components/site/learn';
import Testimonials from '@/components/site/testimonials';
import ForWho from '@/components/site/for-who';
import FinalCTA from '@/components/site/final-cta';
import Contact from '@/components/site/contact';
import Footer from '@/components/site/footer';
import WhatsAppFloat from '@/components/site/whatsapp-float';
import PricingTable from '@/components/site/PricingTable';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Portfolio />
      <BeforeAfter />
      <Differentials />
      <Process />
      <PricingTable />
      <Learn />
      <Testimonials />
      <ForWho />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
