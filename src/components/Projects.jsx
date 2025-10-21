// components/Projects.jsx
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Full-stack e-commerce solution with payment integration',
      tags: ['React', 'Tailwind'],
      link: 'https://commercecore.netlify.app/',
      github: 'https://github.com/SWAMIADITYA/CommerceCore_Application',
      image: '🛒'
    },
    {
      title: 'MyWallet Expense Tracker',
      desc: 'A full-stack finance app to track expenses, set budgets, and visualize spending through charts.',
      tags: ['React', 'SpringBoot', 'MySQL'],
      // link: '#',
      github: 'https://github.com/SWAMIADITYA/expense-tracker-react-springboot',
      image: '📊'
    },
    {
      title: 'Novel Approach for cryptocurrency price prediction using Machine Learning',
      desc: 'Developed a machine learning-based system to predict cryptocurrency prices using historical data and market indicators.',
      tags: ['Python', 'Node.js', 'Sqlite3'],
      link: '#1',
      github: '#2',
      image: '₿'
    },
     {
      title: 'ProExam – Smart Learning & NCERT Solutions Platform',
      desc: 'This project I build for My Client, that time i was in 2nd year',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://swamiaditya.github.io/Proyaxo_website/',
      github: 'https://github.com/SWAMIADITYA/Proyaxo_website',
      image: '📋'
    },

    {
      title: 'Currency Converter App',
      desc: 'Fast currency converter with live exchange rates for global currencies.',
      tags: ['FLUTTER'],
      // link: '',
      github: 'https://github.com/SWAMIADITYA/Currency_Converter_App',
      image: '💰'
    },

    {
      title: 'HealthCare Mart',
      desc: 'Comprehensive healthcare information and medical guidance for better health decisions.',
      tags: ['HTML', 'CSS', 'JAVASCRIPT'],
      link: 'https://swamiaditya.github.io/HealthCare_website1/',
      github: 'https://github.com/SWAMIADITYA/Currency_Converter_App',
      image: '⚕️'
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-800 bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured <span className="text-secondary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-slate-800 
                                      to-slate-900 rounded-lg overflow-hidden 
                                      border border-secondary border-opacity-10 
                                      hover:border-opacity-100 transition transform 
                                      hover:scale-105 hover:shadow-2xl 
                                      hover:shadow-secondary/20">
              
              {/* Project Image */}
              <div className="h-40 bg-gradient-to-r from-secondary to-accent 
                              flex items-center justify-center text-6xl 
                              group-hover:scale-110 transition">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary bg-opacity-10 
                                           text-secondary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
  {project.link && (
    <a href={project.link} 
       className="flex items-center gap-2 text-secondary hover:text-accent transition"
       target="_blank" rel="noopener noreferrer">
      Live <ExternalLink size={16} />
    </a>
  )}
  <a href={project.github} 
     className="flex items-center gap-2 text-secondary hover:text-accent transition"
     target="_blank" rel="noopener noreferrer">
    Code <Github size={16} />
  </a>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}