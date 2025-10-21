// components/About.jsx
export default function About() {
  return (
    <section className="py-20 px-6 bg-slate-800 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About <span className="text-secondary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with 3+ years of experience 
              building web applications. I love turning complex problems into 
              simple, beautiful solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              When I'm not coding, you'll find me learning new technologies, 
              contributing to open source, or sharing knowledge with the community.
            </p>
            <div className="space-y-3">
              <p className="text-gray-300"><span className="text-secondary font-bold">📍 Location:</span> India</p>
              <p className="text-gray-300"><span className="text-secondary font-bold">💼 Experience:</span> 3+ Years</p>
              <p className="text-gray-300"><span className="text-secondary font-bold">🎓 Education:</span> B.Tech in IT</p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-secondary to-accent p-8 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-100">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-accent to-secondary p-8 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-100">Happy Clients</div>
            </div>
            <div className="bg-gradient-to-br from-secondary to-accent p-8 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-100">Satisfaction Rate</div>
            </div>
            <div className="bg-gradient-to-br from-accent to-secondary p-8 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}