import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from 'react-icons/si';
import ProjectDetail from './ProjectDetail';

const ProjectsNew = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project images - using placeholder images
  const projectImages = {
    projectEcommerce: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    projectLMS: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    projectWeather: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    projectTasks: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    projectMusic: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&h=400&fit=crop',
    projectSocial: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop'
  };

  const projects = [
    {
      id: 1,
      title: 'BelleSpot',
      image: projectImages.projectEcommerce,
      description: [
        'Full-stack beauty parlor discovery platform with geolocation',
        'Dual-role system (users & providers) with JWT authentication',
        'Interactive UI with Tailwind CSS showcasing live closing times',
        'Real-time availability tracking and location-based search'
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      links: {
        git: 'https://github.com/pamusai04/belleSpot',
        live: 'https://bellespot.onrender.com/signup'
      }
    },
    {
      id: 2,
      title: 'CodeQuest',
      image: projectImages.projectLMS,
      description: [
        'Online coding platform with Judge0 integration',
        'Problem filtering by difficulty/topic and test case evaluation',
        'Admin panel for problem management (CRUD operations)',
        'Comprehensive code evaluation with public/hidden test cases'
      ],
      skills: ['React', 'Node.js', 'Judge0 API', 'MongoDB', 'Tailwind CSS'],
      links: {
        git: 'https://github.com/pamusai04/CodeQuest',
        live: 'https://codequest-1jev.onrender.com/signup'
      }
    },
    {
      id: 3,
      title: 'Weather Forecast',
      image: projectImages.projectWeather,
      description: [
        'Real-time weather updates with clean interface',
        'Dynamic data fetching from weather API',
        'Responsive design with modern UI components',
        'Location-based weather information display'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      links: {
        git: 'https://github.com/pamusai04/weather-forecast',
        live: 'https://pamusai04.github.io/weather-forecast/'
      }
    },
    {
      id: 4,
      title: 'Tic-Tac-Toe',
      image: projectImages.projectTasks,
      description: [
        'Interactive 2-player game with responsive design',
        'Win condition detection and game state management',
        'Clean UI with smooth animations',
        'Cross-platform compatibility'
      ],
      skills: ['HTML', 'CSS', 'JavaScript'],
      links: {
        git: 'https://github.com/pamusai04/TicTacToe',
        live: 'https://pamusai04.github.io/TicTacToe/'
      }
    },
    {
      id: 5,
      title: 'To-Do App',
      image: projectImages.projectTasks,
      description: [
        'Task management with add/delete/completed states',
        'Local storage persistence for tasks',
        'Intuitive user interface for task organization',
        'Responsive design for mobile and desktop'
      ],
      skills: ['HTML', 'CSS', 'JavaScript'],
      links: {
        git: 'https://github.com/pamusai04/ToDo',
        live: 'https://pamusai04.github.io/ToDo/'
      }
    },
    {
      id: 6,
      title: 'StopWatch',
      image: projectImages.projectMusic,
      description: [
        'Precision time tracking with start/stop/reset',
        'Millisecond accuracy display',
        'Clean and minimal interface design',
        'Responsive controls for easy interaction'
      ],
      skills: ['HTML', 'CSS', 'JavaScript'],
      links: {
        git: 'https://github.com/pamusai04/stopWatch',
        live: 'https://pamusai04.github.io/stopWatch/'
      }
    },
    {
      id: 7,
      title: 'Rock Paper Scissors',
      image: projectImages.projectSocial,
      description: [
        'Classic game against computer AI',
        'Score tracking and animated results',
        'Interactive gameplay with smooth transitions',
        'Responsive design with modern styling'
      ],
      skills: ['HTML', 'CSS', 'JavaScript'],
      links: {
        git: 'https://github.com/pamusai04/RockPaperScissor',
        live: 'https://pamusai04.github.io/RockPaperScissor/'
      }
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
    <>
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
                onClick={() => setSelectedProject(project)}
                className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer"
              >
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
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-card rounded-full text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                    <motion.a
                      href={project.links.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
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
                    {project.description[0]}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                        +{project.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default ProjectsNew;