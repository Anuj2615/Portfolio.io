import { useRef, useState } from "react";
import "./App.css";

import avatar from "./assets/avatar.png";
import profile from "./assets/profile.jpeg";

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 5.5h18v13H3v-13Zm1.8 1.7 7.2 5.4 7.2-5.4H4.8Zm14.4 9.6V9.45L12 14.85 4.8 9.45v7.35h14.4Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM20.75 13.28c0-3.55-1.9-5.2-4.43-5.2-2.04 0-2.95 1.12-3.46 1.91V8.25H9.61V20h3.25v-5.82c0-1.53.29-3.01 2.18-3.01 1.86 0 1.88 1.74 1.88 3.11V20h3.25l.58-6.72Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.65-.2.65-.46v-1.66c-2.64.57-3.2-1.12-3.2-1.12-.43-1.1-1.06-1.4-1.06-1.4-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.44 2.22 1.03 2.76.79.09-.61.33-1.03.6-1.27-2.1-.24-4.31-1.05-4.31-4.69 0-1.03.37-1.88.97-2.54-.1-.24-.42-1.2.09-2.5 0 0 .8-.26 2.61.97A9.08 9.08 0 0 1 12 7.22c.81 0 1.62.11 2.38.32 1.81-1.23 2.6-.97 2.6-.97.51 1.3.19 2.26.09 2.5.61.66.98 1.51.98 2.54 0 3.65-2.22 4.45-4.33 4.69.34.29.64.86.64 1.74v2.52c0 .26.17.56.65.46A9.5 9.5 0 0 0 12 2.5Z" />
  </svg>
);

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Voice intro
  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          console.log("Audio file abhi add nahi hui hai.");
        });
    }
  };

  // Smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="portfolio">
      {/* ================= AUDIO ================= */}

      <audio
        ref={audioRef}
        src="/assets/intro.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">
          YK<span>.</span>
        </div>

        <div className="navLinks">
          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>

        <button className="resumeBtn">
          Resume
        </button>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">
        {/* Background */}

        <div className="gridBackground"></div>

        <div className="glow glowOne"></div>
        <div className="glow glowTwo"></div>
        <div className="glow glowThree"></div>

        {/* ================= HERO LEFT ================= */}

        <div className="heroLeft">
          <div className="availabilityBadge">
            <span></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="welcome">
            WELCOME TO MY DIGITAL SPACE
          </p>

          <h1>
            Hi, I'm
            <span>Yogendra Kushwaha</span>
          </h1>

          <div className="roleWrapper">
            <p>AI Engineer</p>

            <div className="roleLine"></div>
          </div>

          <p className="description">
            Building intelligent systems using Machine Learning,
            Generative AI, Large Language Models and modern AI
            technologies.
          </p>

          <div className="heroButtons">
            <button
              className="primaryBtn"
              onClick={() => scrollToSection("projects")}
            >
              Explore My Work
              <span>→</span>
            </button>

            <button
              className="secondaryBtn"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </button>
          </div>

          {/* Small tech labels */}

          <div className="miniTech">
            <div>
              
              <p>Artificial Intelligence</p>
            </div>

            <div>
              
              <p>Machine Learning</p>
            </div>

            <div>
              
              <p>Generative AI</p>
            </div>
          </div>
        </div>

        {/* ================= HERO RIGHT ================= */}

        <div className="heroRight">
          {/* Orbit circles */}

          <div className="orbit orbitOne"></div>
          <div className="orbit orbitTwo"></div>

          {/* ================= AVATAR ================= */}

          <div className="avatarContainer">
            <div className="avatarBackGlow"></div>

            <div className="avatarImageWrapper">
              <img
                src={avatar}
                alt="Yogendra Kushwaha 3D Avatar"
                className="avatarImage"
              />

              <div className="avatarBottomFade"></div>
            </div>
          </div>

          {/* ================= VOICE BUTTON ================= */}

          <button
            className={`voiceButton ${
              isPlaying ? "voiceActive" : ""
            }`}
            onClick={toggleAudio}
          >
            <div className="voiceIcon">
              {isPlaying ? "❚❚" : "▶"}
            </div>

            <div>
              <span>
                {isPlaying
                  ? "PLAYING INTRO"
                  : "MEET YOGENDRA"}
              </span>

              <p>
                {isPlaying
                  ? "Click to pause"
                  : "Play voice introduction"}
              </p>
            </div>
          </button>

          {/* ================= FLOATING LABELS ================= */}

          <div className="floatingLabel floatingLabelOne">
            <span>AI</span>
            Intelligent Systems
          </div>

          <div className="floatingLabel floatingLabelTwo">
            <span>LLM</span>
            Generative AI
          </div>

          {/* ================= ID CARD ================= */}

          <div className="idCard">
            <div className="cardNoise"></div>
            <div className="cardShine"></div>

            <div className="idCardHeader">
              <p>DIGITAL IDENTITY</p>

              <div className="cardChip">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="cardMain">
              {/* ORIGINAL PHOTO */}

              <div className="miniPhoto">
                <img
                  src={profile}
                  alt="Yogendra Kushwaha"
                />
              </div>

              <div className="cardIdentity">
                <span>AI ENGINEER</span>

                <h3>
                  Yogendra
                  <br />
                  Kushwaha
                </h3>
              </div>
            </div>

            <div className="divider"></div>

            <div className="cardDetails">
              <div>
                <span>DOMAIN</span>
                <p>AI • ML • GenAI</p>
              </div>

              <div>
                <span>EDUCATION</span>
                <p>MCA • 2027</p>
              </div>

              <div>
                <span>LOCATION</span>
                <p>India</p>
              </div>

              <div>
                <span>STATUS</span>

                <p className="available">
                  <i></i>
                  Available
                </p>
              </div>
            </div>

            <div className="cardFooter">
              <p>YK / AI / 2027</p>

              <div className="barcode">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        className="section"
        id="about"
      >
        <div className="sectionHeading">

          <div>
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>
        </div>

        <div className="aboutGrid">
          <div className="glassCard aboutMain">
            <p className="aboutBigText">
              I build intelligent applications that combine
              <span>
                {" "}
                AI, Machine Learning and Generative AI.
              </span>
            </p>

            <p className="aboutDescription">
              I'm focused on becoming an AI Engineer and enjoy
              transforming AI concepts into practical applications.
              My work includes Retrieval-Augmented Generation,
              conversational AI, vector databases, LLM integrations
              and intelligent search systems.
            </p>
          </div>

          <div className="aboutStats">
            <div className="glassCard statCard">
              <h3>2027</h3>
              <p>MCA Graduation</p>
            </div>

            <div className="glassCard statCard">
              <h3>AI</h3>
              <p>Primary Domain</p>
            </div>

            <div className="glassCard statCard">
              <h3>∞</h3>
              <p>Always Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section
        className="section"
        id="skills"
      >
        <div className="sectionHeading">
          <div>
            <p>WHAT I WORK WITH</p>
            <h2>Skills & Technologies</h2>
          </div>
        </div>

        <div className="skillsGrid">
          {[
            "Python",
            "Machine Learning",
            "NLP",
            "Generative AI",
            "Large Language Models",
            "LangChain",
            "LangGraph",
            "RAG",
            "FAISS",
            "Hugging Face",
            "Groq",
            "FastAPI",
            "Streamlit",
            "Git",
            "GitHub",
            "C++",
          ].map((skill, index) => (
            <div
              className="skillCard"
              key={skill}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        className="section"
        id="projects"
      >
        <div className="sectionHeading">

          <div>
            <p>THINGS I'VE BUILT</p>
            <h2>Featured Projects</h2>
          </div>
        </div>

        <div className="projectsGrid">
          {/* PROJECT 1 */}

          <article className="projectCard featuredProject">
            <div className="projectNumber">
            </div>

            <div className="projectTag">
              FEATURED PROJECT
            </div>

            <h3>
              Hybrid RAG
              <br />
              System
            </h3>

            <p>
              Intelligent document question-answering system using
              semantic search, vector embeddings, FAISS,
              confidence scoring and web-search fallback.
            </p>

            <div className="projectTech">
              <span>Python</span>
              <span>LangChain</span>
              <span>FAISS</span>
              <span>Groq</span>
              <span>HuggingFace</span>
              <span>Streamlit</span>
            </div>

            <div className="projectActions">
              <a
                href="https://anuj2615-myproject-app-cajozc.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>

              <a
                href="https://github.com/Anuj2615"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </article>

          {/* PROJECT 2 */}

          <article className="projectCard">
            <div className="projectNumber">
            </div>

            <div className="projectTag">
              GENERATIVE AI
            </div>

            <h3>
              AI Chatbot
              <br />
              with LangGraph
            </h3>

            <p>
              Conversational AI application built using LangGraph
              and Groq with structured state management,
              tool-calling and LLM-powered responses.
            </p>

            <div className="projectTech">
              <span>Python</span>
              <span>LangGraph</span>
              <span>Groq</span>
              <span>LLM</span>
            </div>
            
            <div className="projectActions">
              <button type="button">View Project</button>

              <a
                href="https://github.com/Anuj2615"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </article>

          {/*Project 3 */}

          <article className="projectCard featuredProject">
            <div className="projectNumber">
            </div>

            <div className="projectTag">
              ANALYSIS PROJECT
            </div>

            <h3>
              Google Search Analytics
            </h3>

            <p>
              Google search analysis in machine learning uses smart computer models to study online user trends,
               click habits, and query data. It helps systems find patterns
               , guess what people want, and rank web pages better
            </p>

            <div className="projectTech">
              <span>Python</span>
              <span>Google Tool</span>
              <span>Machine Learning</span>
            </div>

            <div className="projectActions">
              <a
                href="https://anuj2615-myproject-app-cajozc.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>

              <a
                href="https://github.com/Anuj2615"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </article>


          {/* FUTURE PROJECT */}

          <article className="projectCard futureProject">
            <div className="futureIcon">
              +
            </div>

            <h3>
              Building Something
              <br />
              New
            </h3>

            <p>
              More AI engineering projects are currently in
              development.
            </p>
          </article>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        className="section"
        id="experience"
      >
        <div className="sectionHeading">
          

          <div>
            <p>MY JOURNEY</p>
            <h2>Experience</h2>
          </div>
        </div>

        <div className="timeline">
          <div className="timelineItem">
            <div className="timelineDot"></div>

            <div className="glassCard experienceCard">
              <span>
                AI ENGINEER INTERN | Akiyam Solution pvt ltd.
              </span>

              <h3>
                AI / ML Development
              </h3>

              <p>
                Building practical AI applications with focus on
                Large Language Models, RAG systems, NLP, vector
                databases, conversational AI and modern AI
                development tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

<section className="section" id="education">
  <div className="sectionHeading">
    <div>
      <p>ACADEMIC BACKGROUND</p>
      <h2>Education</h2>
    </div>
  </div>

  <div className="educationCard glassCard">
    <div className="educationYear">2027</div>

    <div>
      <span>POSTGRADUATE</span>

      <h3>
        Master of Computer Applications in AI & ML
      </h3>

      <p>MCA • 2025 - 2027</p>
    </div>
  </div>

  <div className="educationCard glassCard">
    <div className="educationYear">2025</div>

    <div>
      <span>GRADUATE</span>

      <h3>
        Bachelor of Computer Applications
      </h3>

      <p>BCA • 2022 - 2025</p>
    </div>
  </div>
</section>

      {/* ================= CONTACT ================= */}

      <section
        className="contactSection"
        id="contact"
      >
        <div className="contactGlow"></div>

        <p>
          LET'S BUILD SOMETHING INTELLIGENT
        </p>

        <h2>
          Have an opportunity
          <br />
          or idea?
        </h2>

        <p className="contactDescription">
          I'm interested in AI engineering opportunities,
          internships and projects where I can build real
          intelligent systems.
        </p>

        <div className="contactButtons">
          <a
            href="mailto:2005yogendrakushwaha@gmail.com"
            className="socialIconBtn emailIcon"
            aria-label="Email Yogendra Kushwaha"
            title="Email"
          >
            <EmailIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/yogendra-kushwaha-2a475928a/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIconBtn linkedinIcon"
            aria-label="Yogendra Kushwaha on LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://github.com/Anuj2615"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIconBtn githubIcon"
            aria-label="Yogendra Kushwaha on GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="logo">
          YK<span>.</span>
        </div>

        <p>
          Designed & built by Yogendra Kushwaha
        </p>

        <span>
          © 2026
        </span>
      </footer>
    </main>
  );
}

export default App;