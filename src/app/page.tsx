import { companyData } from '@/data/company';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {companyData.features.showProjects && <Projects />}
      <Process />
      {companyData.features.showFAQ && <FAQ />}
      <Contact />
    </>
  );
}
