import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/nirajyadav',
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/nirajyadav',
      color: 'hover:text-secondary'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:niraj.yadav@email.com',
      color: 'hover:text-primary'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand/Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Niraj Yadav</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Computer Science student passionate about web development and creating 
              innovative digital solutions. Always eager to learn and collaborate.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`flex items-center justify-center w-12 h-12 bg-muted/20 border border-border rounded-lg text-muted-foreground ${link.color} transition-all duration-300 hover:border-current hover:shadow-[0_0_20px_currentColor/0.3]`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-glow-purple mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Resume', href: '#resume' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Niraj Yadav. Built with using React, Three.js & Framer Motion
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;