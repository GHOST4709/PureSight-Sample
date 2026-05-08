import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    {
      icon: '📊',
      title: 'Real-Time Transparency',
      description: 'Live data visible on-device, no guessing required. Know exactly what you\'re drinking, right now.'
    },
    {
      icon: '📝',
      title: 'Complete Accountability',
      description: 'Every filter replacement and maintenance event is logged. Full transparency, full traceability.'
    },
    {
      icon: '🛡️',
      title: 'Auto-Shutoff Protection',
      description: 'Prevents unsafe water consumption if UV fails or filter is exhausted. Safety first, always.'
    },
    {
      icon: '🔧',
      title: 'Universal Compatibility',
      description: 'Works with any brand of water purifier. No vendor lock-in, just pure protection.'
    }
  ];

  const audiences = [
    { name: 'Universities & Colleges', icon: '🎓' },
    { name: 'Schools', icon: '🏫' },
    { name: 'Government Buildings', icon: '🏛️' },
    { name: 'Hospitals', icon: '🏥' },
    { name: 'Corporate Offices', icon: '🏢' },
    { name: 'Railway Stations', icon: '🚂' },
    { name: 'Airports', icon: '✈️' },
    { name: 'Public Parks', icon: '🌳' },
    { name: 'Community Centers', icon: '🏘️' }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo-container">
            <img src="/logo.png" alt="PureSight Logo" className="logo" />
            <span className="brand-name">PureSight</span>
          </div>
          <div className="nav-links">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#features">Features</a>
            <a href="#contact" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="grid-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">IoT-Based Water Monitoring</div>
          <h1 className="hero-title">
            Making Water Quality
            <span className="highlight"> Visible</span>
          </h1>
          <p className="hero-subtitle">
            End the guessing game. PureSight brings real-time transparency to water quality in public spaces — 
            monitor filter health, UV lamp status, and water safety at a glance.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="primary-button">Request a Demo</a>
            <a href="#problem" className="secondary-button">Learn More →</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Transparency</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Monitoring</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">Real-Time</div>
              <div className="stat-label">Protection</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section observe" id="problem">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The Problem</span>
            <h2 className="section-title">Every Water Cooler is a Black Box</h2>
            <p className="section-description">
              People have no way to verify whether the water they're drinking is safe right now
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <div className="problem-icon">❓</div>
              </div>
              <h3>No Verification</h3>
              <p>Is the filter working? When was it last replaced? Whether the UV lamp is functioning? Nobody knows.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <div className="problem-icon">🤝</div>
              </div>
              <h3>Constant Blame Game</h3>
              <p>Institutions get blamed for unsafe water even when it's safe. People are forced to trust blindly or avoid water entirely.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <div className="problem-icon">⚠️</div>
              </div>
              <h3>Zero Transparency</h3>
              <p>No data, no logs, no accountability. Just uncertainty and risk every time someone fills their bottle.</p>
            </div>
          </div>

          <div className="problem-highlight">
            <div className="highlight-box">
              <p className="highlight-text">
                "PureSight ends the blame game by making water quality <strong>visible, verifiable, and transparent</strong>."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section observe" id="solution">
        <div className="container">
          <div className="solution-layout">
            <div className="solution-text">
              <span className="section-tag">The Solution</span>
              <h2 className="section-title">Transparency You Can See</h2>
              <p className="solution-description">
                PureSight is an IoT-based water purifier monitoring system that brings transparency 
                to water quality in public spaces. It monitors filter health, UV lamp status, and water 
                flow in real time — ensuring that the water people drink is safe and verified.
              </p>
              <div className="solution-points">
                <div className="solution-point">
                  <div className="point-check">✓</div>
                  <div>
                    <strong>Real-time monitoring</strong>
                    <p>Live data updates every second</p>
                  </div>
                </div>
                <div className="solution-point">
                  <div className="point-check">✓</div>
                  <div>
                    <strong>Complete logging</strong>
                    <p>Every event tracked and recorded</p>
                  </div>
                </div>
                <div className="solution-point">
                  <div className="point-check">✓</div>
                  <div>
                    <strong>Automatic protection</strong>
                    <p>Shuts off when parameters fail</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="solution-visual">
              <div className="monitor-display">
                <div className="monitor-header">
                  <div className="monitor-status"></div>
                  <span>Live Monitor</span>
                </div>
                <div className="monitor-content">
                  <div className="monitor-metric">
                    <div className="metric-label">Filter Health</div>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: '92%' }}></div>
                    </div>
                    <div className="metric-value good">92%</div>
                  </div>
                  <div className="monitor-metric">
                    <div className="metric-label">UV Lamp Status</div>
                    <div className="metric-status good">Active</div>
                  </div>
                  <div className="monitor-metric">
                    <div className="metric-label">Water Flow</div>
                    <div className="metric-value">2.4 L/min</div>
                  </div>
                  <div className="monitor-metric">
                    <div className="metric-label">Last Maintenance</div>
                    <div className="metric-value">3 days ago</div>
                  </div>
                </div>
                <div className="monitor-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section observe" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Key Benefits</span>
            <h2 className="section-title">Why PureSight Works</h2>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="audience-section observe" id="audience">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Who It's For</span>
            <h2 className="section-title">Built for Public Spaces</h2>
            <p className="section-description">
              Wherever people gather, PureSight ensures water quality transparency
            </p>
          </div>

          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <div key={index} className="audience-card">
                <div className="audience-icon">{audience.icon}</div>
                <div className="audience-name">{audience.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section observe" id="contact">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <span className="section-tag">Get Started</span>
              <h2 className="section-title">Ready to Make Water Quality Visible?</h2>
              <p className="contact-description">
                Join institutions across the country in bringing transparency and trust 
                to water quality. Request a demo today.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Free consultation</span>
                </div>
                <div className="contact-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Custom implementation</span>
                </div>
                <div className="contact-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>24/7 support</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  placeholder="Your institution or company"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo-container">
                <img src="/logo.png" alt="PureSight Logo" className="logo" />
                <span className="brand-name">PureSight</span>
              </div>
              <p className="footer-tagline">Making Water Quality Visible</p>
            </div>
            <div className="footer-links">
              <a href="#problem">Problem</a>
              <a href="#solution">Solution</a>
              <a href="#features">Features</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 PureSight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
