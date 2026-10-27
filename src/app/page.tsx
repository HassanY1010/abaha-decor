import dynamic from 'next/dynamic';
import { companyData } from '@/data/company';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Process } from '@/components/sections/Process';

// Code splitting for below-the-fold interactive components (preserves SSR for SEO while deferring client JS execution)
const Projects = dynamic(() => import('@/components/sections/Projects').then((m) => m.Projects));
const FAQ = dynamic(() => import('@/components/sections/FAQ').then((m) => m.FAQ));
const Contact = dynamic(() => import('@/components/sections/Contact').then((m) => m.Contact));

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

