import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import Header from './Header';

const Resume = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/pamusai',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/pamusai',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:pai04102003@gmail.com',
      label: 'Email',
      color: '#EA4335'
    }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text">Pamu Sai</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-6"
            >
              Full Stack Web Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <span className="text-muted-foreground">📧 pamusai04102003@gmail.com</span>
              <span className="text-muted-foreground">📱 +91-7780489038</span>
            </motion.div>
            
            {/* Download Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1KQCWZynuMI1uXPxS-n2GOxmN3UrarvzU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-card hover:shadow-glow transition-all duration-300"
            >
              <FaDownload />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Resume Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-12"
          >
            {/* Education */}
            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Education</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold">B.Tech Computer Science & Engineering</h3>
                  <p className="text-muted-foreground">BESTIU • 2021-2025 • CGPA: 8.14</p>
                </div>
                <div className="border-l-4 border-primary/60 pl-6">
                  <h3 className="text-lg font-semibold">Intermediate (XII)</h3>
                  <p className="text-muted-foreground">A.P Model JR College • 2021 • 7.21%</p>
                </div>
                <div className="border-l-4 border-primary/40 pl-6">
                  <h3 className="text-lg font-semibold">Secondary (X)</h3>
                  <p className="text-muted-foreground">Z.P High School • 2019 • 8.8 CGPA</p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                  <p className="text-muted-foreground">C++, Java, JavaScript</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Frontend Technologies</h3>
                  <p className="text-muted-foreground">HTML, CSS, Tailwind CSS, ReactJS, JavaScript, Bootstrap, TypeScript</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Backend Technologies</h3>
                  <p className="text-muted-foreground">Node.js, Express.js, RESTful APIs</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Databases & Tools</h3>
                  <p className="text-muted-foreground">SQL, MongoDB, Git (Version Control)</p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Work Experience</h2>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold">Web Developer Intern</h3>
                <p className="text-muted-foreground mb-2">GeoInfy Solutions • Sep-Dec 2023</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Developed interactive WebGIS applications using Leaflet.js and OpenLayers</li>
                  <li>Built efficient geospatial data management systems with GeoJSON, MySQL, and PHP</li>
                  <li>Designed intuitive user interfaces with custom map controls</li>
                </ul>
              </div>
            </section>

            {/* Achievements */}
            <section className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Achievements</h2>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold">Solved 200+ Coding Problems</h3>
                <p className="text-muted-foreground mb-2">Problem Solving with 90% Accuracy</p>
                <p className="text-muted-foreground">Practiced on LeetCode, Code 360 by Coding Ninjas and GeeksforGeeks, focusing on Data Structures and Algorithm optimization.</p>
              </div>
            </section>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6 mt-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-4 rounded-full text-2xl transition-all duration-300"
                style={{ 
                  backgroundColor: `${social.color}20`,
                  color: social.color
                }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Resume;