import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaHtml5 } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiCss3 } from 'react-icons/si';
import { Eye, ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleCardClick = (projectId) => {
    setExpandedProject(projectId);
  };

  const handleCloseCard = (e) => {
    e.stopPropagation();
    setExpandedProject(null);
  };

  const projectImages = {
    projectEcommerce: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    projectLMS: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    projectWeather: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    projectTasks: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    projectMusic: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    projectSocial: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  };

  const projects = [
    {
      id: 1,
      title: 'BelleSpot',
      image: projectImages.projectEcommerce,
      p_text:'Beauty Parlors and Salons Discovery Platform with geolocation-based search, real-time availability tracking, and JWT authentication.',
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
      },
      technologies:[SiJavascript,SiTailwindcss, SiReact, SiNodedotjs, SiMongodb]
    },
    {
      id: 2,
      title: 'CodeQuest',
      image: projectImages.projectLMS,
      p_text:'Online coding platform with Judge0 integration for executing code in multiple languages, featuring difficulty-based filtering and admin panel.',
      description: [
        'Online coding platform with Judge0 integration',
        'Problem filtering by difficulty/topic and test case evaluation',
        'Admin panel for problem management (CRUD operations)',
        'Comprehensive code evaluation with public/hidden test cases'
      ],
      skills: ['React', 'Node.js', 'Judge0 API', 'MongoDB', 'Tailwind CSS'],
      links: {
        git: 'https://github.com/pamusai04/CodeQuest',
        live: 'https://github.com/pamusai04/CodeQuest'
      },
      technologies:[SiJavascript,SiTailwindcss, SiReact, SiNodedotjs, SiMongodb]
    },
    {
      id: 3,
      title: 'Weather Forecast',
      image: projectImages.projectWeather,
      p_text:'A responsive weather web app that lets users search any city to view real-time weather updates',
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
      },
      technologies:[SiJavascript,FaHtml5,SiCss3]
    },
    {
      id: 4,
      title: 'Tic-Tac-Toe',
      image: projectImages.projectTasks,
      p_text: 'A classic 2-player game with real-time interactions and win detection. Fully responsive design with smooth UI animations.',
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
      },
      technologies:[SiJavascript,FaHtml5,SiCss3]
    },
    {
      id: 5,
      title: 'To-Do App',
      image: projectImages.projectTasks,
      p_text: 'A simple task manager to add, delete, and track your to-dos. Uses local storage and has a clean responsive UI.',
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
      },
      technologies:[SiJavascript,FaHtml5,SiCss3]
    },
    {
      id: 6,
      title: 'StopWatch',
      image: projectImages.projectMusic,
        p_text: 'A precision stopwatch with start, stop, and reset options. Features millisecond timing and minimal responsive UI.',
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
      },
      technologies:[SiJavascript,FaHtml5,SiCss3]
    },
    {
      id: 7,
      title: 'Rock Paper Scissors',
      image: projectImages.projectSocial,
      p_text: 'Play Rock Paper Scissors against the computer with score tracking. Animated results and mobile-friendly layout.',
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
      },
      technologies:[SiJavascript,FaHtml5,SiCss3]
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-elegant transition-all duration-300 cursor-pointer ${
                expandedProject === project.id ? 'z-50' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleCardClick(project.id)}
              animate={expandedProject === project.id ? {
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '600px',
                height: 'auto',
                maxHeight: '80vh',
                zIndex: 50
              } : {}}
            >
              {/* Default Card View */}
              <div className={`${expandedProject === project.id ? 'hidden' : 'block'} `}>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <Eye className="mx-auto mb-2 w-8 h-8 drop-shadow-lg" />
                      <p className="font-semibold text-gray-100 drop-shadow-md text-lg">View Details</p>
                    </div>
                  </div>
                </div>
                <div className='p-6'>
                  <div className=" flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-muted-foreground text-sm text-white line-clamp-2">{project.p_text}</p>
                  </div>
                  {/* Technologies */}
                  <div className="bottom-2 left-4 flex flex-wrap gap-2 pt-3">
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
              </div>

              {/* Expanded Card View */}
              {expandedProject === project.id && (
                <div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-1 sm:p-4"
                  onClick={() => setExpandedProject(null)}
                >
                  <div
                    className="relative bg-background/95 backdrop-blur-md border border-primary/20 rounded-lg p-2 overflow-y-auto max-w-4xl animate-scale-in"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: 'rgba(0, 0, 0, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {/* Close Button */}
                    <button
                      onClick={handleCloseCard}
                      className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors text-white shadow-md z-50 group"
                    >
                      <X size={20} className="text-red-400 group-hover:text-gray-200 " />
                    </button>

                    {/* Project Image */}
                    <div className="relative mb-6 h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg z-10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>

                    {/* Description Points */}
                    <div className="space-y-3 mb-4">
                      {project.description.map((desc, idx) => (
                        <div key={idx} className="flex gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2 text-primary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm bg-primary/20 text-primary font-medium rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row mt-6 justify-between">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                      <a
                        href={project.links.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background/50 hover:bg-background/70 text-foreground px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-border"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={16} />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/pamusai04"
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