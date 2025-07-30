import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTypingEffect } from '../hooks/useTypingEffect';
import profileImage from '../assets/profile-image.jpg';

const Hero = () => {
  const typingText = useTypingEffect({
    text: "I am a Web Developer...!",
    speed: 150,
    deleteSpeed: 100,
    pauseTime: 2000
  });

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/pamusai',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/pamusai',
      label: 'LinkedIn'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:pai04102003@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:order-1 order-2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Pamu Sai</span>
            </motion.h1>

            {/* Animated Text */}
            <div className="text-2xl md:text-3xl mb-4 h-12">
              <div className="flex animate-fade-in">
                {"I am a Web Developer...!".split('').map((char, index) => (
                  <span
                    key={index}
                    className="text-primary font-semibold animate-bounce"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: '0.3s',
                      animationIterationCount: 'infinite',
                      animationDirection: 'alternate'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Full-stack developer passionate about creating beautiful, responsive web applications using modern technologies like React, Node.js, and MongoDB.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-card hover:shadow-glow transition-all duration-300"
              >
                View Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 pulse-glow"
              >
                Hire Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <a
                href="https://linkedin.com/in/pamu-sai"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <FaLinkedin className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <a
                href="https://github.com/pamusai04"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <FaGithub className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <a
                href="mailto:pamusai04102003@gmail.com"
                className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <FaEnvelope className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:order-2 order-1"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-glow">
                <img
                  src={profileImage}
                  alt="Pamu Sai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-20" />
              </div>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;