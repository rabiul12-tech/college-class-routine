"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import styles from "./HealthcarePremiumLanding.module.css";
import type { HealthcareLandingData } from "@/lib/landing/types";

type Props = {
  data: HealthcareLandingData;
};

type AppointmentFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  date: string;
  message: string;
};

export default function HealthcarePremiumLanding({ data }: Props) {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [form, setForm] = useState<AppointmentFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    date: today,
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealEls = document.querySelectorAll(`.${styles.reveal}`);
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.visible);
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!showToast) return;

    const timer = window.setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [showToast]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    if (submitted) setSubmitted(false);
    if (formError) setFormError("");

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim();

    if (!firstName || !lastName || !email || !form.department || !form.date) {
      setFormError("Please fill in the required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setFormError("");
    setSending(true);

    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setShowToast(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        date: today,
        message: "",
      });
    }, 1200);
  };

  return (
    <div className={styles.page}>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <a href="#home" className={styles.navLogo}>
              <span className={styles.logoDot} />
              {data.brand.slice(0, 4)}
              <span className={styles.logoAccent}>{data.brand.slice(4)}</span>
            </a>

            <ul className={styles.navLinks}>
              {data.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#appointment" className={styles.navCta}>
                  Book Now
                </a>
              </li>
            </ul>

            <button
              type="button"
              className={styles.navToggle}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className={styles.navLine} />
              <span className={styles.navLine} />
              <span className={styles.navLine} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuInner}>
          {data.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#appointment"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>

      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>{data.hero.badge}</div>

              <h1 className={styles.heroTitle}>
                {data.hero.title}{" "}
                <span className={styles.heroHighlight}>
                  {data.hero.highlight}
                </span>
              </h1>

              <p className={styles.heroDescription}>{data.hero.description}</p>

              <div className={styles.heroActions}>
                <a
                  href={data.hero.primaryAction.href}
                  className={styles.btnPrimary}
                >
                  <span>📅</span>
                  <span>{data.hero.primaryAction.label}</span>
                </a>

                <a
                  href={data.hero.secondaryAction.href}
                  className={styles.btnSecondary}
                >
                  <span>{data.hero.secondaryAction.label}</span>
                  <span>→</span>
                </a>
              </div>

              <div className={styles.heroStats}>
                {data.hero.stats.map((item) => (
                  <div key={item.label} className={styles.statItem}>
                    <div className={styles.statNum}>{item.value}</div>
                    <div className={styles.statLabel}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroCardMain}>
                <div className={styles.heroPulseRing}>
                  <div className={styles.pulseIcon}>{data.hero.card.icon}</div>
                </div>

                <div className={styles.heroCardTitle}>
                  {data.hero.card.title}
                </div>
                <div className={styles.heroCardSub}>
                  {data.hero.card.description}
                </div>

                <div
                  className={`${styles.floatingBadge} ${styles.floatingBadgeTop}`}
                >
                  {data.hero.card.topBadge}
                </div>

                <div
                  className={`${styles.floatingBadge} ${styles.floatingBadgeBottom}`}
                >
                  {data.hero.card.bottomBadge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whyStrip}>
        <div className={styles.container}>
          <div className={styles.whyStripGrid}>
            {data.whyStrip.map((item) => (
              <div
                key={item.label}
                className={`${styles.whyItem} ${styles.reveal}`}
              >
                <div className={styles.whyNum}>{item.value}</div>
                <div className={styles.whyLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className={styles.sectionAlt}>
        <div className={styles.container}>
          <div
            className={`${styles.sectionHeader} ${styles.sectionHeaderCentered}`}
          >
            <div className={`${styles.sectionLabel} ${styles.reveal}`}>
              {data.services.label}
            </div>
            <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>
              {data.services.title}
            </h2>
            <p className={`${styles.sectionSub} ${styles.reveal}`}>
              {data.services.description}
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {data.services.items.map((item) => (
              <div
                key={item.title}
                className={`${styles.serviceCard} ${styles.reveal}`}
              >
                <div className={styles.serviceIconWrap}>{item.icon}</div>
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceText}>{item.description}</p>
                <a href={item.linkHref} className={styles.serviceLink}>
                  {item.linkLabel} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className={styles.section}>
        <div className={styles.container}>
          <div
            className={`${styles.sectionHeader} ${styles.sectionHeaderCentered}`}
          >
            <div className={`${styles.sectionLabel} ${styles.reveal}`}>
              {data.doctors.label}
            </div>
            <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>
              {data.doctors.title}
            </h2>
            <p className={`${styles.sectionSub} ${styles.reveal}`}>
              {data.doctors.description}
            </p>
          </div>

          <div className={styles.doctorsGrid}>
            {data.doctors.items.map((item) => (
              <div
                key={item.name}
                className={`${styles.doctorCard} ${styles.reveal}`}
              >
                <div className={styles.doctorImageWrap}>
                  <div className={styles.doctorAvatar}>{item.avatar}</div>
                  <div className={styles.doctorSpecialtyTag}>
                    {item.specialty}
                  </div>
                </div>

                <div className={styles.doctorInfo}>
                  <h3 className={styles.doctorName}>{item.name}</h3>
                  <div className={styles.doctorTitle}>{item.title}</div>
                  <div className={styles.doctorMeta}>
                    <span className={styles.stars}>{item.rating}</span>
                    <span>{item.reviews}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="appointment" className={styles.appointmentSection}>
        <div className={styles.container}>
          <div className={styles.appointmentInner}>
            <div className={styles.appointmentContent}>
              <div
                className={`${styles.sectionLabel} ${styles.sectionLabelLight} ${styles.reveal}`}
              >
                {data.appointment.label}
              </div>
              <h2
                className={`${styles.sectionTitle} ${styles.sectionTitleLight} ${styles.reveal}`}
              >
                {data.appointment.title}
              </h2>
              <p
                className={`${styles.sectionSub} ${styles.sectionSubLight} ${styles.reveal}`}
              >
                {data.appointment.description}
              </p>

              <ul className={`${styles.appointmentFeatures} ${styles.reveal}`}>
                {data.appointment.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.appointmentForm} ${styles.reveal}`}>
              <h3 className={styles.formTitle}>
                {data.appointment.form.title}
              </h3>

              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="hc-firstName">First Name</label>
                    <input
                      id="hc-firstName"
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="hc-lastName">Last Name</label>
                    <input
                      id="hc-lastName"
                      name="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="hc-email">Email Address</label>
                    <input
                      id="hc-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@email.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="hc-phone">Phone Number</label>
                    <input
                      id="hc-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="hc-department">Department</label>
                    <select
                      id="hc-department"
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                    >
                      <option value="">Select specialty</option>
                      {data.appointment.form.departmentOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="hc-date">Preferred Date</label>
                    <input
                      id="hc-date"
                      name="date"
                      type="date"
                      value={form.date}
                      min={today}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="hc-message">Message (optional)</label>
                  <textarea
                    id="hc-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your symptoms or concerns…"
                  />
                </div>

                {formError ? (
                  <div className={styles.formError}>{formError}</div>
                ) : null}

                {submitted ? (
                  <div className={styles.formSuccess}>
                    ✓ {data.appointment.form.successMessage}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className={styles.formSubmit}
                  disabled={sending}
                >
                  {sending ? "⏳ Sending…" : "✦ Confirm Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className={styles.reviewsSection}>
        <div className={styles.container}>
          <div
            className={`${styles.sectionHeader} ${styles.sectionHeaderCentered}`}
          >
            <div className={`${styles.sectionLabel} ${styles.reveal}`}>
              {data.reviews.label}
            </div>
            <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>
              {data.reviews.title}
            </h2>
            <p className={`${styles.sectionSub} ${styles.reveal}`}>
              {data.reviews.description}
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {data.reviews.items.map((item) => (
              <div
                key={item.name}
                className={`${styles.reviewCard} ${styles.reveal}`}
              >
                <div className={styles.reviewStars}>{item.stars}</div>
                <p className={styles.reviewText}>"{item.quote}"</p>

                <div className={styles.reviewer}>
                  <div className={styles.reviewerAvatar}>{item.initial}</div>
                  <div>
                    <div className={styles.reviewerName}>{item.name}</div>
                    <div className={styles.reviewerMeta}>{item.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionLabel} ${styles.reveal}`}>
              {data.contact.label}
            </div>
            <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>
              {data.contact.title}
            </h2>
            <p className={`${styles.sectionSub} ${styles.reveal}`}>
              {data.contact.description}
            </p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactCards}>
              {data.contact.cards.map((item) => (
                <div
                  key={item.label}
                  className={`${styles.contactCard} ${styles.reveal}`}
                >
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.mapPlaceholder} ${styles.reveal}`}>
              <div className={styles.mapInner}>
                <span className={styles.mapPin}>📍</span>
                <div className={styles.mapTitle}>{data.contact.map.title}</div>
                <div className={styles.mapAddress}>
                  {data.contact.map.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                {data.brand.slice(0, 4)}
                <span>{data.brand.slice(4)}</span>
              </div>
              <p className={styles.footerDescription}>
                {data.footer.description}
              </p>
            </div>

            <div className={styles.footerColumns}>
              {data.footer.columns.map((column) => (
                <div key={column.title} className={styles.footerCol}>
                  <h4 className={styles.footerHeading}>{column.title}</h4>
                  <ul className={styles.footerList}>
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>{data.footer.copyright}</span>

            <div className={styles.socialLinks}>
              {data.footer.socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.socialButton}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div
        className={`${styles.toast} ${showToast ? styles.toastVisible : ""}`}
      >
        ✅ {data.appointment.form.successMessage}
      </div>
    </div>
  );
}
