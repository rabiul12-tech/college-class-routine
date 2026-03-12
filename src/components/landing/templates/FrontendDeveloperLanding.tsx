"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import styles from "./FrontendDeveloperLanding.module.css";
import type {
  FrontendDeveloperLandingData,
  LandingPageRecord,
} from "@/lib/landing/types";

type FrontendDeveloperLandingPage =
  LandingPageRecord<FrontendDeveloperLandingData> & {
    template: "frontend-developer";
  };

type FrontendDeveloperLandingProps = {
  page: FrontendDeveloperLandingPage;
};

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  budget: "",
  message: "",
};

export default function FrontendDeveloperLanding({
  page,
}: FrontendDeveloperLandingProps) {
  const data = page.data;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");

  const submitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };

    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const revealEls = document.querySelectorAll(`.${styles.reveal}`);
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(styles.visible);

          const bars = entry.target.querySelectorAll(`.${styles.skillFill}`);
          bars.forEach((bar) => bar.classList.add(styles.animate));

          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealEls.forEach((el) => observer.observe(el));

    const skillCards = document.querySelectorAll(`.${styles.skillCard}`);
    const skillObserver = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const bars = entry.target.querySelectorAll(`.${styles.skillFill}`);
          bars.forEach((bar) => bar.classList.add(styles.animate));

          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    skillCards.forEach((card) => skillObserver.observe(card));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    if (formSent) {
      setFormSent(false);
    }

    if (formError) {
      setFormError("");
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMenuLinkClick = () => {
    setMenuOpen(false);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setFormError("Please fill in your name, email, and message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setFormError("");
    setSending(true);

    submitTimerRef.current = window.setTimeout(() => {
      setSending(false);
      setFormSent(true);
      setForm(initialFormState);
    }, 900);
  };

  return (
    <div className={styles.page}>
      <div
        className={styles.scrollProgress}
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navInner}>
          <a href="#hero" className={styles.navLogo}>
            {data.brand}
          </a>

          <ul className={styles.navLinks}>
            {data.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className={styles.navCtaWrap}>
            <a href="#contact" className={styles.navCta}>
              Hire Me →
            </a>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
      >
        <ul>
          {data.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleMenuLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <section id="hero" className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                {data.hero.availabilityText}
              </div>

              <h1 className={styles.heroTitle}>
                {data.hero.title}
                <br />
                <span className={styles.gradientText}>
                  {data.hero.highlight}
                </span>
              </h1>

              <p className={styles.heroDesc}>{data.hero.description}</p>

              <div className={styles.heroBtns}>
                <a
                  href={data.hero.primaryAction.href}
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  {data.hero.primaryAction.label}
                </a>

                <a
                  href={data.hero.secondaryAction.href}
                  className={`${styles.btn} ${styles.btnOutline}`}
                >
                  {data.hero.secondaryAction.label}
                </a>
              </div>

              <div className={styles.heroStats}>
                {data.hero.stats.map((item) => (
                  <div key={item.label}>
                    <div className={styles.statNum}>{item.value}</div>
                    <div className={styles.statLabel}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={`${styles.floatingTag} ${styles.tagTop}`}>
                <span className={`${styles.tagDot} ${styles.green}`} />
                {data.hero.card.topTag}
              </div>

              <div className={styles.heroCard}>
                <div className={styles.heroAvatar}>
                  {data.hero.card.initials}
                </div>
                <div className={styles.heroCardName}>{data.hero.card.name}</div>
                <div className={styles.heroCardRole}>{data.hero.card.role}</div>

                <div className={styles.codeBlock}>
                  {data.hero.card.codeLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>

              <div className={`${styles.floatingTag} ${styles.tagBottom}`}>
                <span className={`${styles.tagDot} ${styles.blue}`} />
                {data.hero.card.bottomTag}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutVisual} ${styles.reveal}`}>
              <div className={styles.aboutImgWrapper}>
                <div className={styles.aboutMonogram}>
                  {data.hero.card.initials}
                </div>
                <div className={styles.aboutNameDisplay}>{page.seoTitle}</div>
                <div className={styles.aboutRoleDisplay}>
                  {data.hero.card.role}
                </div>

                <div className={styles.aboutTags}>
                  {data.about.tags.map((tag) => (
                    <span key={tag} className={styles.aboutTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`${styles.aboutContent} ${styles.reveal} ${styles.revealDelay2}`}
            >
              <div className={styles.sectionLabel}>{data.about.label}</div>

              <h2>
                {data.about.title}{" "}
                <span className={styles.gradientText}>
                  {data.about.highlight}
                </span>{" "}
                {data.about.suffix}
              </h2>

              {data.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <ul className={styles.aboutList}>
                {data.about.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <div className={styles.sectionLabel}>{data.skills.label}</div>
            <h2>
              {data.skills.title}{" "}
              <span className={styles.gradientText}>
                {data.skills.highlight}
              </span>
            </h2>
            <p>{data.skills.description}</p>
          </div>

          <div className={styles.skillsGrid}>
            {data.skills.items.map((item, index) => (
              <div
                key={item.name}
                className={`${styles.skillCard} ${styles.reveal}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.skillIcon}>{item.icon}</div>
                <div className={styles.skillName}>{item.name}</div>
                <div className={styles.skillLevel}>{item.level}</div>

                <div className={styles.skillBar}>
                  <div
                    className={styles.skillFill}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <div className={styles.sectionLabel}>{data.projects.label}</div>
            <h2>
              {data.projects.title}{" "}
              <span className={styles.gradientText}>
                {data.projects.highlight}
              </span>
            </h2>
            <p>{data.projects.description}</p>
          </div>

          <div className={styles.projectsGrid}>
            {data.projects.items.map((item, index) => (
              <div
                key={item.title}
                className={`${styles.projectCard} ${
                  item.featured ? styles.featured : ""
                } ${styles.reveal} ${
                  index === 1
                    ? styles.revealDelay1
                    : index === 2
                      ? styles.revealDelay2
                      : ""
                }`}
              >
                <div className={styles.projectThumb}>
                  <div className={styles.projectThumbBg}>{item.thumbText}</div>

                  {item.live ? (
                    <div className={styles.projectLiveBadge}>
                      <span className={styles.liveDot} />
                      LIVE
                    </div>
                  ) : null}
                </div>

                <div className={styles.projectBody}>
                  <div className={styles.projectNum}>{item.badge}</div>
                  <h3 className={styles.projectTitle}>{item.title}</h3>
                  <p className={styles.projectDesc}>{item.description}</p>

                  <div className={styles.projectStack}>
                    {item.tech.map((tech) => (
                      <span key={tech} className={styles.stackTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.link.href}
                    target={
                      item.link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.link.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className={styles.projectLink}
                  >
                    {item.link.label} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.projectsMore} ${styles.reveal}`}>
            <div className={styles.projectsMoreText}>
              <h4>{data.projects.summary.title}</h4>
              <p>{data.projects.summary.description}</p>
            </div>

            <div className={styles.platformBadges}>
              {data.projects.summary.platforms.map((platform) => (
                <span key={platform} className={styles.platformBadge}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <div className={styles.sectionLabel}>{data.whyHire.label}</div>
            <h2>
              {data.whyHire.title}{" "}
              <span className={styles.gradientText}>
                {data.whyHire.highlight}
              </span>
            </h2>
            <p>{data.whyHire.description}</p>
          </div>

          <div className={styles.whyGrid}>
            {data.whyHire.items.map((item, index) => (
              <div
                key={item.number}
                className={`${styles.whyCard} ${styles.reveal}`}
                data-num={item.number}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.whyIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className={`${styles.whyBottom} ${styles.reveal}`}>
            <h3>{data.whyHire.cta.title}</h3>
            <p>{data.whyHire.cta.description}</p>
            <a
              href={data.whyHire.cta.action.href}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              {data.whyHire.cta.action.label}
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={`${styles.contactInfo} ${styles.reveal}`}>
              <div className={styles.sectionLabel}>{data.contact.label}</div>
              <h2>
                {data.contact.title}{" "}
                <span className={styles.gradientText}>
                  {data.contact.highlight}
                </span>
              </h2>
              <p>{data.contact.description}</p>

              <div className={styles.contactItems}>
                {data.contact.items.map((item) => (
                  <div key={item.label} className={styles.contactItem}>
                    <div className={styles.contactIcon}>{item.icon}</div>
                    <div>
                      <div className={styles.contactLabel}>{item.label}</div>
                      <div className={styles.contactValue}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={styles.platformBadges}
                style={{ marginTop: "28px" }}
              >
                {data.contact.socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={styles.platformBadge}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`${styles.contactForm} ${styles.reveal} ${styles.revealDelay2}`}
            >
              <h3>{data.contact.form.title}</h3>

              <form onSubmit={submitForm} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="mn-name">Your Name</label>
                    <input
                      id="mn-name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="mn-email">Email Address</label>
                    <input
                      id="mn-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mn-subject">Subject</label>
                  <input
                    id="mn-subject"
                    name="subject"
                    type="text"
                    placeholder={data.contact.form.subjectPlaceholder}
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mn-budget">Budget Range</label>
                  <select
                    id="mn-budget"
                    name="budget"
                    className={styles.formSelect}
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a range...
                    </option>
                    {data.contact.form.budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mn-message">Message</label>
                  <textarea
                    id="mn-message"
                    name="message"
                    placeholder={data.contact.form.messagePlaceholder}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {formError ? (
                  <div className={styles.formError}>{formError}</div>
                ) : null}

                <div className={styles.formSubmit}>
                  {!formSent ? (
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles.btnPrimary}`}
                      disabled={sending}
                      style={sending ? { opacity: 0.7 } : undefined}
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </button>
                  ) : (
                    <div className={styles.formSuccess}>
                      ✓ {data.contact.form.successMessage}
                    </div>
                  )}
                </div>
              </form>

              <p className={styles.formNote}>{data.contact.form.note}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>{data.brand}</div>

          <p className={styles.footerCopy}>{data.footer.copyright}</p>

          <div className={styles.footerLinks}>
            {data.footer.links.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
