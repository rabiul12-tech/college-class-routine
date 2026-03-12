"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import styles from "./FitnessPremiumLanding.module.css";
import type { FitnessLandingData } from "@/lib/landing/types";

type Props = {
  data: FitnessLandingData;
};

type BmiState = {
  age: string;
  gender: string;
  height: string;
  weight: string;
};

type ContactState = {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
};

type BmiResult = {
  value: string;
  label: string;
  sub: string;
};

const initialBmiState: BmiState = {
  age: "",
  gender: "male",
  height: "",
  weight: "",
};

export default function FitnessPremiumLanding({ data }: Props) {
  const tickerItems = useMemo(
    () => [...data.ticker, ...data.ticker],
    [data.ticker],
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [bmi, setBmi] = useState<BmiState>(initialBmiState);
  const [bmiResult, setBmiResult] = useState<BmiResult | null>(null);

  const [contact, setContact] = useState<ContactState>({
    firstName: "",
    lastName: "",
    email: "",
    interest: data.contact.form.interestOptions[0] ?? "",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState("");

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
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
    const revealEls = document.querySelectorAll(`.${styles.fadeUp}`);
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
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!supportsFinePointer) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
        cursorRef.current.style.opacity = "1";
      }

      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      rafId = window.requestAnimationFrame(tick);
    };

    const onPointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest(
          "a,button,input,textarea,select,[data-hoverable='true']",
        ),
      );

      if (isInteractive) {
        cursorRef.current?.classList.add(styles.cursorActive);
        ringRef.current?.classList.add(styles.ringActive);
      }
    };

    const onPointerOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest(
          "a,button,input,textarea,select,[data-hoverable='true']",
        ),
      );

      if (isInteractive) {
        cursorRef.current?.classList.remove(styles.cursorActive);
        ringRef.current?.classList.remove(styles.ringActive);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", onPointerOver);
    document.addEventListener("mouseout", onPointerOut);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleBmiChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setBmi((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateBmi = () => {
    const height = Number(bmi.height);
    const weight = Number(bmi.weight);

    if (!height || !weight || height < 100 || weight < 30) {
      setBmiResult({
        value: "—",
        label: "Please enter valid height and weight.",
        sub: "",
      });
      return;
    }

    const value = weight / (height / 100) ** 2;
    const rounded = value.toFixed(1);

    let label = "";
    let sub = "";

    if (value < 18.5) {
      label = "Underweight";
      sub = "Consider a nutrition-focused program to build healthy mass.";
    } else if (value < 25) {
      label = "Healthy Weight ✓";
      sub = "Great foundation! Focus on building strength and endurance.";
    } else if (value < 30) {
      label = "Overweight";
      sub = "Our HIIT Burn and Endurance programs are great starting points.";
    } else if (value < 35) {
      label = "Obese (Class I)";
      sub =
        "Foundation First is designed for you. Sustainable change starts here.";
    } else {
      label = "Obese (Class II+)";
      sub = "We recommend speaking with one of our trainers for a custom plan.";
    }

    setBmiResult({
      value: rounded,
      label,
      sub,
    });
  };

  const handleContactChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    if (contactSuccess) setContactSuccess(false);
    if (contactError) setContactError("");

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstName = contact.firstName.trim();
    const email = contact.email.trim();

    if (!firstName || !email) {
      setContactError("Please fill in your first name and email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setContactError("Please enter a valid email address.");
      return;
    }

    setContactError("");
    setContactSuccess(true);
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      interest: data.contact.form.interestOptions[0] ?? "",
      message: "",
    });
  };

  return (
    <div className={styles.page}>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={ringRef} className={styles.cursorRing} />

      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.navInner}>
            <a href="#hero" className={styles.navLogo}>
              <span className={styles.navLogoDot} />
              {data.brand}
            </a>

            <ul className={styles.navLinks}>
              {data.nav.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={
                      index === data.nav.length - 1 ? styles.navCta : ""
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={styles.navBurger}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
      >
        <button
          type="button"
          className={styles.mobileClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {data.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroBgText}>{data.brand}</div>
        <div className={styles.heroOrbit} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <div className={styles.heroLabel}>{data.hero.eyebrow}</div>

              <h1 className={styles.heroTitle}>
                {data.hero.lineOne}
                <br />
                <span className={styles.heroHighlight}>
                  {data.hero.highlight}
                </span>
                <br />
                {data.hero.lineThree}
              </h1>

              <p className={styles.heroDesc}>{data.hero.description}</p>

              <div className={styles.heroActions}>
                <a
                  href={data.hero.primaryAction.href}
                  className={styles.btnPrimary}
                >
                  <span>{data.hero.primaryAction.label} →</span>
                </a>

                <a
                  href={data.hero.secondaryAction.href}
                  className={styles.btnOutline}
                >
                  <span className={styles.playIcon}>▶</span>
                  {data.hero.secondaryAction.label}
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
                <div className={styles.heroCardAbsNum}>01</div>
                <div className={styles.heroCardBadge}>
                  {data.hero.card.badge}
                </div>
                <div className={styles.heroCardTitle}>
                  {data.hero.card.title}
                </div>
                <div className={styles.heroCardSub}>
                  {data.hero.card.subtitle}
                </div>

                <div className={styles.heroCardProgress}>
                  <div
                    className={styles.heroCardProgressBar}
                    style={{ width: `${data.hero.card.progress}%` }}
                  />
                </div>
              </div>

              <div className={`${styles.heroFloatCard} ${styles.floatOne}`}>
                <div className={styles.floatLabel}>
                  {data.hero.card.topMetric.label}
                </div>
                <div className={styles.floatValue}>
                  {data.hero.card.topMetric.value}
                </div>
                <div className={styles.floatChange}>
                  {data.hero.card.topMetric.change}
                </div>
                <div className={styles.floatBar}>
                  {data.hero.card.topMetric.bars.map((height, index) => (
                    <div
                      key={index}
                      className={styles.floatBarSeg}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className={`${styles.heroFloatCard} ${styles.floatTwo}`}>
                <div className={styles.floatLabel}>
                  {data.hero.card.bottomMetric.label}
                </div>
                <div className={styles.floatValue}>
                  {data.hero.card.bottomMetric.value}
                </div>
                <div className={styles.floatChange}>
                  {data.hero.card.bottomMetric.change}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.tickerWrap}>
        <div className={styles.tickerInner}>
          {tickerItems.map((item, index) => (
            <div key={`${item}-${index}`} className={styles.tickerItem}>
              <span />
              {item}
            </div>
          ))}
        </div>
      </div>

      <section id="programs" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.programsHeader}>
            <div>
              <div className={`${styles.sectionLabel} ${styles.fadeUp}`}>
                {data.programs.label}
              </div>
              <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>
                {data.programs.title}
                <br />
                <span className={styles.sectionHighlight}>
                  {data.programs.highlight}
                </span>
              </h2>
            </div>

            <p className={`${styles.programsDesc} ${styles.fadeUp}`}>
              {data.programs.description}
            </p>
          </div>

          <div className={styles.programsGrid}>
            {data.programs.items.map((item, index) => (
              <div
                key={item.title}
                className={`${styles.programCard} ${styles.fadeUp}`}
              >
                <div className={styles.programNum}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className={styles.programIcon}>{item.icon}</div>
                <h3 className={styles.programTitle}>{item.title}</h3>
                <p className={styles.programDesc}>{item.description}</p>

                <div className={styles.programMeta}>
                  <span>{item.schedule}</span>
                  <span>{item.duration}</span>
                </div>

                <div className={styles.programLevel}>{item.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.statsBand}>
        <div className={styles.container}>
          <div className={styles.statsBandInner}>
            {data.statsBand.map((item) => (
              <div
                key={item.label}
                className={`${styles.statsBandItem} ${styles.fadeUp}`}
              >
                <div className={styles.statsBandNum}>{item.value}</div>
                <div className={styles.statsBandLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="trainers" className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={`${styles.sectionLabel} ${styles.fadeUp}`}>
            {data.trainers.label}
          </div>
          <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>
            {data.trainers.title}
            <br />
            <span className={styles.sectionHighlight}>
              {data.trainers.highlight}
            </span>
          </h2>

          <div className={styles.trainersGrid}>
            {data.trainers.items.map((item) => (
              <div
                key={item.name}
                className={`${styles.trainerCard} ${styles[item.variant]} ${styles.fadeUp}`}
              >
                <div className={styles.trainerImage}>
                  <div className={styles.trainerImagePlaceholder}>
                    <div className={styles.trainerAvatar}>{item.initials}</div>
                  </div>

                  <div className={styles.trainerOverlay}>
                    <div className={styles.trainerSocials}>
                      {item.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className={styles.socialBtn}
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                    <div className={styles.trainerOverlayName}>{item.name}</div>
                  </div>
                </div>

                <div className={styles.trainerInfo}>
                  <div className={styles.trainerName}>{item.name}</div>
                  <div className={styles.trainerSpecialty}>
                    {item.specialty}
                  </div>

                  <div className={styles.trainerTags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tracker" className={styles.bmiSection}>
        <div className={styles.container}>
          <div className={styles.bmiInner}>
            <div className={styles.bmiText}>
              <div className={`${styles.sectionLabel} ${styles.fadeUp}`}>
                {data.tracker.label}
              </div>

              <h2 className={`${styles.sectionTitleLight} ${styles.fadeUp}`}>
                {data.tracker.title}
                <br />
                <span className={styles.sectionHighlight}>
                  {data.tracker.highlight}
                </span>
              </h2>

              <p className={`${styles.bmiDescription} ${styles.fadeUp}`}>
                {data.tracker.description}
              </p>
            </div>

            <div className={`${styles.fadeUp}`}>
              <div className={styles.bmiForm}>
                <div className={styles.bmiRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="bmi-age">Age</label>
                    <input
                      id="bmi-age"
                      name="age"
                      type="number"
                      min="10"
                      max="100"
                      placeholder="25"
                      value={bmi.age}
                      onChange={handleBmiChange}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="bmi-gender">Gender</label>
                    <select
                      id="bmi-gender"
                      name="gender"
                      value={bmi.gender}
                      onChange={handleBmiChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.bmiRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="bmi-height">Height (cm)</label>
                    <input
                      id="bmi-height"
                      name="height"
                      type="number"
                      min="100"
                      max="250"
                      placeholder="175"
                      value={bmi.height}
                      onChange={handleBmiChange}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="bmi-weight">Weight (kg)</label>
                    <input
                      id="bmi-weight"
                      name="weight"
                      type="number"
                      min="30"
                      max="250"
                      placeholder="70"
                      value={bmi.weight}
                      onChange={handleBmiChange}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.bmiBtn}
                  onClick={calculateBmi}
                >
                  Calculate My BMI →
                </button>

                {bmiResult ? (
                  <div className={styles.bmiResult}>
                    <div className={styles.bmiResultNum}>{bmiResult.value}</div>
                    <div className={styles.bmiResultLabel}>
                      {bmiResult.label}
                    </div>
                    <div className={styles.bmiResultSub}>{bmiResult.sub}</div>

                    <div className={styles.bmiScale}>
                      <div className={styles.scaleSegBlue} />
                      <div className={styles.scaleSegGreen} />
                      <div className={styles.scaleSegYellow} />
                      <div className={styles.scaleSegOrange} />
                      <div className={styles.scaleSegRed} />
                    </div>

                    <div className={styles.scaleLabels}>
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                      <span>Extreme</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stories" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.testimonialsHeader}>
            <div>
              <div className={`${styles.sectionLabel} ${styles.fadeUp}`}>
                {data.stories.label}
              </div>
              <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>
                {data.stories.title}
                <br />
                <span className={styles.sectionHighlight}>
                  {data.stories.highlight}
                </span>
              </h2>
            </div>
          </div>

          <div className={styles.testiGrid}>
            {data.stories.items.map((item) => (
              <div
                key={item.name}
                className={`${styles.testiCard} ${styles.fadeUp}`}
              >
                <div className={styles.testiRating}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className={styles.testiText}>"{item.quote}"</p>

                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>{item.initials}</div>
                  <div>
                    <div className={styles.testiName}>{item.name}</div>
                    <div className={styles.testiMeta}>{item.meta}</div>
                    <div className={styles.testiBadge}>{item.badge}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={`${styles.sectionLabel} ${styles.fadeUp}`}>
            {data.membership.label}
          </div>

          <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>
            {data.membership.title}
            <br />
            <span className={styles.sectionHighlight}>
              {data.membership.highlight}
            </span>
          </h2>

          <div className={styles.pricingGrid}>
            {data.membership.items.map((item) => (
              <div
                key={item.name}
                className={`${styles.priceCard} ${
                  item.featured ? styles.priceCardFeatured : ""
                } ${styles.fadeUp}`}
              >
                <div className={styles.priceBadge}>{item.badge}</div>
                <div className={styles.priceName}>{item.name}</div>

                <div className={styles.priceAmount}>
                  <sup>$</sup>
                  {item.price}
                  <sub>/mo</sub>
                </div>

                <div className={styles.priceDivider} />

                <ul className={styles.priceFeatures}>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a
                  href={item.action.href}
                  className={`${styles.priceBtn} ${
                    item.featured
                      ? styles.priceBtnSolid
                      : styles.priceBtnOutline
                  }`}
                >
                  {item.action.label}
                  {item.featured ? " →" : ""}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactInner}>
            <div className={styles.contactInfo}>
              <div className={`${styles.sectionLabel} ${styles.fadeUp}`}>
                {data.contact.label}
              </div>

              <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>
                {data.contact.title}
                <br />
                <span className={styles.sectionHighlight}>
                  {data.contact.highlight}
                </span>
              </h2>

              <p className={`${styles.contactDescription} ${styles.fadeUp}`}>
                {data.contact.description}
              </p>

              <div className={`${styles.contactDetails} ${styles.fadeUp}`}>
                {data.contact.details.map((item) => (
                  <div key={item.label} className={styles.contactItem}>
                    <div className={styles.contactIcon}>{item.icon}</div>
                    <div className={styles.contactItemText}>
                      <div>{item.label}</div>
                      <div>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form
              className={`${styles.contactForm} ${styles.fadeUp}`}
              onSubmit={submitContact}
            >
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="fit-firstName">First Name</label>
                  <input
                    id="fit-firstName"
                    name="firstName"
                    type="text"
                    placeholder="Alex"
                    value={contact.firstName}
                    onChange={handleContactChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="fit-lastName">Last Name</label>
                  <input
                    id="fit-lastName"
                    name="lastName"
                    type="text"
                    placeholder="Johnson"
                    value={contact.lastName}
                    onChange={handleContactChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="fit-email">Email Address</label>
                <input
                  id="fit-email"
                  name="email"
                  type="email"
                  placeholder="alex@email.com"
                  value={contact.email}
                  onChange={handleContactChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="fit-interest">Interested In</label>
                <select
                  id="fit-interest"
                  name="interest"
                  value={contact.interest}
                  onChange={handleContactChange}
                >
                  {data.contact.form.interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="fit-message">Your Fitness Goal</label>
                <textarea
                  id="fit-message"
                  name="message"
                  placeholder="Tell us about your goals, current fitness level, and what you're hoping to achieve..."
                  value={contact.message}
                  onChange={handleContactChange}
                />
              </div>

              {contactError ? (
                <div className={styles.formError}>{contactError}</div>
              ) : null}

              <button type="submit" className={styles.formSubmit}>
                <span>Send Message →</span>
              </button>

              {contactSuccess ? (
                <div className={styles.successMsg}>
                  ✓ {data.contact.form.successMessage}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <a href="#hero" className={styles.navLogo}>
                <span className={styles.navLogoDot} />
                {data.brand}
              </a>
              <p>{data.footer.description}</p>

              <div className={styles.footerSocials}>
                {data.footer.socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={styles.footerSocial}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {data.footer.columns.map((column) => (
              <div key={column.title} className={styles.footerCol}>
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerCopy}>{data.footer.copyright}</div>

            <div className={styles.footerBottomLinks}>
              {data.footer.bottomLinks.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
