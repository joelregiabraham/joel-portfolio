import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = {
    dark: {
      bg: '#0a0a0f',
      bgSecondary: '#12121a',
      bgTertiary: '#1a1a24',
      text: '#f5f5f7',
      textSecondary: '#a1a1aa',
      accent: '#6366f1',
      accentHover: '#818cf8',
      border: '#27272a',
      card: 'rgba(255,255,255,0.03)',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
    },
    light: {
      bg: '#fafafa',
      bgSecondary: '#ffffff',
      bgTertiary: '#f4f4f5',
      text: '#18181b',
      textSecondary: '#52525b',
      accent: '#4f46e5',
      accentHover: '#6366f1',
      border: '#e4e4e7',
      card: 'rgba(0,0,0,0.02)',
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
        'Completed enterprise-wide Windows 11 migration across 200+ PCs and laptops',
        'Leading HR automation initiative, developing custom XML forms on Dayforce platform',
        'Architecting Android mobile app for pallet tracking and warehouse operations',
        'Resolved 10+ daily support tickets via Freshdesk with high service levels',
      ]
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Snyder Tree Removal',
      location: 'New Hamburg, ON',
      period: 'Jan 2025 – Present',
      highlights: [
        'Modernized 10-year-old static website into responsive, interactive platform',
        'Collaborated with senior developer to align with industry best practices',
      ]
    }
  ];

  const projects = [
    {
      title: 'Travel Mate',
      tech: ['MERN', 'TypeScript', 'MongoDB', 'Cloudinary', 'Stripe'],
      description: 'Full-stack hotel booking platform with secure payments, handling 100+ test transactions. Reduced image load times by 40% through optimization.',
      period: 'Jan 2024 - Mar 2024',
      link: '#'
    },
    {
      title: 'Pallet Tracking App',
      tech: ['Android Studio', 'Java', 'SQLite'],
      description: 'Custom Android application for warehouse operations, featuring barcode scanning and Excel export functionality.',
      period: '2025',
      link: '#'
    },
    {
      title: 'Dayforce HR Automation',
      tech: ['XML', 'Dayforce', 'API Integration'],
      description: 'Custom XML forms automating employee data workflows, significantly streamlining HR processes.',
      period: '2025',
      link: '#'
    }
  ];

  const skills = {
    'Languages': ['C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    'Frontend': ['React', 'HTML5', 'CSS3', 'Responsive UI/UX'],
    'Backend': ['Node.js', 'Express.js', 'FastAPI', 'RESTful APIs'],
    'Database': ['MongoDB', 'Supabase', 'Power BI', 'Azure Databricks'],
    'Cloud & DevOps': ['Azure', 'Docker', 'CI/CD', 'Cloudinary'],
    'Mobile & IT': ['Android Studio', 'Windows Deployment', 'Active Directory', 'SharePoint']
  };

  const NavLink = ({ section }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setIsMenuOpen(false);
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{
        background: 'none',
        border: 'none',
        color: activeSection === section ? t.accent : t.textSecondary,
        fontSize: '0.875rem',
        fontWeight: activeSection === section ? '600' : '400',
        cursor: 'pointer',
        padding: '0.5rem 1rem',
        transition: 'all 0.3s ease',
        textTransform: 'capitalize',
        letterSpacing: '0.05em',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {section}
    </button>
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: t.bg,
      color: t.text,
      fontFamily: "'DM Sans', sans-serif",
      transition: 'all 0.4s ease',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        html { scroll-behavior: smooth; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-in {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        
        ::selection {
          background: ${t.accent};
          color: white;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${t.bgSecondary};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${t.accent};
          border-radius: 4px;
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: `${t.bg}ee`,
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${t.border}`,
        padding: '1rem 2rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: '700',
            background: t.gradient,
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite',
          }}>
            JA
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {sections.map(section => (
                <NavLink key={section} section={section} />
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: t.bgTertiary,
                border: `1px solid ${t.border}`,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                marginLeft: '1rem',
              }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: t.gradient,
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.15,
          animation: 'float 6s ease-in-out infinite',
        }} />

        <div style={{
          maxWidth: '900px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <p className="animate-in" style={{
            color: t.accent,
            fontSize: '1rem',
            fontWeight: '500',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Computer Science Student
          </p>

          <h1 className="animate-in delay-1" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '700',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Joel Regi{' '}
            <span style={{
              background: t.gradient,
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 4s ease infinite',
            }}>
              Abraham
            </span>
          </h1>

          <p className="animate-in delay-2" style={{
            fontSize: '1.25rem',
            color: t.textSecondary,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            Building enterprise solutions & modern web experiences.
            Passionate about turning complex problems into elegant, user-friendly applications.
          </p>

          <div className="animate-in delay-3" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="#contact" style={{
              background: t.gradient,
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: `0 4px 20px ${t.accent}40`,
            }}>
              Get in Touch
            </a>
            <a href="#projects" style={{
              background: 'transparent',
              color: t.text,
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              border: `2px solid ${t.border}`,
              transition: 'all 0.3s ease',
            }}>
              View Projects
            </a>
          </div>

          <div className="animate-in delay-4" style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '3rem',
          }}>
            {[
              { icon: '📧', href: 'mailto:jregiabraham@gmail.com' },
              { icon: '💼', href: 'https://www.linkedin.com/in/joel-regi-abraham-739b68279/' },
              { icon: '💻', href: 'https://github.com/jregiabraham' },
            ].map((social, i) => (
              <a key={i} href={social.href} style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: t.bgSecondary,
                border: `1px solid ${t.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        backgroundColor: t.bgSecondary,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            About <span style={{ color: t.accent }}>Me</span>
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: t.gradient,
            margin: '0 auto 3rem',
            borderRadius: '2px',
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div style={{
              background: t.gradient,
              borderRadius: '20px',
              padding: '4px',
            }}>
              <div style={{
                background: t.bgSecondary,
                borderRadius: '18px',
                padding: '3rem',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '5rem',
                  marginBottom: '1rem',
                }}>👨‍💻</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Joel Regi Abraham</h3>
                <p style={{ color: t.textSecondary }}>Waterloo, Ontario</p>
              </div>
            </div>

            <div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: t.textSecondary,
                marginBottom: '1.5rem',
              }}>
                I'm a <strong style={{ color: t.text }}>4th-year Computer Science Honours student</strong> at
                Conestoga College with a passion for building impactful software solutions.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: t.textSecondary,
                marginBottom: '1.5rem',
              }}>
                Currently working as an IT Support Technician at <strong style={{ color: t.text }}>Erb Group of Companies</strong>,
                where I've led enterprise-wide migrations, developed HR automation solutions, and am building
                custom Android applications for warehouse operations.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: t.textSecondary,
              }}>
                I thrive on taking complex challenges and transforming them into elegant,
                user-friendly solutions that make a real difference.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                marginTop: '2rem',
              }}>
                {[
                  { number: '200+', label: 'Systems Migrated' },
                  { number: '10+', label: 'Daily Tickets' },
                  { number: '100%', label: 'Dedication' },
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: t.accent,
                    }}>{stat.number}</div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: t.textSecondary,
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        padding: '6rem 2rem',
        backgroundColor: t.bg,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            Work <span style={{ color: t.accent }}>Experience</span>
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: t.gradient,
            margin: '0 auto 3rem',
            borderRadius: '2px',
          }} />

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: t.border,
            }} />

            {experience.map((job, index) => (
              <div key={index} style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: '2.5rem',
              }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '12px',
                  top: '8px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: t.gradient,
                  border: `3px solid ${t.bg}`,
                }} />

                <div style={{
                  background: t.bgSecondary,
                  borderRadius: '16px',
                  padding: '2rem',
                  border: `1px solid ${t.border}`,
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{job.title}</h3>
                      <p style={{ color: t.accent, fontWeight: '500' }}>{job.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: t.textSecondary, fontSize: '0.9rem' }}>{job.period}</p>
                      <p style={{ color: t.textSecondary, fontSize: '0.85rem' }}>{job.location}</p>
                    </div>
                  </div>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                  }}>
                    {job.highlights.map((highlight, i) => (
                      <li key={i} style={{
                        position: 'relative',
                        paddingLeft: '1.5rem',
                        marginBottom: '0.75rem',
                        color: t.textSecondary,
                        lineHeight: 1.6,
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: t.accent,
                        }}>▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '6rem 2rem',
        backgroundColor: t.bgSecondary,
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            Featured <span style={{ color: t.accent }}>Projects</span>
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: t.gradient,
            margin: '0 auto 3rem',
            borderRadius: '2px',
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                background: t.bg,
                borderRadius: '20px',
                overflow: 'hidden',
                border: `1px solid ${t.border}`,
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  height: '180px',
                  background: t.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                }}>
                  {index === 0 ? '✈️' : index === 1 ? '📦' : '⚙️'}
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                  }}>
                    <h3 style={{ fontSize: '1.25rem' }}>{project.title}</h3>
                    <span style={{
                      fontSize: '0.8rem',
                      color: t.textSecondary,
                    }}>{project.period}</span>
                  </div>

                  <p style={{
                    color: t.textSecondary,
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}>
                    {project.tech.map((tech, i) => (
                      <span key={i} style={{
                        background: t.bgTertiary,
                        color: t.accent,
                        padding: '0.35rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '6rem 2rem',
        backgroundColor: t.bg,
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            Technical <span style={{ color: t.accent }}>Skills</span>
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: t.gradient,
            margin: '0 auto 3rem',
            borderRadius: '2px',
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} style={{
                background: t.bgSecondary,
                borderRadius: '16px',
                padding: '1.5rem',
                border: `1px solid ${t.border}`,
              }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: t.accent,
                  letterSpacing: '0.05em',
                }}>
                  {category}
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {items.map((skill, i) => (
                    <span key={i} style={{
                      background: t.bgTertiary,
                      color: t.text,
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        backgroundColor: t.bgSecondary,
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.5rem',
            marginBottom: '1rem',
          }}>
            Let's <span style={{ color: t.accent }}>Connect</span>
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: t.gradient,
            margin: '0 auto 2rem',
            borderRadius: '2px',
          }} />

          <p style={{
            color: t.textSecondary,
            fontSize: '1.1rem',
            marginBottom: '3rem',
            lineHeight: 1.7,
          }}>
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '📧', label: 'Email', value: 'itzmejoels@gmail.com', href: 'mailto:jregiabraham@gmail.com' },
              // { icon: '📱', label: 'Phone', value: '579-985-8555', href: 'tel:579-985-8555' },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/joel', href: 'https://www.linkedin.com/in/joel-regi-abraham-739b68279/' },
            ].map((contact, i) => (
              <a key={i} href={contact.href} style={{
                background: t.bg,
                padding: '1.5rem 2rem',
                borderRadius: '16px',
                textDecoration: 'none',
                border: `1px solid ${t.border}`,
                transition: 'all 0.3s ease',
                minWidth: '180px',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{contact.icon}</div>
                <div style={{ color: t.textSecondary, fontSize: '0.85rem', marginBottom: '0.25rem' }}>{contact.label}</div>
                <div style={{ color: t.text, fontWeight: '500', fontSize: '0.95rem' }}>{contact.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: `1px solid ${t.border}`,
        backgroundColor: t.bg,
      }}>
        <p style={{ color: t.textSecondary, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Joel Regi Abraham. Built with React.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
