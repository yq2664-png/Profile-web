import { useEffect, useRef } from 'react';
import { useNavOverVideo } from '../hooks/useNavOverVideo';
import { useAOS } from '../hooks/useAOS';
import { useHeroReveal } from '../hooks/useHeroReveal';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import CoverVideo from '../components/home/CoverVideo';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import WorkSection from '../components/home/WorkSection';
import ExplorationSection from '../components/home/ExplorationSection';
import ContactSection from '../components/home/ContactSection';
import '../styles/home.css';

export default function Home() {
  const coverRef = useRef(null);
  const overVideo = useNavOverVideo(coverRef);

  useAOS();
  useHeroReveal();

  useEffect(() => {
    document.title = 'Yue Qin — Designer & Creative Coder';
  }, []);

  return (
    <>
      <Nav overVideo={overVideo} />
      <CoverVideo ref={coverRef} />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ExplorationSection />
      <ContactSection />
      <Footer />
    </>
  );
}
