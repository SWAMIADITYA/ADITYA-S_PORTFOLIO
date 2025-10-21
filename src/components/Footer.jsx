// components/Footer.jsx
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-secondary border-opacity-20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-gray-400">© 2025 Aditya Swami. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/SWAMIADITYA" className="text-gray-400 hover:text-secondary transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aditya-swami-67b8b7221/" className="text-gray-400 hover:text-secondary transition">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/?lang=en#/" className="text-gray-400 hover:text-secondary transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}