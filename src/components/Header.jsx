import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header({ activeSection, setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navItems = ['about', 'skills', 'projects', 'certificates', 'experience', 'contact'];

  const handleNavClick = (item) => {
    setActiveSection(item);
    setMobileOpen(false);
    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-primary bg-opacity-95 backdrop-blur 
                       border-b border-secondary border-opacity-20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r 
                        from-secondary to-accent bg-clip-text text-transparent">
          Aditya_Swami
        </div>

        <nav className="hidden md:flex gap-8">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`capitalize font-semibold transition ${
                activeSection === item 
                  ? 'text-secondary' 
                  : 'text-gray-300 hover:text-secondary'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-secondary"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary bg-opacity-95 px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="capitalize text-gray-300 hover:text-secondary transition text-left"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}