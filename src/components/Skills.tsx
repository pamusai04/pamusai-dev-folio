import { motion } from 'framer-motion';
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaGitAlt, 
  FaJava 
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'C++', icon: FaJava, color: '#00599C' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'Redux.js', icon: FaReact, color: '#764ABC' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express.js', icon: FaNodeJs, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
              
              <div className="relative z-10 text-center space-y-4">
                <div className="flex justify-center">
                  <skill.icon 
                    className="text-5xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                style={{ 
                  background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'Express.js', 'RESTful APIs', 'MySQL', 'Bootstrap', 'PHP', 'Leaflet.js', 'GeoJSON'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;