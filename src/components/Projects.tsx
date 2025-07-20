import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Three.js featuring 3D animations, dark mode, and smooth scrolling. This very website!",
      image: "🌐",
      technologies: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/nirajyadav",
      demo: "#",
      featured: true,
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A simple yet effective task management application with CRUD operations, local storage, and intuitive UI design.",
      image: "📝",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      github: "https://github.com/nirajyadav",
      demo: "#",
      featured: true,
      status: "In Progress"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application fetching data from weather APIs with location-based forecasts and responsive design.",
      image: "🌤️",
      technologies: ["JavaScript", "APIs", "CSS Grid", "Async/Await"],
      github: "https://github.com/nirajyadav",
      demo: "#",
      featured: false,
      status: "Planned"
    },
    {
      id: 4,
      title: "Student Grade Calculator",
      description: "Academic project for calculating student grades with different weightings and generating reports.",
      image: "🎓",
      technologies: ["Java", "OOP", "File I/O", "Collections"],
      github: "https://github.com/nirajyadav",
      demo: "#",
      featured: false,
      status: "Completed"
    },
    {
      id: 5,
      title: "Blog Platform (Learning Project)",
      description: "Full-stack blog application to learn backend development with user authentication and content management.",
      image: "📖",
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/nirajyadav",
      demo: "#",
      featured: false,
      status: "Learning"
    },
    {
      id: 6,
      title: "UI/UX Design Portfolio",
      description: "Collection of UI/UX design projects and prototypes created while learning design principles and tools.",
      image: "🎨",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      github: "#",
      demo: "#",
      featured: false,
      status: "Ongoing"
    }
  ];


  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my learning journey through hands-on projects, from simple web pages 
            to full-stack applications. Each project represents a step forward in my development skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden card-neon ${
                project.featured ? 'lg:col-span-1 md:col-span-2' : ''
              }`}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                <span className="text-6xl">{project.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card/90 backdrop-blur-sm border border-secondary/30 rounded-lg hover:border-secondary hover:bg-secondary/10 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-secondary" />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-bold text-primary-foreground">
                    Featured
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    project.status === 'Learning' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    project.status === 'Planned' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                    'bg-muted/20 text-muted-foreground border border-muted/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-glow group-hover:text-glow-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-muted/50 border border-primary/20 rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-secondary hover:text-secondary-glow transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="btn-neon text-lg px-8 py-4">
            View All Projects on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;