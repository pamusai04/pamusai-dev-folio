import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTypingEffect } from '../hooks/useTypingEffect';
import profileImage from '../assets/profile-image.jpg';

const Hero = () => {
  const typingText = useTypingEffect({
    text: "I am a Web Developer...!",
    speed: 10,
    deleteSpeed: 10,
    pauseTime: 2000
  });
  const animatedText = "I am a Web Developer...!";
  
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
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:order-1 order-2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Pamu Sai</span>
            </motion.h1>

            {/* Animated Text */}
            <div className="text-xl sm:text-2xl md:text-3xl mb-4 h-8 sm:h-12">
              <motion.div
                className="flex"
                initial="hidden"
                animate="visible"
              >
                {animatedText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="text-primary font-semibold"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg"
            >
              Full-stack developer passionate about creating beautiful, responsive web applications using modern technologies like React, Node.js, and MongoDB.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-card hover:shadow-glow transition-all duration-300 text-center"
              >
                View Resume
              </motion.a>
              
              <motion.a
                href="mailto:pamusai04102003@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 pulse-glow text-center"
              >
                Hire Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <a
                href="https://www.linkedin.com/in/saipamu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary hover:scale-110 hover:-translate-y-1"
              >
                <FaLinkedin className="text-lg sm:text-xl text-primary/60 hover:text-primary transition-colors duration-300" />
              </a>
              
              <a
                href="https://github.com/pamusai04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary hover:scale-110 hover:-translate-y-1"
              >
                <FaGithub className="text-lg sm:text-xl text-primary/60 hover:text-primary transition-colors duration-300" />
              </a>
              
              <a
                href="mailto:pamusai04102003@gmail.com"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary hover:scale-110 hover:-translate-y-1"
              >
                <FaEnvelope className="text-lg sm:text-xl text-primary/60 hover:text-primary transition-colors duration-300" />
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
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-glow">
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