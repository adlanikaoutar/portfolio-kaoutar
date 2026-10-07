import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaPhone } from 'react-icons/fa';

function App() {
  const phrases = [
    "Passionate about bridging the gap between intelligent systems and elegant user experiences.",
    "Transforming complex challenges into scalable, real-world AI solutions.",
    "Dedicated to building impactful technology at the intersection of AI and engineering.",
    "Turning innovative ideas into robust, intelligent applications."
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  const roles = ["AI Engineer", "Data Science", "Computer Vision", "Deep Learning", "Machine Learning", "HealthTech"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1000);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(roleInterval);
    };
  }, [phrases.length, roles.length]);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:adlanikawtar20@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const codeSnippets = [
    "model.fit(X, y)", "loss.backward()", "torch.nn", "conv2d(64, kernel=3)",
    "np.array([1, 0])", "epochs = 100", "yolov8-pose", "optimizer.zero_grad()"
  ];

  // Timeline mise à jour avec DUT et Licence
  const experiences = [
    { 
      date: "01/2026 – 06/2026", 
      role: "Stagiaire Ingénieure IA / Computer Vision", 
      company: "NEXTRONIC — ABA Technology", 
      desc: "Développement d'un système intelligent de vidéosurveillance multi-caméras (YOLOv8, ByteTrack, OSNet, EfficientNet-B0). Mise en place d'un module de détection automatique des chutes (YOLOv8-Pose) et système de matching inter-caméras avec visualisation Streamlit." 
    },
    { 
      date: "2023 – 2026", 
      role: "Ingénieure d’État en Génie Digital et IA", 
      company: "Université Internationale Bleu", 
      desc: "Cycle d'ingénieur spécialisé en Intelligence Artificielle, Machine Learning et systèmes logiciels." 
    },
    { 
      date: "07/2025 – 09/2025", 
      role: "Stagiaire Ingénieure IA / GenAI", 
      company: "AI Crafters", 
      desc: "Projet 1 : Traduction intelligente de PDF préservant la mise en page (DocLayout-YOLO, pdfminer.six, multiple moteurs). Projet 2 : Plateforme RAG multi-formats (ingestion, chunking, embeddings, recherche sémantique, LLM, comparaison multi-documents)." 
    },
    { 
      date: "04/2023 – 06/2023", 
      role: "Stagiaire Développeuse Web (Stage de fin d'études — Licence)", 
      company: "RBCOM SARLAU", 
      desc: "Développement d'une application web de gestion des bons de commande avec Python/Django, HTML, CSS, JavaScript et Bootstrap. Mise en œuvre de l'architecture Django MVT et de l'ORM." 
    },
    { 
      date: "2022 – 2023", 
      role: "Licence Professionnelle — ISIL", 
      company: "Université Cadi Ayyad, EST Essaouira", 
      desc: "Licence en ingénierie des systèmes informatiques et logiciels." 
    },
    { 
      date: "04/2022 – 06/2022", 
      role: "Stagiaire Développeuse Web (Stage de fin d'études — DUT)", 
      company: "RBCOM SARLAU", 
      desc: "Conception et développement d'un site web vitrine avec React.js, HTML/CSS, Bootstrap et fonctionnalités dynamiques via PHP et Node.js." 
    },
    { 
      date: "2020 – 2022", 
      role: "DUT — Génie Informatique et Réseaux", 
      company: "Université Cadi Ayyad, EST Essaouira", 
      desc: "Bases solides en programmation, algorithmique et architecture des réseaux." 
    }
  ];

  // Projets mis à jour avec le Convoyeur
  const projects = [
    { title: "Computer Vision industriel — Convoyeur", context: "Computer Vision", desc: "Mesure automatique des bandes avec correction Fish-Eye, calibration image/métrique & seuillage.", tech: ["OpenCV", "Python", "Calibration"] },
    { title: "Lunettes Intelligentes (Computer Vision)", context: "Système Embarqué", desc: "Détection d'objets en temps réel et guidance vocale sur système embarqué pour personnes malvoyantes.", tech: ["Python", "YOLOv8", "OpenCV", "Embedded"] },
    { title: "Classification de Tumeurs Cérébrales (IRM)", context: "Deep Learning Médical", desc: "Classification de tumeurs cérébrales sur images IRM avec architectures CNN, MobileNet & VGG16.", tech: ["CNN", "MobileNet", "VGG16", "PyTorch"] },
    { title: "Analyse Décisionnelle (Data & BI)", context: "Business Intelligence", desc: "Conception de pipelines ETL, calcul d'indicateurs analytiques (KPIs) et création de dashboards Power BI.", tech: ["ETL", "SQL", "Power BI"] }
  ];

  const skills = {
    "IA Générative & LLM": ["RAG", "LLM", "Prompt Engineering", "LangChain", "LlamaIndex", "FAISS", "ChromaDB"],
    "Machine Learning & DL": ["Python", "Scikit-learn", "PyTorch", "TensorFlow", "CNN", "Feature Engineering", "Hyperparameter Tuning"],
    "Computer Vision": ["YOLOv8", "OpenCV", "Multi-Object Tracking", "Re-Identification", "Calibration", "Fish-Eye Correction"],
    "Data & BI": ["Pandas", "NumPy", "SQL", "PostgreSQL", "MongoDB", "ETL", "Power BI"],
    "Développement & Cloud": ["Django", "FastAPI", "React", "Node.js", "Azure", "Docker", "Git/GitHub"]
  };

  return (
    <div className="app-container">
      <div className="code-background">
        {codeSnippets.map((code, i) => (
          <span key={i} className="code-snippet" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}>{code}</span>
        ))}
      </div>

      <nav className="navbar">
        <div className="nav-logo">Kaoutar<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#about">Home</a></li>
          <li><a href="#about-me">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact" className="resume-btn">Contact</a></li>
        </ul>
      </nav>

      <header id="about" className="hero">
        <div className="hero-content">
          <p className="hero-intro animate-in">Digital Engineering & AI</p>
          <h1 className="animate-in">Hi, I'm <span className="highlight">Kaoutar Adlani</span></h1>
          <h2 className="hero-title-dynamic animate-in">{roles[roleIndex]}</h2>
          <p className="hero-desc animate-in">Transforming complex challenges into intelligent, elegant, and scalable AI solutions. Dedicated to building technology that drives real-world impact and innovation.</p>
          <div className="hero-cta animate-in">
            <a href="#projects" className="btn-primary">View Projects <FaArrowRight /></a>
            <a href="/cv.pdf" target="_blank" download className="btn-secondary">Download CV <FaDownload /></a>
          </div>
          <div className="hero-socials animate-in">
            <a href="https://github.com/adlanikaoutar/" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kaoutar-adlani-976589232" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:adlanikawtar20@gmail.com" title="Email"><FaEnvelope /></a>
          </div>
        </div>
      </header>

      <section id="about-me" className="section stats-section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle dynamic-text">{phrases[phraseIndex]}</p>
        
        <div className="about-grid">
          <div className="about-left">
            <h3>State Engineer in Artificial Intelligence</h3>
            <p className="about-bio">
              I am an AI State Engineer with a strong foundation in Machine Learning, Deep Learning, Computer Vision, and Generative AI. I specialize in developing innovative, practical solutions that transform complex, real-world problems into intelligent systems. Combining technical rigor, analytical thinking, and a hands-on approach, I am passionate about building end-to-end AI applications — from data engineering and model training to full-stack integration and deployment. Highly adaptable and a fast learner, I am particularly drawn to tech-driven projects that apply AI to real-world challenges.
            </p>
          </div>
          <div className="about-right">
            <img src="/profile.jpg" alt="Kaoutar Adlani" className="about-img" />
            <div className="languages-box">
              <h4>Languages</h4>
              <ul className="languages-list">
                <li><strong>Arabic</strong> <span>Native</span></li>
                <li><strong>French</strong> <span>Courant</span></li>
                <li><strong>English</strong> <span>Professional</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card"><h3>10+</h3><p>Projects</p></div>
          <div className="stat-card"><h3>5+</h3><p>Years Learning</p></div>
          <div className="stat-card"><h3>5</h3><p>Tech Domains</p></div>
          <div className="stat-card"><h3>3</h3><p>Languages</p></div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="section-title">Education & AI Experience</h2>
        <div className="timeline-vertical">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-card">
              <span className="t-date">{exp.date}</span>
              <h3 className="t-role">{exp.role}</h3>
              <p className="t-company">{exp.company}</p>
              <p className="t-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">Selected projects in AI, machine learning, healthcare, and web development.</p>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card">
              <h3>{proj.title}</h3>
              <p className="project-context">{proj.context}</p>
              <p className="project-desc">{proj.desc}</p>
              <ul className="tech-tags">
                {proj.tech.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {Object.entries(skills).map(([category, techs], i) => (
            <div key={i} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {techs.map((tech, j) => <li key={j}>{tech}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-section">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Have a project idea, a question, or just want to say hello? I’d love to hear from you.</p>
        <div className="contact-info">
          <a href="mailto:adlanikawtar20@gmail.com"><FaEnvelope /> adlanikawtar20@gmail.com</a>
          <a href="tel:+212643842908"><FaPhone /> +212 6 43 84 29 08</a>
          <a href="https://www.linkedin.com/in/kaoutar-adlani-976589232" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/adlanikaoutar/" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        </div>
        <div className="contact-form">
          <p className="form-tip"><strong>Pro tip:</strong> The form opens your email app with a pre-filled message — no backend needed.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="your@email.com" onChange={handleChange} required />
            <input type="text" name="subject" placeholder="What's this about?" onChange={handleChange} required />
            <textarea name="message" placeholder="Tell me about your project..." onChange={handleChange} required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Kaoutar Adlani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;