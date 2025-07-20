import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Calendar, MapPin, Award } from 'lucide-react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Computer Science Student",
      company: "ISMT College",
      period: "2021 - Present",
      location: "Kathmandu, Nepal",
      description: "Final year Computer Science student focusing on software development, data structures, algorithms, and web technologies. Active participant in coding competitions and group projects."
    },
    {
      title: "Frontend Development Intern",
      company: "Local Tech Startup",
      period: "Summer 2024",
      location: "Kathmandu, Nepal",
      description: "3-month internship working on responsive web interfaces using HTML, CSS, and JavaScript. Collaborated with the design team to implement UI/UX improvements."
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      location: "Remote",
      description: "Building simple websites for local businesses and friends. Gaining practical experience in client communication and project management while developing technical skills."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "ISMT College",
      period: "2021 - 2025",
      location: "Kathmandu, Nepal",
      achievements: ["Expected: First Class Honors", "Relevant Coursework: Data Structures, Web Development, Database Systems", "Active in Tech Club"]
    }
  ];

  const handleDownloadResume = () => {
    // Create a dummy PDF download - in a real app, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '/niraj_yadav_resume.pdf'; // This would be a real PDF file in public folder
    link.download = 'Niraj_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My academic background, internship experience, and technical skills 
            as an aspiring developer ready for entry-level opportunities.
          </p>
          
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow text-lg px-8 py-4 flex items-center gap-3 mx-auto"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-neon p-8">
              <h3 className="text-2xl font-bold text-glow-purple mb-8 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-primary/30"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_hsl(180_100%_50%/0.5)]" />
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-primary">{exp.title}</h4>
                      <p className="text-secondary font-medium">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="card-neon p-8">
              <h3 className="text-2xl font-bold text-glow-purple mb-8 flex items-center gap-3">
                <Award className="w-6 h-6" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-3"
                >
                  <h4 className="text-lg font-bold text-primary">{edu.degree}</h4>
                  <p className="text-secondary font-medium">{edu.school}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-xs bg-muted/50 border border-secondary/20 rounded-full text-secondary"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="card-neon p-8">
              <h3 className="text-2xl font-bold text-glow-purple mb-6">Certifications</h3>
              
              <div className="space-y-4">
                {[
                  "JavaScript ES6+ Fundamentals",
                  "React Basics - Udemy Course",
                  "Node.js Essentials - FreeCodeCamp",
                  "UI/UX Design Principles - Coursera"
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border border-primary/10"
                  >
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;