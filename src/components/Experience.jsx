// components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      company: 'Midbrains Technology',
      role: 'Software Developer Intern',
      duration: 'June 2023 - Dec 2023',
      desc: 'Built and maintained 5+ production applications using React and SpringBoot'
    },
    {
      company: ' ICT Academy & OpenWeaver',
      role: 'Web Developer',
      duration: 'Oct 2023 - Nov 2023',
      desc: 'Developed responsive websites and web applications for 5+ clients'
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      duration: '2021 - 2022',
      desc: 'Created custom solutions for small businesses and startups'
    }
  ];

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Work <span className="text-secondary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-6 pb-8 border-b border-secondary 
                                      border-opacity-20 last:border-b-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r 
                                from-secondary to-accent flex items-center justify-center">
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                {idx !== experiences.length - 1 && (
                  <div className="w-1 h-16 bg-secondary bg-opacity-20 mt-4"></div>
                )}
              </div>
              <div className="pb-4">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-secondary font-semibold">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
                <p className="text-gray-300">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}