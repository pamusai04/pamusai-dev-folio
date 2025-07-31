import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/pamusai04',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/saipamu/',
      label: 'LinkedIn'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:pamusai04102003@gmail.com',
      label: 'Email'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              &lt;Pamu Sai&gt;
            </h3>
            <p className="text-muted-foreground">
              Full-stack developer passionate about creating beautiful, responsive web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="font-medium">Email :</span> pamusai04102003@gmail.com
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Phone :</span> +91 7780489038
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <a
                href="https://linkedin.com/in/pamu-sai"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <FaLinkedin className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <a
                href="https://github.com/pamusai04"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <FaGithub className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <a
                href="mailto:pamusai04102003@gmail.com"
                className="group w-12 h-12 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <FaEnvelope className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm flex items-center space-x-2"
            >
              <span>© {currentYear} Pamu Sai. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.span>
              <span>and passion</span>
            </motion.p>
            
            <p className="text-muted-foreground text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;