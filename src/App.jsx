import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Trophy,
  Award,
  Star,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Social icons
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Assest } from "./assets/Assest";



/* =========================================================
   DATA
========================================================= */

const achievements = [
  {
    number: 3,
    suffix: "+",
    title: "Years",
    text: "Professional Journey",
  },
  {
    number: 5,
    suffix: "",
    title: "Fields",
    text: "Creative & Performance",
  },
  {
    number: 5,
    suffix: "",
    title: "Awards",
    text: "Recognition",
  },
  {
    number: 100,
    suffix: "+",
    title: "Memories",
    text: "Captured Moments",
  },
];

const records = [
  {
    icon: "🏆",
    title: "Fastest Keyboard Performance",
    text: "Recognized for outstanding speed and accuracy.",
    badge: "Achievement",
  },
  {
    icon: "🌎",
    title: "World Record Attempt",
    text: "A remarkable milestone in the journey.",
    badge: "World Record",
  },
  {
    icon: "📜",
    title: "IBR Recognition",
    text: "International recognition and achievement.",
    badge: "Certificate",
  },
];

const talents = [
  {
    icon: "⌨️",
    title: "Keyboard",
    text: "Music & Performance",
    color: "blue",
  },
  {
    icon: "🥋",
    title: "Karate",
    text: "Martial Arts",
    color: "gold",
  },
  {
    icon: "🎶",
    title: "Music",
    text: "Creative Expression",
    color: "purple",
  },
  {
    icon: "🎨",
    title: "Creative",
    text: "Arts & Design",
    color: "green",
  },
];

const gallery = [
  {
    title: "Keyboard",
    icon: "🎹",
    color: "blue",
  },
  {
    title: "Tabla",
    icon: "🥁",
    color: "purple",
  },
  {
    title: "Karate",
    icon: "🥋",
    color: "blue",
  },
  {
    title: "Music",
    icon: "🎶",
    color: "purple",
  },
  {
    title: "Award",
    icon: "🏆",
    color: "green",
  },
  {
    title: "Sports",
    icon: "🏏",
    color: "red",
  },
  {
    title: "IBR",
    icon: "📜",
    color: "blue",
  },
  {
    title: "GWR",
    icon: "🏅",
    color: "gold",
  },
];

const testimonials = [
  {
    name: "Performance Community",
    role: "Audience",
    text: "An inspiring journey of talent, dedication and achievement. The performance is truly remarkable.",
  },
  {
    name: "Creative Community",
    role: "Supporter",
    text: "A beautiful combination of creativity, discipline and passion. Wishing more success ahead.",
  },
  {
    name: "Friends & Family",
    role: "Well Wishers",
    text: "Every milestone reflects hard work and determination. Proud to be part of this journey.",
  },
];

const videos = [
  {
    title: "Karate Championship",
    url: "https://www.youtube.com/embed/MSu95dL80cQ",
  },
  {
    title: "Martial Arts Performance",
    url: "https://www.youtube.com/embed/Iih4JaZc3Ig",
  },
  {
    title: "Martial Arts Performances",
    url: "https://www.youtube.com/embed/CELK5-vm5T0",
  },
];

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function Counter({ number, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = number / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Records", "#records"],
    ["Karate", "#karate"],
    ["Talents", "#talents"],
    ["Gallery", "#gallery"],
    ["Media", "#media"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <div className="logo-icon">T</div>

          <div>
            <strong> Trishant </strong>
            <strong>Priyavrat</strong>
          </div>
        </a>

        <nav className={`nav-menu ${open ? "active" : ""}`}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Get In Touch
          </a>
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

// function SectionTitle({ eyebrow, title, text }) {
//   return (
//     <div className="section-title reveal">
//       <span className="eyebrow">{eyebrow}</span>
//       <h2>{title}</h2>
//       <p>{text}</p>
//     </div>
//   );
// }
function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="container hero-content">
        <div className="hero-copy reveal">
          <span className="hero-badge">
            ✨ THE JOURNEY OF TALENT & PASSION
          </span>

          <h1>
            Trishant
            &nbsp;
            <small>Priyavrat</small>
          </h1>

          <p className="hero-subtitle">
            Rise. Perform. Inspire.
          </p>

          <p className="hero-description">
            A multi-talented personality exploring the world
            of performance, creativity, sports and achievements.
          </p>

          <div className="hero-tags">
            <span>🥋 Karate</span>
            <span>🎹 Music</span>
            <span>🎨 Arts</span>
            <span>🏆 Awards</span>
          </div>

          <div className="hero-actions">
            <a href="#records" className="btn btn-gold">
              Explore Journey
              <ArrowRight size={17} />
            </a>

            <a href="#media" className="btn btn-outline">
              <Play size={16} />
              Watch Videos
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>3+</strong>
              <span>Years</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Fields</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Awards</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Moments</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="profile-orbit orbit-one"></div>
          <div className="profile-orbit orbit-two"></div>

          <div className="profile-card">
            <div className="profile-image">
              <div className="profile-placeholder">
                {/* <span>ADD PHOTO</span>
                <small>Your Photo Here</small> */}
             

<img src={Assest.Child1} alt="Logo" />
                  {/* <img    loading="lazy" src={"../Assets/Child1.jpeg"} alt="Logo" className="header-logo" /> */}
              </div>
            </div>

            <div className="profile-info">
              <div>
                <strong>SPORT</strong>
                <small>Creative Performer</small>
              </div>

              <span className="verified">✦</span>
            </div>
          </div>

          <div className="floating-badge badge-top">
            <Trophy size={19} />
            <span>Achievement</span>
          </div>

          <div className="floating-badge badge-bottom">
            <Award size={16} />
            <span>Multi Talent</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ACHIEVEMENTS
========================================================= */

function Achievements() {
  return (
    <section className="achievement-strip">
      <div className="container achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-item reveal" key={index}>
            <strong>
              <Counter
                number={item.number}
                suffix={item.suffix}
              />
            </strong>

            <span>{item.title}</span>
            <small>{item.text}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   RECORDS
========================================================= */

function RecordsVault() {
  return (
    <section id="records" className="section records-section">
      <div className="container">
        <SectionTitle
          eyebrow="🏆 RECOGNITION & ACHIEVEMENTS"
          title="The Records Vault"
          text="A collection of remarkable milestones and achievements from the journey."
        />

        <div className="records-layout">
          <div className="records-main glass-card reveal">
            <div className="record-heading">
              <div className="record-icon">🏆</div>

              <div>
                <span>FEATURED RECORD</span>
                <h3>Fastest Keyboard Performance</h3>
              </div>
            </div>

            <p>
              A remarkable achievement representing dedication,
              speed, precision and years of practice.
            </p>

            <div className="record-photo">
              {/* <span>GWR Photo Here</span> */}
              <img src={Assest.Child8} style={{
                height:"280px", width:"550px"
              }} alt="Logo" />
            </div>

            <div className="record-footer">
              <span>🌎 World Record Recognition</span>
              <button>View Record <ChevronRight size={14} /></button>
            </div>
          </div>

          <div className="records-side">
            {records.slice(1).map((record, index) => (
              <div className="record-mini glass-card reveal" key={index}>
                <div className="record-mini-top">
                  <span className="mini-icon">
                    {record.icon}
                  </span>

                  <span>{record.badge}</span>
                </div>

                <h3>{record.title}</h3>

                <p>{record.text}</p>

                <div className="certificate-box">
                  <span>
                    {index === 0
                      ? "IBR Certificate Here"
                      : "Achievement Certificate"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="records-counter glass-card reveal">
          <div>
            <strong>1</strong>
            <span>World Record</span>
          </div>

          <div>
            <strong>1</strong>
            <span>IBR Recognition</span>
          </div>

          <div>
            <strong>5</strong>
            <span>Major Awards</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Dreams Ahead</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   KARATE
========================================================= */

function KarateArena() {
  return (
    <section id="karate" className="section karate-section">
      <div className="container">
        <SectionTitle
          eyebrow="🥋 DISCIPLINE & STRENGTH"
          title="Karate Arena"
          text="Strength, discipline and determination built through martial arts."
        />

        <div className="karate-grid">
          <div className="karate-left reveal">
            <div className="karate-card glass-card">
              <div className="card-label">
                <span>🥋</span>
                <div>
                  <small>KARATE JOURNEY</small>
                  <h3>Martial Arts</h3>
                </div>
              </div>

              <div className="karate-photo">
                {/* <span>Karate Photo Here</span> */}
                   <img src={Assest.Child9} style={{
                height:"230px", width:"550px"
              }} alt="Logo" />
              </div>

              <div className="karate-small-stats">
                <div>
                  <strong>🥇</strong>
                  <span>Awards</span>
                </div>

                <div>
                  <strong>🏆</strong>
                  <span>Events</span>
                </div>

                <div>
                  <strong>📜</strong>
                  <span>Certificates</span>
                </div>
              </div>
            </div>

            <div className="karate-list glass-card">
              <div>
                <span>🥋</span>
                <p>Karate Championship Participation</p>
                <b>✓</b>
              </div>

              <div>
                <span>🏆</span>
                <p>Martial Arts Achievement</p>
                <b>✓</b>
              </div>

              <div>
                <span>⭐</span>
                <p>Continuous Training</p>
                <b>✓</b>
              </div>
            </div>
          </div>

          <div className="karate-right reveal">
            <div className="training-card glass-card">
              <div className="training-header">
                <span>TRAINING PROFILE</span>
                <small>View All</small>
              </div>

              <div className="training-row">
                <span>Style</span>
                <strong>Karate</strong>
              </div>

              <div className="training-row">
                <span>Experience</span>
                <strong>Professional</strong>
              </div>

              <div className="training-row">
                <span>Focus</span>
                <strong>Discipline & Performance</strong>
              </div>

              <div className="progress-line">
                <span></span>
              </div>
            </div>

            <div className="quote-card glass-card">
              <span className="quote-mark">“</span>

              <p>
                Discipline is not about being perfect.
                It is about becoming better every day.
              </p>

              <strong>Karate Journey</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function KarateGallery() {
  const galleryImages = [
    Assest.Child1,
    Assest.Child2,
    Assest.Child3,
    Assest.Child4,
    Assest.Child5,
    Assest.Child6,
    Assest.Child10,
    Assest.Child8,
  ];

  return (
    <section id="karate-gallery" className="section karate-gallery-section">
      <div className="container">
        {/* <SectionTitle
          eyebrow="🥋 KARATE GALLERY"
          title="Moments of Discipline & Achievement"
          text="A collection of memorable moments from the martial arts journey."
        /> */}

        <div className="karate-gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="karate-gallery-card glass-card" key={index}>
              <div className="karate-gallery-image">
                <img
                  src={image}
                  alt={`Karate moment ${index + 1}`}
                />
              </div>

              <div className="karate-gallery-overlay">
                <span>🥋</span>
                <strong>Karate Journey</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* =========================================================
   TALENTS
========================================================= */

function TalentsArts() {
  return (
    <section id="talents" className="section talents-section">
      <div className="container">
        <SectionTitle
          eyebrow="🎨 CREATIVITY & PASSION"
          title="Talents & Arts"
          text="Exploring different forms of creativity, performance and artistic expression."
        />

        <div className="talent-grid">
          {talents.map((item, index) => (
            <div
              className={`talent-card ${item.color} reveal`}
              key={index}
            >
              <div className="talent-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <button>
                Explore
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <div id="gallery" className="gallery-heading reveal">
          <span>🎨</span>
          <h3>Moments Gallery</h3>
        </div>
        
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div
              className={`gallery-card ${item.color} reveal`}
              key={index}
            >
              <div className="gallery-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <span>
                View Moments <ArrowRight size={13} />
              </span>
            </div>
          ))}
        </div>
        <KarateGallery />

      </div>
    </section>
  );
}

/* =========================================================
   MEDIA
========================================================= */

function MediaSection() {
  return (
    <section id="media" className="section media-section">
      <div className="container">
        <SectionTitle
          eyebrow="📺 MEDIA & STORIES"
          title="As Seen In"
          text="Highlights, stories and memorable moments shared with the world."
        />

        <div className="media-news-grid">
          <div className="media-news-card reveal">
            <span>📰 FEATURED STORY</span>
            <h3>Celebrating Talent & Dedication</h3>
            <p>
              A journey filled with passion, performance
              and remarkable milestones.
            </p>
          </div>

          <div className="media-news-card reveal">
            <span>📺 FEATURED</span>
            <h3>Performance Recognition</h3>
            <p>
              Featured for outstanding creative and
              performance achievements.
            </p>
          </div>

          <div className="media-news-card reveal">
            <span>🌐 MEDIA</span>
            <h3>Journey Of Inspiration</h3>
            <p>
              Sharing an inspiring story of continuous
              growth and determination.
            </p>
          </div>
        </div>

        <div className="youtube-title">
          <span>▶</span>
          <h3>Watch On YouTube</h3>
        </div>

   <div className="video-grid">
  {videos.map((video, index) => (
    <div className="video-card reveal" key={index}>
      <iframe
        src={video.url}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <div className="video-title">
        <span>{video.title}</span>
      </div>
    </div>
  ))}
</div>

        {/* <div className="youtube-button-wrap">
          <a href="#" className="btn btn-gold">
            <Youtube size={17} />
            Subscribe on YouTube
          </a>
        </div> */}
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIALS
========================================================= */

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionTitle
          eyebrow="⭐ KIND WORDS"
          title="Testimonials"
          text="Words from people who have witnessed the journey."
        />

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card glass-card reveal" key={index}>
              <div className="stars">
                <Star fill="currentColor" size={15} />
                <Star fill="currentColor" size={15} />
                <Star fill="currentColor" size={15} />
                <Star fill="currentColor" size={15} />
                <Star fill="currentColor" size={15} />
              </div>

              <p>“{item.text}”</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  // const [submitted, setSubmitted] = useState(false);

   const form = useRef();
  
const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
const submitForm = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      const result = await emailjs.sendForm(
        "service_oqacroj", // IMPORTANT: EmailJS Dashboard ka exact Service ID
        "template_i5zc66h", // IMPORTANT: EmailJS Dashboard ka exact Template ID
        form.current,
        "zdVVt3m9pzuUkp2ij"
      ).then(() => {
      alert("Message sent successfully ✅");
      e.target.reset();
          setSubmitted(true);
      
    })
    .catch((err) => {
      alert("Failed to send message ❌");
      console.error(err);
    });
  }

    

     
     finally {
      setSending(false);
    }
  };


  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* <SectionTitle
          eyebrow="📩 GET IN TOUCH"
          title="Media & Inquiries"
          text="For collaborations, media opportunities, events and general inquiries."
        /> */}
        <SectionTitle
  eyebrow="📩 GET IN TOUCH"
  title="Media & Inquiries"
  text="For collaborations, media opportunities, events and general inquiries."
  className="contact-main-title"
/>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-card reveal">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>Location</span>
                <strong>Varanasi (Kashi), Uttar Pradesh, India</strong>
              </div>
            </div>

            <div className="contact-info-card reveal">
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>
                <strong>priyavrattrishant04@gmail.com</strong>
              </div>
            </div>

            <div className="contact-info-card reveal">
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div>
                <span>Phone</span>
                <strong>+91 77640 40121</strong>
              </div>
            </div>

           <div className="social-links">
  <a href="https://www.instagram.com/trishantpriyavratofficial01?igsh=MWJiNnVoeGJrcGQ5Mw==" aria-label="Instagram">
                          <FaInstagram />
  </a>

  <a href="https://www.facebook.com/share/1BoHMHPdGm/" aria-label="Facebook">
     <FaFacebookF />
  </a>

  <a href="https://www.youtube.com/@trishantpriyavrat" aria-label="YouTube">
     <FaYoutube />
  </a>

  {/* <a href="#" aria-label="LinkedIn">
    IN
  </a> */}
</div>
          </div>

         <form
      ref={form}
      className="contact-form glass-card reveal"
      onSubmit={submitForm}
    >
      <div className="form-row">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          required
        />
      </div>

      <div className="form-row">
        <input
          type="text"
          name="user_phone"
          placeholder="Phone Number"
        />

        <select
          name="inquiry"
          defaultValue=""
        >
          <option value="" disabled>
            Select Inquiry
          </option>
          <option value="Media">Media</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Event">Event</option>
          <option value="General">General</option>
        </select>
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
      />

      <textarea
        rows="5"
        name="message"
        placeholder="Write your message..."
        required
      ></textarea>

      <button className="btn btn-gold submit-btn" type="submit">
        <Send size={16} />
        {submitted ? "Message Sent!" : "Send Inquiry"}
      </button>
    </form>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <div className="logo-icon">T</div>

            <div>
             <strong> Trishant </strong>
            <small>Priyavrat</small>
            </div>
          </a>

          <p>
            A journey of talent, creativity, discipline
            and inspiration.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#records">Records</a>
          <a href="#karate">Karate</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>

          <span>Varanasi (Kashi), Uttar Pradesh, India</span>
          <span>priyavrattrishant04@gmail.com</span>
          <span>+91 77640 40121</span>
        </div>

        <div className="footer-column">
          <h4>Follow Me</h4>

         <div className="footer-social">
  <a href="https://www.instagram.com/trishantpriyavratofficial01?igsh=MWJiNnVoeGJrcGQ5Mw==" aria-label="Instagram">
                          <FaInstagram />
  </a>

  <a href="https://www.facebook.com/share/1BoHMHPdGm/" aria-label="Facebook">
     <FaFacebookF />
  </a>

  <a href="https://youtube.com/@trishantpriyavratofficial?si=DuAjFLIVXZJRmF-D" aria-label="YouTube">
     <FaYoutube />
  </a>
</div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>
          © {new Date().getFullYear()} Trishant Priyavrat.
          All Rights Reserved.
        </span>

        <span>Made with ✨ passion</span>
      </div>
    </footer>
  );
}

/* =========================================================
   WHATSAPP
========================================================= */

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917764040121"
      target="_blank"
      rel="noreferrer"
      className="whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.title =
      "Trishant Priyavrat | Talent, Arts, Karate & Achievements";
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Achievements />

        <RecordsVault />

        <KarateArena />
        

        <TalentsArts />

        <MediaSection />

        <Testimonials />

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;