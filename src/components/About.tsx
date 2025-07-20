import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImg from "@/assets/profile.png";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


  const skills = [
    { name: "HTML & CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "Figma & UI/UX", level: 55 }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative card-neon p-8 text-center">
                <div className="w-64 h-64 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full p-1">
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                      {/* Placeholder for profile image */}
                      <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <img
                          src={profileImg}
                          alt="Niraj Yadav"
                          className="w-40 h-40 rounded-full object-cover shadow-md"
                        />

                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 blur animate-pulse-glow" />
                </div>

                <h3 className="text-2xl font-bold text-glow mb-2">Niraj Yadav</h3>
                <p className="text-muted-foreground">CS Student & Aspiring Developer</p>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-lg text-foreground/90">
              <p>
                Hi, I'm Niraj, a final-year Computer Science student at ISMT College.
                I'm passionate about building modern, user-friendly web applications and
                learning through hands-on practice and experimentation.
              </p>

              <p>
                Currently, I'm exploring UI/UX design principles and backend development
                using Node.js and MongoDB. I believe in learning by doing and use tools
                like ChatGPT and online resources to enhance my understanding.
              </p>

              <p>
                I'm actively seeking internship opportunities and entry-level positions
                in Backend Development, UI/UX Design, or Full-Stack Web Development where
                I can contribute while continuing to grow my skills.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-glow-purple mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
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

export default About;