import React from 'react';
import { FaDownload, FaArrowLeft, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1KQCWZynuMI1uXPxS-n2GOxmN3UrarvzU/view?usp=drive_link', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border py-4 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors hover:-translate-x-1 duration-300"
            >
              <FaArrowLeft />
              Back to Portfolio
            </button>
            <button
              onClick={downloadResume}
              className="bg-gradient-primary text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <FaDownload />
              Download PDF
            </button>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Header Section */}
          <div className="bg-gradient-primary text-white p-8">
            <h1 className="text-4xl font-bold mb-2 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              SAI PAMU
            </h1>
            <p className="text-xl mb-4 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Portfolio
            </p>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4 text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <FaGithub />
                <span>Github</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>pamusai04102003@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+91-7780489038</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin />
                <span>linkedin.com</span>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Education */}
            <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                EDUCATION
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-4 font-semibold">Degree</th>
                      <th className="text-left py-2 px-4 font-semibold">Specialization</th>
                      <th className="text-left py-2 px-4 font-semibold">Institute</th>
                      <th className="text-left py-2 px-4 font-semibold">Year</th>
                      <th className="text-left py-2 px-4 font-semibold">CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="py-2 px-4">B.Tech</td>
                      <td className="py-2 px-4">Computer Science & Engineering</td>
                      <td className="py-2 px-4">BESTIU</td>
                      <td className="py-2 px-4">2021-2025</td>
                      <td className="py-2 px-4">8.24</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="py-2 px-4">Intermediate(XII)</td>
                      <td className="py-2 px-4">Physics, Chemistry, & Mathematics</td>
                      <td className="py-2 px-4">A.P Model JR college</td>
                      <td className="py-2 px-4">2021</td>
                      <td className="py-2 px-4">7.21</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="py-2 px-4">Secondary(X)</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Z.P High School</td>
                      <td className="py-2 px-4">2019</td>
                      <td className="py-2 px-4">8.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">• Programming Languages:</span>
                  <span className="text-muted-foreground ml-2">C++, Java, JavaScript</span>
                </div>
                <div>
                  <span className="font-semibold">• Frontend Technologies:</span>
                  <span className="text-muted-foreground ml-2">HTML, CSS, Tailwind CSS, ReactJS, JavaScript, Bootstrap, TypeScript</span>
                </div>
                <div>
                  <span className="font-semibold">• Backend Technologies:</span>
                  <span className="text-muted-foreground ml-2">Node.js, Express.js, RESTful APIs</span>
                </div>
                <div>
                  <span className="font-semibold">• Databases & Tools:</span>
                  <span className="text-muted-foreground ml-2">SQL, MongoDB, Git (Version Control)</span>
                </div>
                <div>
                  <span className="font-semibold">• Data Structures & Algorithms:</span>
                  <span className="text-muted-foreground ml-2">Strong understanding and implementation in C++</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                PROJECTS
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">• Ride-Sharing (Full-Stack Web Application) [College Project]</h3>
                  <ul className="text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>◦ Created a multi-role platform (User/Driver/Admin) with MySQL database for managing ride bookings and approvals.</li>
                    <li>◦ Implemented driver onboarding with document uploads (license, vehicle details) and admin approval workflow.</li>
                    <li>◦ Developed user features: ride search, booking system, and driver matching based on location/city.</li>
                    <li>◦ Built secure authentication for all roles with form validations (email, mobile, password strength)</li>
                    <li>◦ <span className="font-semibold">Tech Stack:</span> PHP, MySQL, JavaScript, Bootstrap, HTML/CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">• Social Media Application (Full-Stack Web Application) [Self Project]</h3>
                  <ul className="text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>◦ <span className="font-semibold">User Management:</span> Implemented secure authentication (JWT), registration, login, and password recovery.</li>
                    <li>◦ <span className="font-semibold">Post Interactions:</span> Developed CRUD operations for posts (create, edit, delete) and engagement features (likes, comments).</li>
                    <li>◦ <span className="font-semibold">Profile System:</span> Designed user profiles with customizable details and activity tracking.</li>
                    <li>◦ <span className="font-semibold">Backend Security:</span> Built a secure Node.js API with MongoDB for data storage, ensuring protected user operations.</li>
                    <li>◦ <span className="font-semibold">Tech Stack:</span> React.js, Node.js, Express, MongoDB, JWT, RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                WORK EXPERIENCE/INTERNSHIPS
              </h2>
              <div>
                <h3 className="text-xl font-semibold">• Web Developer Intern [GeoInfy Solutions]</h3>
                <p className="text-primary font-medium mb-2">Sep-Dec 2023</p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>◦ Developed interactive WebGIS applications using Leaflet.js and OpenLayers for geospatial data visualization.</li>
                  <li>◦ Built efficient geospatial data management systems with GeoJSON, MySQL, and PHP, for storage and dynamic display.</li>
                  <li>◦ Designed intuitive user interfaces with custom map controls and interactive layer toggles.</li>
                  <li>◦ <span className="font-semibold">Tech Stack:</span> JavaScript, HTML/CSS, Leaflet.js, GeoJSON, MySQL, PHP.</li>
                </ul>
              </div>
            </section>

            {/* Achievements */}
            <section className="animate-fade-in" style={{ animationDelay: '1s' }}>
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                ACHIEVEMENTS
              </h2>
              <div>
                <h3 className="text-xl font-semibold">• Solved 200+ Coding Problems with 90% Accuracy [Problem Solving]</h3>
                <ul className="text-muted-foreground mt-2 space-y-1 ml-4">
                  <li>◦ Practiced and solved over 200 coding problems on platforms like LeetCode, Code 360 by Coding Ninjas and GeeksforGeeks, focusing on Data Structures and Algorithm optimization.</li>
                  <li>◦ <span className="font-semibold">LeetCode:</span> SaiLeetCode</li>
                  <li>◦ <span className="font-semibold">GeeksforGeeks:</span> SaiGFG</li>
                  <li>◦ <span className="font-semibold">Code 360 by Coding Ninjas:</span> SaiCode360</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 p-8 animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <a
              href="https://linkedin.com/in/pamu-sai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-2 bg-primary/10"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <FaLinkedin className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
            </a>
            
            <a
              href="https://github.com/pamusai04"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-2 bg-primary/10"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <FaGithub className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
            </a>
            
            <a
              href="mailto:pamusai04102003@gmail.com"
              className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden hover:scale-110 hover:-translate-y-2 bg-primary/10"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <FaEnvelope className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;