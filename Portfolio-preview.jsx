import React, { useState } from 'react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  const theme = {
    dark: {
      bg: '#0a0a0f',
      bgSecondary: '#12121a',
      bgTertiary: '#1a1a24',
      text: '#f5f5f7',
      textSecondary: '#a1a1aa',
      accent: '#6366f1',
      border: '#27272a',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
    },
    light: {
      bg: '#fafafa',
      bgSecondary: '#ffffff',
      bgTertiary: '#f4f4f5',
      text: '#18181b',
      textSecondary: '#52525b',
      accent: '#4f46e5',
      border: '#e4e4e7',
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)',
    }
  };

  const t = darkMode ? theme.dark : theme.light;
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

  const experience = [
    {
      title: 'IT Support Technician COOP',
      company: 'Erb Group of Companies',
      location: 'Waterloo, ON',
      period: 'May 2025 – Present',
      highlights: [
        'Completed enterprise-wide Windows 11 migration across 200+ PCs',
        'Leading HR automation initiative on Dayforce platform',
        'Architecting Android app for pallet tracking operations',
      ]
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Snyder Tree Removal',
      location: 'New Hamburg, ON',
      period: 'Jan 2025 – Present',
      highlights: [
        'Modernized legacy website into responsive platform',
      ]
    }
  ];

  const projects = [
    { title: 'Travel Mate', tech: ['MERN', 'TypeScript', 'Stripe'], desc: 'Hotel booking platform with 100+ test transactions', icon: '✈️' },
    { title: 'Pallet Tracking App', tech: ['Android', 'Java', 'SQLite'], desc: 'Warehouse operations with barcode scanning', icon: '📦' },
    { title: 'HR Automation', tech: ['XML', 'Dayforce', 'API'], desc: 'Custom forms streamlining HR workflows', icon: '⚙️' },
  ];

  const skills = {
    'Languages': ['C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    'Frontend': ['React', 'HTML5', 'CSS3', 'Responsive UI'],
    'Backend': ['Node.js', 'Express', 'FastAPI', 'REST APIs'],
    'Cloud & DevOps': ['Azure', 'Docker', 'CI/CD'],
  };

  const NavLink = ({ section }) => (
    <button onClick={() => setActiveSection(section)} style={{
      background: 'none', border: 'none', color: activeSection === section ? t.accent : t.textSecondary,
      fontSize: '0.8rem', fontWeight: activeSection === section ? '600' : '400', cursor: 'pointer',
      padding: '0.4rem 0.8rem', textTransform: 'capitalize', fontFamily: "'DM Sans', sans-serif",
    }}>{section}</button>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s ease' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: `${t.bg}ee`, backdropFilter: 'blur(20px)', borderBottom: `1px solid ${t.border}`, padding: '0.75rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: '700', background: t.gradient, backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradientShift 4s ease infinite' }}>JA</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {sections.map(s => <NavLink key={s} section={s} />)}
            <button onClick={() => setDarkMode(!darkMode)} style={{ background: t.bgTertiary, border: `1px solid ${t.border}`, borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', marginLeft: '0.75rem' }}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: '300px', height: '300px', background: t.gradient, borderRadius: '50%', filter: 'blur(100px)', opacity: 0.12, animation: 'float 6s ease-in-out infinite' }} />
        <div style={{ maxWidth: '800px', textAlign: 'center', position: 'relative' }}>
          <p style={{ color: t.accent, fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Computer Science Student</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: '700', lineHeight: 1.1, marginBottom: '1rem' }}>
            Joel Regi <span style={{ background: t.gradient, backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradientShift 4s ease infinite' }}>Abraham</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: t.textSecondary, maxWidth: '550px', margin: '0 auto 2rem', lineHeight: 1.6 }}>Building enterprise solutions & modern web experiences. Turning complex problems into elegant applications.</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: t.gradient, color: 'white', padding: '0.9rem 1.8rem', borderRadius: '50px', border: 'none', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', boxShadow: `0 4px 20px ${t.accent}40` }}>Get in Touch</button>
            <button style={{ background: 'transparent', color: t.text, padding: '0.9rem 1.8rem', borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem', border: `2px solid ${t.border}`, cursor: 'pointer' }}>View Projects</button>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            {['📧', '💼', '💻'].map((icon, i) => (
              <div key={i} style={{ width: '44px', height: '44px', borderRadius: '50%', background: t.bgSecondary, border: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>{icon}</div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: t.bgSecondary }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center' }}>About <span style={{ color: t.accent }}>Me</span></h2>
          <div style={{ width: '50px', height: '3px', background: t.gradient, margin: '0 auto 2rem', borderRadius: '2px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div style={{ background: t.gradient, borderRadius: '16px', padding: '3px' }}>
              <div style={{ background: t.bgSecondary, borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '0.75rem' }}>👨‍💻</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>Joel Regi Abraham</h3>
                <p style={{ color: t.textSecondary }}>Waterloo, Ontario</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: t.textSecondary, marginBottom: '1rem' }}>
                <strong style={{ color: t.text }}>4th-year Computer Science Honours student</strong> at Conestoga College with a passion for building impactful software solutions.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: t.textSecondary }}>
                Currently at <strong style={{ color: t.text }}>Erb Group of Companies</strong>, leading enterprise migrations, HR automation, and Android development.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                {[{ n: '200+', l: 'Systems' }, { n: '10+', l: 'Daily Tickets' }, { n: '100%', l: 'Dedication' }].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: t.accent }}>{s.n}</div>
                    <div style={{ fontSize: '0.75rem', color: t.textSecondary }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: t.bg }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center' }}>Work <span style={{ color: t.accent }}>Experience</span></h2>
          <div style={{ width: '50px', height: '3px', background: t.gradient, margin: '0 auto 2rem', borderRadius: '2px' }} />
          {experience.map((job, i) => (
            <div key={i} style={{ background: t.bgSecondary, borderRadius: '14px', padding: '1.5rem', border: `1px solid ${t.border}`, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div><h3 style={{ fontSize: '1.1rem' }}>{job.title}</h3><p style={{ color: t.accent, fontWeight: '500', fontSize: '0.9rem' }}>{job.company}</p></div>
                <div style={{ textAlign: 'right' }}><p style={{ color: t.textSecondary, fontSize: '0.8rem' }}>{job.period}</p><p style={{ color: t.textSecondary, fontSize: '0.75rem' }}>{job.location}</p></div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {job.highlights.map((h, j) => (
                  <li key={j} style={{ paddingLeft: '1.25rem', marginBottom: '0.5rem', color: t.textSecondary, fontSize: '0.9rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: t.accent }}>▸</span>{h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: t.bgSecondary }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center' }}>Featured <span style={{ color: t.accent }}>Projects</span></h2>
          <div style={{ width: '50px', height: '3px', background: t.gradient, margin: '0 auto 2rem', borderRadius: '2px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {projects.map((p, i) => (
              <div key={i} style={{ background: t.bg, borderRadius: '14px', overflow: 'hidden', border: `1px solid ${t.border}` }}>
                <div style={{ height: '120px', background: t.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>{p.icon}</div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ color: t.textSecondary, fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tech.map((tech, j) => (
                      <span key={j} style={{ background: t.bgTertiary, color: t.accent, padding: '0.25rem 0.6rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '500' }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: t.bg }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center' }}>Technical <span style={{ color: t.accent }}>Skills</span></h2>
          <div style={{ width: '50px', height: '3px', background: t.gradient, margin: '0 auto 2rem', borderRadius: '2px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {Object.entries(skills).map(([cat, items], i) => (
              <div key={i} style={{ background: t.bgSecondary, borderRadius: '12px', padding: '1.25rem', border: `1px solid ${t.border}` }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem', color: t.accent }}>{cat}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {items.map((s, j) => (
                    <span key={j} style={{ background: t.bgTertiary, color: t.text, padding: '0.35rem 0.7rem', borderRadius: '6px', fontSize: '0.75rem' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: t.bgSecondary }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '0.75rem' }}>Let's <span style={{ color: t.accent }}>Connect</span></h2>
          <div style={{ width: '50px', height: '3px', background: t.gradient, margin: '0 auto 1.5rem', borderRadius: '2px' }} />
          <p style={{ color: t.textSecondary, marginBottom: '2rem', lineHeight: 1.6 }}>I'm always open to discussing new opportunities and interesting projects.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {[{ icon: '📧', label: 'Email', value: 'itzmejoels@gmail.com' }, { icon: '📱', label: 'Phone', value: '579-985-8555' }, { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/joel' }].map((c, i) => (
              <div key={i} style={{ background: t.bg, padding: '1.25rem 1.5rem', borderRadius: '12px', border: `1px solid ${t.border}`, minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{c.icon}</div>
                <div style={{ color: t.textSecondary, fontSize: '0.75rem', marginBottom: '0.2rem' }}>{c.label}</div>
                <div style={{ color: t.text, fontWeight: '500', fontSize: '0.85rem' }}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '1.5rem', textAlign: 'center', borderTop: `1px solid ${t.border}`, backgroundColor: t.bg }}>
        <p style={{ color: t.textSecondary, fontSize: '0.8rem' }}>© {new Date().getFullYear()} Joel Regi Abraham. Built with React.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
