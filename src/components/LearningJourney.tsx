import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Code, Users, Lightbulb, Target, Rocket } from 'lucide-react';

const LearningJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const journeySteps = [
    {
      icon: BookOpen,
      title: "Academic Foundation",
      description: "Building core CS concepts through coursework at ISMT College",
      skills: ["Data Structures", "Algorithms", "OOP Concepts"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Self-Directed Learning",
      description: "Exploring web development through online resources and practice",
      skills: ["HTML/CSS", "JavaScript", "React Basics"],
      color: "from-primary to-primary-glow"
    },
    {
      icon: Lightbulb,
      title: "AI-Assisted Learning",
      description: "Using ChatGPT and AI tools to accelerate learning and problem-solving",
      skills: ["Code Debugging", "Best Practices", "Project Ideas"],
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: Target,
      title: "Hands-On Projects",
      description: "Learning by building real projects and experimenting with new technologies",
      skills: ["Node.js", "MongoDB", "Git/GitHub"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Engaging with developer communities and seeking mentorship",
      skills: ["Code Reviews", "Open Source", "Networking"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: "Career Preparation",
      description: "Preparing for internships and building professional portfolio",
      skills: ["Portfolio", "Resume", "Interview Prep"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="learning" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My path of continuous learning and growth in computer science and web development, 
            embracing both traditional education and modern learning approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative card-neon p-6 h-full"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-glow">{step.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{step.description}</p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Focus Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-muted/30 border border-primary/20 rounded-full text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-muted/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 card-neon p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-glow-purple mb-4">My Learning Philosophy</h3>
          <p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            "Learning never stops in tech. I believe in combining formal education with self-directed learning, 
            leveraging AI tools for efficiency, and building projects to solidify understanding. Every challenge 
            is an opportunity to grow, and every project teaches something new."
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium">
              🎯 Learn by Doing
            </span>
            <span className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary font-medium">
              🤖 AI-Assisted Learning
            </span>
            <span className="px-4 py-2 bg-muted/20 border border-border rounded-full text-foreground font-medium">
              🚀 Continuous Growth
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningJourney;