import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'BelleSpot',
      description: 'Beauty Parlors and Salons Discovery Platform with geolocation-based search, real-time availability tracking, and JWT authentication.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      technologies: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'CodeQuest',
      description: 'Online coding platform with Judge0 integration for executing code in multiple languages, featuring difficulty-based filtering and admin panel.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: [SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: 3,
      title: 'WebGIS Application',
      description: 'Interactive geospatial data visualization platform built with Leaflet.js and OpenLayers during internship at GeoInfy Solutions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: [SiReact, SiJavascript],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: [SiReact, SiNodedotjs, SiMongodb],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: [SiReact, SiNodedotjs, SiMongodb],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: [SiReact, SiJavascript],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with React and Framer Motion, featuring smooth animations and modern design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: [SiReact, SiTailwindcss, SiJavascript],
      liveLink: '#',
      githubLink: '#',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-card rounded-full text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-card rounded-full text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((Tech, index) => (
                    <div
                      key={index}
                      className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                    >
                      <Tech size={16} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/pamusai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-all duration-300"
          >
            <FaGithub />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;