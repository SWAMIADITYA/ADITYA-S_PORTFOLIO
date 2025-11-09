import React, { useState } from "react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Intership",
      issuer: "OpenWeaver",
      date: "Oct 2023",
      image: "/one_month_intership.png",
      description:
        "Completed Web Development Virtual Internship with ICT Academy & OpenWeaver",
    },
    {
      id: 2,
      title: "Cisco Certified Network Associate",
      issuer: "Udemy",
      date: "May 2022",
      image: "/CCNA.jpg",
      description:
        "Demonstrates proficiency in configuring, managing, and troubleshooting Cisco network devices.",
    },
    {
      id: 3,
      title: "Java Development Intership Offer Letter",
      issuer: "CODE CLAUSE",
      date: "March 2023",
      image: "Offer Letter.jpg",
      description:
        "",
    },
    {
      id: 4,
      title: "Data Structure Algorithm with JAVA",
      issuer: "APNA COLLEGE",
      date: "Feb 2023",
      image: "/DSA with Java.jpg",
      description:
        "l've earned my certificate in Data Structures and Algorithms with Java.",
    },
    {
      id: 5,
      title: "Java",
      issuer: "HACKERRANK",
      date: "May 2023",
      image: "/java_basic certificate.jpg",
      description:
        "",
    },
    {
      id: 6,
      title: "NPTEL SOFT SKILLS",
      issuer: "IIT ROORKEE",
      date: "Oct 2023",
      image: "NPTEL Soft Skills Certificate-min.jpg",
      description:
        "",
    },
    {
      id: 7,
      title: "SKILL DEVELOPMENT PROGRAM ON PYTHON",
      issuer: "GHRCEM",
      date: "Jan 2022",
      image: "skill_development_program_python.jpg",
      description:
        "",
    },
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certificates" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
          Certificates & Achievements
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-52 object-cover cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                <p className="text-sm text-gray-400">{cert.date}</p>
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="bg-gray-900 rounded-2xl p-6 max-w-lg mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="rounded-xl mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
              <p className="text-gray-400 mb-1">{selectedCertificate.issuer}</p>
              <p className="text-gray-400 mb-4">{selectedCertificate.date}</p>
              <p className="text-gray-300">{selectedCertificate.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
