'use client';

import { DM_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';
import type { DeveloperPortfolioLandingData } from '@/lib/landing/types';
import styles from './DeveloperPortfolioLanding.module.css';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'] });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] });

type Props = {
  data: DeveloperPortfolioLandingData;
};

export default function DeveloperPortfolioLanding({ data }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [submitted, setSubmitted] = useState(false);
  const [barsReady, setBarsReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setBarsReady(true), 250);
    return () => window.clearTimeout(timeout);
  }, []);

  const filteredProjects = useMemo(() => {
    if (portfolioFilter === 'all') return data.portfolio.projects;
    return data.portfolio.projects.filter((project) => project.categories.includes(portfolioFilter));
  }, [data.portfolio.projects, portfolioFilter]);

  const handleSubmit = () => {
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2800);
  };

  return (
    <div className={`${styles.root} ${dmSans.className}`}>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <a href="#hero" className={`${styles.logo} ${playfair.className}`}>
            Alex<span>.</span>dev
          </a>

          <ul className={styles.navLinks}>
            {data.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={item.label === 'Hire Me' ? styles.navCta : ''}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button type="button" className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerActive : ''}`} onClick={() => setMobileOpen((prev) => !prev)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}>
        {data.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={playfair.className}>
            {item.label}
          </a>
        ))}
      </div>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={`${styles.gradientOrb} ${styles.orbOne}`} />
          <div className={`${styles.gradientOrb} ${styles.orbTwo}`} />
          <div className={styles.heroGridLines} />
        </div>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.pulse} />
              {data.availabilityText}
            </div>
            <h1 className={`${styles.heroTitle} ${playfair.className}`}>
              {data.heroTitle} <span>{data.heroHighlight}</span>
            </h1>
            <p className={styles.heroDescription}>{data.heroDescription}</p>
            <div className={styles.heroActions}>
              <a href={data.heroActions.primary.href} className={styles.primaryButton}>
                {data.heroActions.primary.label} →
              </a>
              <a href={data.heroActions.secondary.href} className={styles.secondaryButton}>
                {data.heroActions.secondary.label}
              </a>
            </div>
            <div className={styles.heroStats}>
              {data.heroStats.map((item) => (
                <div key={item.label}>
                  <div className={`${styles.heroStatNumber} ${playfair.className}`}>{item.value}</div>
                  <div className={styles.heroStatLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.codeWindow}>
              <div className={styles.codeBar}>
                <span className={`${styles.codeDot} ${styles.dotRed}`} />
                <span className={`${styles.codeDot} ${styles.dotYellow}`} />
                <span className={`${styles.codeDot} ${styles.dotGreen}`} />
                <span className={`${styles.codeTitle} ${mono.className}`}>developer.js</span>
              </div>
              <div className={`${styles.codeBody} ${mono.className}`}>
                {data.codePreview.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
            <div className={`${styles.floatingTag} ${styles.tagOne}`}><span>⚛</span>{data.floatingTags[0]}</div>
            <div className={`${styles.floatingTag} ${styles.tagTwo}`}><span>▲</span>{data.floatingTags[1]}</div>
            <div className={`${styles.floatingTag} ${styles.tagThree}`}><span>🐘</span>{data.floatingTags[2]}</div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div className={styles.aboutImageWrap}>
            <div className={styles.aboutImage}>
              <div className={styles.aboutImagePlaceholder}>
                <div className={styles.aboutAvatar}>👨‍💻</div>
                <span>Your Photo Here</span>
              </div>
            </div>
            <div className={styles.expBadge}>
              <span className={`${styles.expBadgeNumber} ${playfair.className}`}>{data.about.experienceBadge}</span>
              <span className={styles.expBadgeText}>Years Exp.</span>
            </div>
          </div>

          <div>
            <div className={styles.sectionHeader}>
              <div className={`${styles.sectionLabel} ${mono.className}`}>{data.about.label}</div>
              <h2 className={`${styles.sectionTitle} ${playfair.className}`}>
                {data.about.title} <em>{data.about.titleHighlight}</em> business goals
              </h2>
            </div>
            {data.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.sectionText}>
                {paragraph}
              </p>
            ))}
            <div className={styles.highlightGrid}>
              {data.about.highlights.map((item) => (
                <div key={item} className={styles.highlightItem}>
                  <span className={styles.check}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centerHeader}`}>
            <div className={`${styles.sectionLabel} ${styles.centerLabel} ${mono.className}`}>{data.services.label}</div>
            <h2 className={`${styles.sectionTitle} ${playfair.className}`}>{data.services.title}</h2>
            <p className={styles.sectionSubtitle}>{data.services.description}</p>
          </div>
          <div className={styles.servicesGrid}>
            {data.services.items.map((item) => (
              <article key={item.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{item.icon}</div>
                <h3 className={`${styles.cardTitle} ${playfair.className}`}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
                <div className={styles.tagRow}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={`${styles.serviceTag} ${mono.className}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionLabel} ${mono.className}`}>{data.skills.label}</div>
            <h2 className={`${styles.sectionTitle} ${playfair.className}`}>{data.skills.title}</h2>
            <p className={styles.sectionSubtitle}>{data.skills.description}</p>
          </div>
          <div className={styles.skillsLayout}>
            <div className={styles.skillCardsGrid}>
              {data.skills.cards.map((item) => (
                <div key={item.name} className={styles.skillCard}>
                  <span className={styles.skillCardIcon}>{item.icon}</span>
                  <span className={styles.skillCardName}>{item.name}</span>
                  <span className={`${styles.skillCardLevel} ${mono.className}`}>{item.level}</span>
                </div>
              ))}
            </div>
            <div className={styles.skillBars}>
              {data.skills.bars.map((item) => (
                <div key={item.label} className={styles.skillBarItem}>
                  <label>
                    {item.label}
                    <span className={mono.className}>{item.value}%</span>
                  </label>
                  <div className={styles.skillBarTrack}>
                    <div className={styles.skillBarFill} style={{ width: barsReady ? `${item.value}%` : '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centerHeader}`}>
            <div className={`${styles.sectionLabel} ${styles.centerLabel} ${mono.className}`}>{data.portfolio.label}</div>
            <h2 className={`${styles.sectionTitle} ${playfair.className}`}>{data.portfolio.title}</h2>
            <p className={styles.sectionSubtitle}>{data.portfolio.description}</p>
          </div>

          <div className={styles.filterRow}>
            {data.portfolio.filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setPortfolioFilter(filter.value)}
                className={`${styles.filterButton} ${portfolioFilter === filter.value ? styles.filterButtonActive : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={styles.portfolioGrid}>
            {filteredProjects.map((project) => (
              <article key={project.title} className={styles.projectCard}>
                <div className={styles.projectThumb}>
                  <div className={styles.projectEmoji}>{project.emoji}</div>
                  <div className={styles.projectOverlay}>
                    <button type="button" className={styles.projectOverlayButton}>↗</button>
                    <button type="button" className={styles.projectOverlayButton}>⟨/⟩</button>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={`${styles.cardTitle} ${playfair.className}`}>{project.title}</h3>
                  <p className={styles.cardText}>{project.description}</p>
                  <div className={styles.tagRow}>
                    {project.tech.map((tech) => (
                      <span key={tech} className={`${styles.techTag} ${mono.className}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centerHeader}`}>
            <div className={`${styles.sectionLabel} ${styles.centerLabel} ${mono.className}`}>{data.testimonials.label}</div>
            <h2 className={`${styles.sectionTitle} ${playfair.className}`}>{data.testimonials.title}</h2>
            <p className={styles.sectionSubtitle}>{data.testimonials.description}</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {data.testimonials.items.map((item) => (
              <article key={item.name} className={styles.testimonialCard}>
                <span className={`${styles.quoteMark} ${playfair.className}`}>“</span>
                <div className={styles.testimonialStars}>★★★★★</div>
                <blockquote className={styles.testimonialQuote}>{item.quote}</blockquote>
                <div className={styles.authorRow}>
                  <div className={styles.avatar}>{item.initials}</div>
                  <div>
                    <div className={styles.authorName}>{item.name}</div>
                    <div className={styles.authorRole}>{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.centerHeader}`}>
            <div className={`${styles.sectionLabel} ${styles.centerLabel} ${mono.className}`}>{data.whyHire.label}</div>
            <h2 className={`${styles.sectionTitle} ${playfair.className}`}>{data.whyHire.title}</h2>
            <p className={styles.sectionSubtitle}>{data.whyHire.description}</p>
          </div>
          <div className={styles.whyGrid}>
            {data.whyHire.items.map((item, index) => (
              <article key={item.title} className={styles.whyCard}>
                <div className={`${styles.whyNumber} ${playfair.className}`}>{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className={`${styles.cardTitle} ${playfair.className}`}>{item.title}</h3>
                  <p className={styles.cardText}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={`${styles.container} ${styles.contactGrid}`}>
          <div>
            <div className={styles.sectionHeader}>
              <div className={`${styles.sectionLabel} ${mono.className}`}>{data.contact.label}</div>
              <h2 className={`${styles.sectionTitle} ${playfair.className}`}>{data.contact.title}</h2>
              <p className={styles.sectionSubtitle}>{data.contact.description}</p>
            </div>
            <div className={styles.contactCards}>
              {data.contact.cards.map((item) => (
                <div key={item.value} className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>{item.icon}</div>
                  <div>
                    <h4>{item.icon === '📧' ? 'Email' : item.icon === '📍' ? 'Location' : 'Availability'}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formWrap}>
            <h3 className={`${styles.cardTitle} ${playfair.className}`}>Send me a message</h3>
            <p className={styles.cardText}>Tell me about your project and I will respond within 24 hours.</p>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className={styles.formGroup}>
                <label>Your Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Budget Range</label>
                <select defaultValue="">
                  <option value="" disabled>Select budget</option>
                  <option>$1,000 – $3,000</option>
                  <option>$3,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Project Type</label>
                <select defaultValue="">
                  <option value="" disabled>Select type</option>
                  <option>New Website / App</option>
                  <option>Redesign / Rebuild</option>
                  <option>Landing Page</option>
                  <option>Full-Stack Application</option>
                  <option>Consulting / Audit</option>
                </select>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Project Details</label>
              <textarea placeholder="Tell me about your project, timeline, and any specific requirements..." />
            </div>
            <button type="button" className={styles.formSubmit} onClick={handleSubmit}>
              {submitted ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className={`${styles.ctaTitle} ${playfair.className}`}>
            {data.ctaBanner.title} <span>{data.ctaBanner.highlight}</span>
          </h2>
          <p className={styles.ctaText}>{data.ctaBanner.description}</p>
          <a href={data.ctaBanner.action.href} className={styles.primaryButton}>
            {data.ctaBanner.action.label} →
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <a href="#hero" className={`${styles.logo} ${playfair.className}`}>
              Alex<span>.</span>dev
            </a>
            <p className={styles.footerCopy}>{data.footer.copyright}</p>
          </div>
          <div className={styles.footerSocials}>
            {['⌘', 'in', '𝕏', '◉'].map((item) => (
              <a href="#" key={item} className={styles.footerSocial}>{item}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
