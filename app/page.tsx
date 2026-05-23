"use client";

import { motion } from "framer-motion";
import { Mail, Download, ExternalLink } from "lucide-react";

export default function Home() {

  const projects = [
    {
      title: "Urban Threads Shopify Store",

      desc:
        "A fully functional Shopify e-commerce store with product variants, collections, pricing and checkout setup.",

      tech: "Shopify, Liquid, HTML, CSS",

      github:
        "https://github.com/NagullaSaiLahari3281/Urban-threads-shopify-store",

      live:
        "https://urban-threads-10322.myshopify.com/",
    },

    {
      title: "LPG Leakage Detection Website",

      desc:
        "Website explaining an Arduino and MQ-2 sensor based gas leakage detection system with exhaust fan automation.",

      tech: "HTML, CSS, Arduino, MQ-2 Sensor",

      live:
        "https://nagullasailahari3281.github.io/Gas-Leakage/",
    },

    {
      title: "Hotel Booking App",

      desc:
        "A responsive hotel booking web application with modern UI and booking features.",

      tech: "HTML, CSS, JavaScript",

      live:
        "https://nagullasailahari3281.github.io/Hotel-Booking-App/",
    },

    {
      title: "Food Delivery App",

      desc:
        "A food delivery website with menu browsing and responsive user interface.",

      tech: "HTML, CSS, JavaScript",

      live:
        "https://nagullasailahari3281.github.io/food-delivery-app/",
    },

    {title: "Movie Finder App",

desc:
  "A movie search application with a responsive and user-friendly interface to explore movie details.",

tech: "HTML, CSS, JavaScript",
      
    },
  ];

  const skills = [
    "💻 HTML",
    "🎨 CSS",
    "⚡ JavaScript",
    "🅱️ Bootstrap",
    "🛍 Shopify",
    "🟢 Node.js Basics",
    "🌐 GitHub",
    "🐍 Python",
    "🧠 IoT",
    "🗄 MySQL",
  ];

  return (
    <main className="min-h-screen bg-[#0f1020] text-white">

      {/* NAVBAR */}

      <nav className="fixed top-0 z-50 w-full bg-[#0f1020]/80 backdrop-blur-md border-b border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold text-pink-400">
            Sai Lahari
          </h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-pink-400 mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">

              Sai Lahari
              <span className="text-purple-400">
                {" "}Nagulla
              </span>

            </h1>

            <h2 className="text-2xl mt-4 text-gray-300">
              Frontend Developer | Shopify Developer
            </h2>

            <p className="mt-5 text-gray-400 max-w-xl">

              B.Tech Computer Science student skilled in HTML, CSS,
              JavaScript and Shopify e-commerce development.
              Passionate about building modern and responsive
              web applications.

            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-semibold"
              >
                View Projects
              </a>

              <a
                href="/sailaharinagulla_resume.pdf"
                target="_blank"
                className="px-6 py-3 rounded-full border border-white/20 flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="w-72 h-72 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-1 shadow-2xl">

              <div className="w-full h-full rounded-full bg-[#15162b] flex items-center justify-center text-6xl font-bold text-pink-300">

                SL

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="py-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-8">
            About Me
          </h2>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">

            <p className="text-gray-300 leading-8 text-center">
             I am a passionate Computer Science Engineering student with strong interest in Web Development and Shopify Development. 
              Skilled in HTML, CSS, JavaScript and Python, I enjoy building responsive and user-friendly web applications. 
              I have worked on frontend and IoT-based projects and participated in internships, hackathons and technical events.
              I am continuously improving my technical, problem-solving and teamwork skills while exploring modern web technologies and software development.


        

            </p>

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section className="py-20 px-6 bg-white/5">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Education
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-3xl bg-[#15162b] border border-white/10 text-center">

              <h3 className="text-xl font-semibold text-pink-400">
                🎓 B.Tech - CSE
              </h3>

              <p className="text-gray-400 mt-3">
                QIS College of Engineering and Technology<br></br>
                Pursuing Computer Science Engineering
              </p>

            </div>

            <div className="p-6 rounded-3xl bg-[#15162b] border border-white/10 text-center">

              <h3 className="text-xl font-semibold text-pink-400">
                📘 Intermediate
              </h3>

              <p className="text-gray-400 mt-3">
                Narayana Junior College, Ongole<br></br>
                Secured 92% in Intermediate
              </p>

            </div>

            <div className="p-6 rounded-3xl bg-[#15162b] border border-white/10 text-center">

              <h3 className="text-xl font-semibold text-pink-400">
                🏆 SSC
              </h3>

              <p className="text-gray-400 mt-3">
                Oxford EM High School, Ongole<br></br>
                Secured 100% in SSC Board Examination
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section id="skills" className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

            {skills.map((skill) => (

              <motion.div
                whileHover={{ scale: 1.05 }}
                key={skill}
                className="p-4 text-center rounded-2xl bg-[#15162b] border border-white/10"
              >

                {skill}

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="py-20 px-6 bg-white/5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {projects.map((project) => (

              <motion.div
                whileHover={{ y: -10 }}
                key={project.title}
                className="rounded-3xl p-6 bg-[#15162b] border border-white/10"
              >

                <h3 className="text-xl font-bold text-pink-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.desc}
                </p>

                <p className="text-sm text-purple-300 mt-4">
                  {project.tech}
                </p>

                <div className="flex gap-4 mt-5">

                  {"github" in project && (
                    <a
                      href={project.github as string}
                      target="_blank"
                      className="flex items-center gap-2 text-sm"
                    >
                      GitHub
                    </a>
                  )}

                  {"live" in project && (
                    <a
                      href={project.live as string}
                      target="_blank"
                      className="flex items-center gap-2 text-sm"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  )}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* INTERNSHIPS */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Internships & Achievements
          </h2>

          <div className="space-y-4">

            {[
              {
                title: "AI-ML Virtual Internship",
                company: "AICTE & EduSkills",
                desc:
                  "Learned basics of Artificial Intelligence and Machine Learning."
              },

              {
                title: "Frontend Developer Internship",
                company: "Cognetix Global Technology LLP",
                desc:
                  "Worked on responsive web pages using HTML, CSS and JavaScript."
              },

              {
                title: "Ignite India Program",
                company: "Wadhwani Foundation",
                desc:
                  "Improved communication and professional skills."
              },

              {
                title: "Hackathons Participation",
                company: "College & Technical Events",
                desc:
                  "Participated in hackathons and gained practical experience."
              }

            ].map((item) => (

              <div
                key={item.title}
                className="p-5 rounded-2xl bg-[#15162b] border border-white/10"
              >

                <h3 className="text-xl font-semibold text-pink-400">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {item.company}
                </p>

                <p className="text-gray-300 mt-3">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="py-20 px-6 bg-white/5">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-8">

            Let’s connect for web development, Shopify projects,
            and learning opportunities.

          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <a
              href="mailto:laharinagulla@gmail.com"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#15162b] border border-white/10"
            >
              <Mail size={18} />
              Email
            </a>

            <a
              href="https://linkedin.com/in/nagulla-sai-lahari"
              target="_blank"
              className="px-5 py-3 rounded-full bg-[#15162b] border border-white/10"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/NagullaSaiLahari3281"
              target="_blank"
              className="px-5 py-3 rounded-full bg-[#15162b] border border-white/10"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="py-6 text-center text-gray-500 border-t border-white/10">

        © 2026 Nagulla Sai Lahari. All Rights Reserved.

      </footer>

    </main>
  );
}
