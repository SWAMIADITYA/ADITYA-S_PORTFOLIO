// components/Skills.jsx
export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3',]
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'MySQL', 'MongoDB', 'Firebase', 'REST API']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'CI/CD']
    }
  ];

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Technical <span className="text-secondary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800 bg-opacity-50 p-8 rounded-lg 
                                      border border-secondary border-opacity-10 
                                      hover:border-opacity-50 transition">
              <h3 className="text-2xl font-bold text-secondary mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}