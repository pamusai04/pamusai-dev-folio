import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Eye, ExternalLink, X } from 'lucide-react';

const ProjectsNew = () => {
  const [expandedProject, setExpandedProject] = useState(null);

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

  const handleCardClick = (projectId) => {
    setExpandedProject(projectId);
  };

  const handleCloseCard = (e) => {
    e.stopPropagation();
    setExpandedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-elegant transition-all duration-300 cursor-pointer hover:-translate-y-2 animate-fade-in ${
                  expandedProject === project.id ? 'z-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCardClick(project.id)}
              >
                {/* Default Card View */}
                <div className={`${expandedProject === project.id ? 'hidden' : 'block'} h-80`}>
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center">
                        <Eye className="mx-auto mb-2 w-8 h-8 drop-shadow-lg" />
                        <p className="font-semibold text-gray-100 drop-shadow-md text-lg">Click me</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 h-32 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">Click to view details</p>
                  </div>
                </div>

                {/* Expanded Card View */}
                {expandedProject === project.id && (
                  <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setExpandedProject(null)}
                  >
                    <div
                      className="bg-background/95 backdrop-blur-md border border-primary/20 rounded-lg p-6 overflow-y-auto max-h-full w-full max-w-2xl animate-scale-in"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'rgba(0, 0, 0, 0.9)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                       {/* Project Image */}
                       <div className="relative mb-4">
                         <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-40 object-cover rounded-lg"
                         />
                         {/* Close Button positioned outside image */}
                         <button
                           onClick={handleCloseCard}
                           className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full transition-colors text-white shadow-lg z-10"
                         >
                           <X size={16} />
                         </button>
                       </div>

                      {/* Project Title */}
                      <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>

                      {/* Description Points */}
                      <div className="space-y-2 mb-6">
                        {project.description.map((desc, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-muted-foreground">{desc}</p>
                          </div>
                        ))}
                      </div>

                       {/* Skills */}
                       <div className="mb-6">
                         <h4 className="text-lg font-semibold mb-3 text-primary">Skills</h4>
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
                      <div className="flex gap-3">
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                          View Project
                        </a>
                        <a
                          href={project.links.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-background/50 hover:bg-background/70 text-foreground px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-border"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={16} />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsNew;