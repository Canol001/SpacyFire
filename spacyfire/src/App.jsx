import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const sliderRef = useRef(null);

  const templates = [
    {
      title: 'Creative Portfolio',
      description: 'Showcase your work with elegance.',
      image: '/images/portfolio.jpg',
      category: 'portfolio',
      tags: ['Portfolio', 'Creative'],
    },
    {
      title: 'Corporate Hub',
      description: 'Professional site for enterprises.',
      image: '/images/corporate.jpg',
      category: 'business',
      tags: ['Business', 'Corporate'],
    },
    {
      title: 'Startup Landing',
      description: 'Launch products with impact.',
      image: '/images/landing.jpg',
      category: 'landing',
      tags: ['Landing Page', 'Startup'],
    },
  ];

  const filteredTemplates = templates.filter(
    (template) =>
      (filter === 'all' || template.category === filter) &&
      template.title.toLowerCase().includes(search.toLowerCase())
  );

  const testimonials = [
    {
      quote: 'Spacy Fire transformed our digital presence with stunning templates.',
      author: 'Jane Doe, TechCorp',
      image: '/images/client1.jpg',
    },
    {
      quote: 'Their cybersecurity solutions are top-notch and reliable.',
      author: 'John Smith, DataSecure',
      image: '/images/client2.jpg',
    },
    {
      quote: 'Fast, professional, and innovative mobile apps!',
      author: 'Alex Lee, StartupX',
      image: '/images/client3.jpg',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.fade-in').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    let currentSlide = 0;
    const slides = testimonials.length;

    const interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides;
      slider.style.transform = `translateX(-${currentSlide * (100 / slides)}%)`;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We’ll get back to you.');
    e.target.reset();
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed! Expect updates soon.');
    e.target.reset();
  };

  return (
    <>
      <style>
        {`
          html { scroll-behavior: smooth; }
          body { font-family: 'Poppins', sans-serif; }
          .fade-in { opacity: 0; transition: opacity 1s ease-in; }
          .fade-in.visible { opacity: 1; }
          .code-snippet {
            font-family: 'Courier New', Courier, monospace;
            background: #1e293b;
            color: #e2e8f0;
            padding: 2px 6px;
            border-radius: 4px;
          }
          .testimonial-slider { transition: transform 0.5s ease; }
        `}
      </style>
      <div className="bg-slate-900 text-white">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-slate-800 bg-opacity-95 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
                <i className="fas fa-fire text-neon text-2xl"></i>
                <span className="text-neon text-2xl font-bold">SPACYFIRE</span>
            </div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-slate-300 hover:text-cyan-500 font-medium transition">
                  Home
                </a>
                <a href="#services" className="text-slate-300 hover:text-cyan-500 font-medium transition">
                  Services
                </a>
                <a href="#templates" className="text-slate-300 hover:text-cyan-500 font-medium transition">
                  Templates
                </a>
                <a href="#about" className="text-slate-300 hover:text-cyan-500 font-medium transition">
                  About
                </a>
                <a href="#contact" className="text-slate-300 hover:text-cyan-500 font-medium transition">
                  Contact
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-900 px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition"
                >
                  Connect Now
                </a>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-slate-300 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} bg-slate-800 md:hidden`}>
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#home"
                className="block text-slate-300 hover:text-cyan-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-slate-300 hover:text-cyan-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#templates"
                className="block text-slate-300 hover:text-cyan-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Templates
              </a>
              <a
                href="#about"
                className="block text-slate-300 hover:text-cyan-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-slate-300 hover:text-cyan-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="block bg-cyan-500 text-slate-900 px-5 py-2 rounded-full text-center font-semibold hover:bg-cyan-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect Now
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen pt-20 bg-[url('/images/hero.jpg')] bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
                Elevate Your Vision with <span className="text-cyan-500">Spacy Fire</span>
              </h1>
              <p className="text-lg sm:text-xl text-white mb-8">
                Unleash <span className="code-snippet">premium digital solutions</span> and{' '}
                <span className="code-snippet">custom templates</span> for your business.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
                >
                  Discover Services
                </a>
                <a
                  href="#templates"
                  className="border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 hover:text-slate-900 transition"
                >
                  Browse Templates
                </a>
              </div>
            </div>
            <div className="hidden lg:block fade-in">
              <img
                src="/images/tech-innovation.jpg"
                alt="Tech Innovation"
                className="rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-100 text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Our <span className="text-cyan-600">Expertise</span>
            </h2>
            {[
              {
                title: 'Web Development',
                desc: '> Develop <span class="text-cyan-600">responsive</span> and <span class="text-cyan-600">SEO-optimized</span> websites.',
                img: '/images/web-dev.jpg',
                reverse: false,
              },
              {
                title: 'Mobile Apps',
                desc: '> Craft <span class="text-cyan-600">native</span> apps for iOS and Android.',
                img: '/images/mobile-apps.jpg',
                reverse: true,
              },
              {
                title: 'UI/UX Design',
                desc: '> Design <span class="text-cyan-600">user-centric</span> interfaces.',
                img: '/images/hero.jpg',
                reverse: false,
              },
              {
                title: 'Cloud Solutions',
                desc: '> Scale with <span class="text-cyan-600">secure</span> cloud infrastructure.',
                img: '/images/cloud.jpg',
                reverse: true,
              },
              {
                title: 'Cybersecurity',
                desc: '> Protect with <span class="text-cyan-600">advanced</span> security protocols.',
                img: '/images/cloud.jpg',
                reverse: false,
              },
              {
                title: 'Digital Marketing',
                desc: '> Boost with <span class="text-cyan-600">targeted</span> campaigns.',
                img: '/images/marketing.jpg',
                reverse: true,
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-12 fade-in`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full md:w-1/2 rounded-lg shadow-md"
                  loading="lazy"
                />
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p
                    className="text-slate-600 font-mono mb-4"
                    dangerouslySetInnerHTML={{ __html: service.desc }}
                  />
                  <a href="#contact" className="text-cyan-600 hover:text-cyan-500 font-semibold">
                    Request a Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Section */}
        <section id="templates" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Premium <span className="text-cyan-500">Templates</span>
            </h2>
            <div className="flex flex-wrap gap-4 mb-10 justify-center">
              {['all', 'portfolio', 'business', 'landing'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    filter === cat
                      ? 'bg-cyan-500 text-slate-900'
                      : 'bg-slate-700 text-slate-300 hover:bg-cyan-500 hover:text-slate-900'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-slate-700 px-4 py-2 rounded-full text-white border border-slate-600 focus:ring-2 focus:ring-cyan-500 w-full sm:w-64"
                placeholder="Search templates..."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
              {filteredTemplates.map((template, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{template.description}</p>
                  <div className="text-sm text-slate-500 mb-4">
                    Tags:{' '}
                    {template.tags.map((tag, i) => (
                      <span key={i} className="code-snippet">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-cyan-500 text-slate-900 px-4 py-2 rounded-full font-semibold hover:bg-cyan-400 transition"
                    >
                      Live Preview
                    </a>
                    <a
                      href="#"
                      className="border-2 border-cyan-500 text-cyan-500 px-4 py-2 rounded-full font-semibold hover:bg-cyan-500 hover:text-slate-900 transition"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              What Our <span className="text-cyan-500">Clients Say</span>
            </h2>
            <div className="relative overflow-hidden">
              <div ref={sliderRef} className="flex testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                      <img
                        src={testimonial.image}
                        alt="Client"
                        className="w-16 h-16 rounded-full mb-4 mx-auto"
                        loading="lazy"
                      />
                      <p className="text-slate-300 text-sm mb-4">"{testimonial.quote}"</p>
                      <p className="text-cyan-500 font-semibold">– {testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-100 text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Our <span className="text-cyan-600">Story</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img
                  src="/images/team.jpg"
                  alt="Our Team"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 space-y-8">
                <div className="fade-in">
                  <h3 className="text-xl font-semibold mb-2">2015: Founded</h3>
                  <p className="text-slate-600 text-sm">
                    Spacy Fire began with a mission to innovate digital solutions.
                  </p>
                </div>
                <div className="fade-in">
                  <h3 className="text-xl font-semibold mb-2">2018: Global Reach</h3>
                  <p className="text-slate-600 text-sm">
                    Expanded to serve 200+ clients worldwide.
                  </p>
                </div>
                <div className="fade-in">
                  <h3 className="text-xl font-semibold mb-2">2025: Template Hub</h3>
                  <p className="text-slate-600 text-sm">
                    Launched premium templates for all industries.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    ISO Certified
                  </span>
                  <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Award-Winning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 gap-12">
            <div className="mb-12 lg:mb-0 fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Let’s <span className="text-cyan-500">Collaborate</span>
              </h2>
              <form className="space-y-6 max-w-md mx-auto lg:mx-0" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white focus:ring-2 focus:ring-cyan-500"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white focus:ring-2 focus:ring-cyan-500"
                  placeholder="Email"
                  required
                />
                <textarea
                  id="message"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white focus:ring-2 focus:ring-cyan-500"
                  rows="5"
                  placeholder="Your Project Details"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="fade-in">
              <img
                src="/images/office.jpg"
                alt="Office"
                className="w-full rounded-lg shadow-md mb-6"
                loading="lazy"
              />
              <div className="text-slate-300">
                <p>
                  Email:{' '}
                  <a href="mailto:info@spacyfire.com" className="hover:text-cyan-500">
                    info@spacyfire.com
                  </a>
                </p>
                <p>Phone: +1 (555) 123-4567</p>
                <p className="mt-4">123 Innovation Drive, Tech City</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-12 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl font-semibold text-slate-300 mb-8">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {['client1.jpg', 'client2.jpg', 'client3.jpg', 'client4.jpg'].map((logo, index) => (
                <img
                  key={index}
                  src={`/images/${logo}`}
                  alt={`Client ${index + 1}`}
                  className="h-10 opacity-70 hover:opacity-100 transition"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Spacy Fire</h3>
              <p className="text-slate-400 text-sm">Delivering digital excellence since 2015.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#home" className="hover:text-cyan-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-cyan-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#templates" className="hover:text-cyan-500">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-cyan-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="https://twitter.com" className="hover:text-cyan-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="hover:text-cyan-500">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="hover:text-cyan-500">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="flex" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-md text-white focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-cyan-500 text-slate-900 px-4 py-2 rounded-r-md hover:bg-cyan-400 font-semibold"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-400 text-sm">
            © 2025 Spacy Fire. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;