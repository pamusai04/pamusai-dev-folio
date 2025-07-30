import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectsNew from '../components/ProjectsNew';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Skills />
      <ProjectsNew />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
