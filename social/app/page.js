import Link from 'next/link';
import Button from '../src/components/ui/Button';
import Card from '../src/components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Nav */}
      <nav className="flex justify-between items-center px-8 py-4 border-b bg-white shadow-sm">
  <h1 className="text-xl font-bold">Garnica.dev</h1>
  <ul className="flex gap-6">
    {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((link) => (
      <li key={link}>
        <Link href={`#${link.toLowerCase()}`} className="nav-link">
          {link}
        </Link>
      </li>
    ))}
  </ul>
</nav>


      {/* Hero Section */}
      <section id="home" className="flex-grow flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="text-center space-y-4 p-8">
          <h2 className="text-4xl font-bold">Hi, I'm Garnica!</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I'm a frontend developer passionate about building interactive, modern websites and web applications using React, Next.js, and Tailwind CSS. I specialize in clean UI, minimalistic designs, and intuitive user experiences. My diverse skill set includes music production, cybersecurity, AI integration, and creative problem-solving.
          </p>
          <Button>
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Social Media App">
            <p>Interactive UI with React and Next.js</p>
          </Card>
          <Card title="Portfolio Website">
            <p>Clean, minimal design with Tailwind CSS</p>
          </Card>
          <Card title="Music Sharing Platform">
            <p>Advanced interactivity and custom design</p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-8 text-center">Skills</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          {['React', 'Next.js', 'JavaScript', 'TailwindCSS', 'CSS', 'HTML', 'Git', 'Framer Motion'].map((skill) => (
            <Button key={skill}>{skill}</Button>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-semibold mb-4 text-center">About Me</h3>
        <p className="max-w-3xl mx-auto text-center">
          I'm deeply involved in technology and creativity. My experience includes frontend web development, cybersecurity foundations, AI integration, music production, and electronics tinkering. I thrive in environments that challenge my skills and encourage innovation, constantly striving to learn and implement cutting-edge solutions.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-50 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
        <p className="mb-4">Let's connect!</p>
        <div className="flex gap-4 justify-center">
          <Link href="https://instagram.com/kinggarnica_.xc._" target="_blank">
            <Button>Instagram</Button>
          </Link>
          <Link href="https://github.com/kingarnica" target="_blank">
            <Button>GitHub</Button>
          </Link>
          <Link href="mailto:latin@immusic.cc">
            <Button>Email</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center border-t">
        <p className="text-sm">&copy; {new Date().getFullYear()} Garnica.dev - All rights reserved.</p>
      </footer>
    </div>
  );
}
