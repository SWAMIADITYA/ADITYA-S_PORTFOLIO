// // components/Contact.jsx
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { useState } from 'react';
// import emailjs from 'emailjs-com';


// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//   emailjs
//     .send(
//       'service_i14zsff',        // Replace with your EmailJS service ID
//       'template_uzs13bf',       // Replace with your EmailJS template ID
//       formData,                 // This sends name, email, message
//       'I-Z9PPQEv835I_Iix'         // Replace with your public key
//     )
//     .then(
//       (response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       },
//       (error) => {
//         console.log('FAILED...', error);
//         alert('Failed to send message. Please try again later.');
//       }
//     );
//   };

//   return (
//     <section className="py-20 px-6 bg-slate-800 bg-opacity-30">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-white mb-12 text-center">
//           Let's <span className="text-secondary">Connect</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
//             <div className="space-y-6">
//               <div className="flex gap-4">
//                 <Mail className="text-secondary flex-shrink-0" size={24} />
//                 <div>
//                   <p className="text-gray-400 text-sm">Email</p>
//                   <p className="text-white font-semibold">adityaswami.it@gmail.com</p>
//                 </div>
//               </div>
              
//               <div className="flex gap-4">
//                 <Phone className="text-secondary flex-shrink-0" size={24} />
//                 <div>
//                   <p className="text-gray-400 text-sm">Phone</p>
//                   <p className="text-white font-semibold">+91 9730709497</p>
//                 </div>
//               </div>
              
//               <div className="flex gap-4">
//                 <MapPin className="text-secondary flex-shrink-0" size={24} />
//                 <div>
//                   <p className="text-gray-400 text-sm">Location</p>
//                   <p className="text-white font-semibold">Pune, India</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-6 py-3 bg-slate-800 bg-opacity-50 border 
//                            border-secondary border-opacity-20 rounded-lg 
//                            text-white placeholder-gray-500 focus:border-secondary 
//                            focus:outline-none transition"
//                 required
//               />
              
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-6 py-3 bg-slate-800 bg-opacity-50 border 
//                            border-secondary border-opacity-20 rounded-lg 
//                            text-white placeholder-gray-500 focus:border-secondary 
//                            focus:outline-none transition"
//                 required
//               />
              
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full px-6 py-3 bg-slate-800 bg-opacity-50 border 
//                            border-secondary border-opacity-20 rounded-lg 
//                            text-white placeholder-gray-500 focus:border-secondary 
//                            focus:outline-none transition resize-none"
//                 required
//               />
              
//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-gradient-to-r from-secondary 
//                            to-accent text-white font-semibold rounded-lg 
//                            hover:shadow-lg hover:shadow-secondary/50 transition 
//                            transform hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 Send Message <Send size={20} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/Contact.jsx
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_i14zsff',        // Replace with your EmailJS service ID
        'template_iyscwp9',       // Replace with your EmailJS template ID
        formData,                 // This sends name, email, message
        'I-Z9PPQEv835I_Iix'       // Replace with your public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section className="py-20 px-6 bg-slate-800 bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Let's <span className="text-secondary">Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">adityaswami.it@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 9730709497</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">Pune, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-slate-800 bg-opacity-50 border 
                           border-secondary border-opacity-20 rounded-lg 
                           text-white placeholder-gray-500 focus:border-secondary 
                           focus:outline-none transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-slate-800 bg-opacity-50 border 
                           border-secondary border-opacity-20 rounded-lg 
                           text-white placeholder-gray-500 focus:border-secondary 
                           focus:outline-none transition"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-6 py-3 bg-slate-800 bg-opacity-50 border 
                           border-secondary border-opacity-20 rounded-lg 
                           text-white placeholder-gray-500 focus:border-secondary 
                           focus:outline-none transition resize-none"
                required
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-secondary 
                           to-accent text-white font-semibold rounded-lg 
                           hover:shadow-lg hover:shadow-secondary/50 transition 
                           transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
