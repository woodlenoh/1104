import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  const skills = ["HTML&CSS", 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', "Ruby", "Ruby on Rails"];
  skills.sort();
  
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills using Next.js and Tailwind CSS.',
      link: 'https://your-portfolio-link.com',
    },
    {
      title: 'E-commerce Store',
      description: 'A full-stack e-commerce application with product listings, cart functionality, and payment integration.',
      link: 'https://your-ecommerce-link.com',
    },
    {
      title: 'Blog Platform',
      description: 'A blog platform where users can create, edit, and view posts. Built with Next.js and Markdown support.',
      link: 'https://your-blog-link.com',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application using WebSocket, allowing users to join rooms and send messages.',
      link: 'https://your-chat-app-link.com',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="py-20 text-center">
        <h1 className="text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          woodlenoh
        </h1>
        <div className="flex justify-center gap-8 mt-8">
          <Link href="https://github.com/woodlenoh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-125">
            <FaGithub size={32} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-125">
            <FaLinkedin size={32} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-125">
            <FaTwitter size={32} />
          </Link>
        </div>
      </header>

      <section className="text-center px-8 py-20 bg-gray-800">
        <h2 className="text-4xl font-bold mb-8 tracking-wide">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I&apos;m a passionate web developer with a knack for creating sleek, modern websites and applications. I specialize in front-end development, focusing on performance, accessibility, and best practices.
        </p>
      </section>

      <section className="px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide">Skills</h2>
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-6">
            {skills.map((skill) => (
              <span key={skill} className="font-mono bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-full text-white font-medium shadow-lg transform transition hover:scale-105">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-8 space-y-4 shadow-lg transform transition hover:scale-105">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">Get In Touch</h2>
        <p className="text-gray-400 mb-8">Feel free to reach out for collaborations or just a friendly chat!</p>
        <a href="mailto:email@example.com" className="inline-flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition hover:scale-105">
          <MdEmail size={32} className="text-gray-400" />
          <span>email@example.com</span>
        </a>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} woodlenoh All rights reserved.</p>
      </footer>
    </main>
  );
}
