'use client';

import { Cinzel, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { LuxuryTravelLandingData } from '@/lib/landing/types';
import styles from './LuxuryTravelLanding.module.css';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'] });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'] });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600'] });

type Props = {
  data: LuxuryTravelLandingData;
};

export default function LuxuryTravelLanding({ data }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [packageFilter, setPackageFilter] = useState<'all' | 'adventure' | 'cultural' | 'luxury'>('all');
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewChunkSize, setReviewChunkSize] = useState(3);
  const [submitMessage, setSubmitMessage] = useState('Send My Enquiry →');
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => setReviewChunkSize(window.innerWidth < 768 ? 1 : 3);

    onResize();
    onScroll();

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % data.heroSlides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [data.heroSlides.length]);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX - 19) * 0.12;
      ringY += (mouseY - ringY - 19) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateRing();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const filteredPackages = useMemo(() => {
    if (packageFilter === 'all') return data.packages.items;
    return data.packages.items.filter((item) => item.category === packageFilter);
  }, [data.packages.items, packageFilter]);

  const reviewMax = Math.max(0, data.reviews.items.length - reviewChunkSize);

  useEffect(() => {
    setReviewIndex((prev) => Math.min(prev, reviewMax));
  }, [reviewMax]);

  const visibleReviews = data.reviews.items.slice(reviewIndex, reviewIndex + reviewChunkSize);

  const handleSubmit = () => {
    setSubmitMessage('✦ Enquiry Sent — We will be in touch soon!');
    window.setTimeout(() => setSubmitMessage('Send My Enquiry →'), 3500);
  };

  return (
    <div className={`${styles.root} ${dmSans.className}`}>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={ringRef} className={styles.cursorRing} />

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={`${styles.logo} ${cinzel.className}`}>
          {data.brand.split('·')[0]}
          <span>·</span>
          {data.brand.split('·')[1]}
        </a>

        <ul className={styles.navLinks}>
          {data.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a href="#booking" className={styles.navCta}>
          Book Now
        </a>
      </nav>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroSlides}>
          {data.heroSlides.map((slide, index) => (
            <div
              key={slide}
              className={`${styles.heroSlide} ${index === activeSlide ? styles.heroSlideActive : ''}`}
              style={{ backgroundImage: `linear-gradient(135deg, rgba(10,40,35,0.55) 0%, rgba(5,20,20,0.4) 100%), url(${slide})` }}
            />
          ))}
        </div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>✦ {data.heroEyebrow} ✦</div>
          <h1 className={`${styles.heroTitle} ${cormorant.className}`}>
            {data.heroTitle} <em>{data.heroTitleHighlight}</em>
          </h1>
          <p className={styles.heroSub}>{data.heroDescription}</p>
          <div className={styles.heroActions}>
            <a href={data.heroActions.primary.href} className={styles.primaryButton}>
              <span>{data.heroActions.primary.label}</span>
            </a>
            <a href={data.heroActions.secondary.href} className={styles.outlineButton}>
              {data.heroActions.secondary.label}
              <span>→</span>
            </a>
          </div>
        </div>

        <div className={styles.heroDots}>
          {data.heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${index === activeSlide ? styles.dotActive : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.heroScroll}>
          <div className={styles.scrollLine} />
          Scroll
        </div>
      </section>

      <section className={styles.marqueeBar}>
        <div className={styles.marqueeTrack}>
          {[...data.marquee, ...data.marquee].map((item, index) => (
            <div key={`${item}-${index}`} className={styles.marqueeItemWrap}>
              <span className={`${styles.marqueeItem} ${cinzel.className}`}>{item}</span>
              <span className={styles.marqueeDot}>✦</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div>
            <div className={styles.sectionLabel}>{data.about.label}</div>
            <h2 className={`${styles.sectionTitle} ${cormorant.className}`}>
              {data.about.title} <em>{data.about.highlightWord}</em>
            </h2>
            <div className={styles.bodyCopy}>
              {data.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.statsGrid}>
              {data.about.stats.map((stat) => (
                <div key={stat.label}>
                  <div className={`${styles.statNumber} ${cormorant.className}`}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <img src={data.about.mainImage} alt="Luxury travel scene" className={styles.aboutMainImage} />
            <img src={data.about.accentImage} alt="Destination preview" className={styles.aboutAccentImage} />
            <div className={styles.aboutBadge}>
              <div className={`${styles.aboutBadgeValue} ${cormorant.className}`}>{data.about.badgeValue}</div>
              <div className={styles.aboutBadgeLabel}>{data.about.badgeLabel}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.sectionLabel}>{data.destinations.label}</div>
              <h2 className={`${styles.sectionTitle} ${cormorant.className}`}>{data.destinations.title}</h2>
            </div>
            <a href="#booking" className={styles.inlineLink}>
              {data.destinations.ctaLabel} →
            </a>
          </div>

          <div className={styles.destinationGrid}>
            {data.destinations.items.map((item) => (
              <article
                key={item.name}
                className={`${styles.destinationCard} ${item.featured ? styles.destinationCardFeatured : ''}`}
                style={{ backgroundImage: `linear-gradient(to top, rgba(10,20,15,0.8) 0%, rgba(0,0,0,0.1) 55%), url(${item.image})` }}
              >
                {item.badge ? <div className={styles.destinationBadge}>{item.badge}</div> : null}
                <div className={styles.destinationInfo}>
                  <div className={styles.destinationRegion}>{item.region}</div>
                  <div className={`${styles.destinationName} ${cormorant.className}`}>{item.name}</div>
                  <div className={styles.destinationTagline}>{item.tagline}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.centerHead}>
            <div className={`${styles.sectionLabel} ${styles.centerLabel}`}>{data.packages.label}</div>
            <h2 className={`${styles.sectionTitle} ${cormorant.className}`}>{data.packages.title}</h2>
            <p className={styles.centerDescription}>{data.packages.description}</p>
          </div>

          <div className={styles.tabs}>
            {(['all', 'adventure', 'cultural', 'luxury'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setPackageFilter(tab)}
                className={`${styles.tab} ${packageFilter === tab ? styles.tabActive : ''}`}
              >
                {tab === 'all' ? 'All' : tab}
              </button>
            ))}
          </div>

          <div className={styles.packageGrid}>
            {filteredPackages.map((item) => (
              <article key={item.name} className={`${styles.packageCard} ${item.featured ? styles.packageCardFeatured : ''}`}>
                {item.featured ? <div className={styles.packageFeaturedTag}>✦ Featured</div> : null}
                <div className={styles.packageImageWrap}>
                  <img src={item.image} alt={item.name} className={styles.packageImage} />
                </div>
                <div className={styles.packageBody}>
                  <div className={styles.packageMeta}>
                    <span>🕐 {item.duration}</span>
                    <span>👥 {item.audience}</span>
                    <span>⭐ {item.rating}</span>
                  </div>
                  <h3 className={`${styles.packageName} ${cormorant.className}`}>{item.name}</h3>
                  <p className={styles.packageDescription}>{item.description}</p>
                  <div className={styles.packageFooter}>
                    <div>
                      <div className={styles.packageFrom}>From</div>
                      <div className={`${styles.packagePrice} ${cormorant.className}`}>{item.price}<span>/pp</span></div>
                    </div>
                    <a href="#booking" className={styles.packageButton}>
                      Book Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.experienceBar}>
        {data.experiences.map((item) => (
          <div key={item.title} className={styles.experienceItem}>
            <div className={styles.experienceIcon}>{item.icon}</div>
            <div className={`${styles.experienceTitle} ${cormorant.className}`}>{item.title}</div>
            <div className={styles.experienceDescription}>{item.description}</div>
          </div>
        ))}
      </section>

      <section id="gallery" className={`${styles.section} ${styles.sandSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>{data.gallery.label}</div>
          <h2 className={`${styles.sectionTitle} ${cormorant.className}`}>{data.gallery.title}</h2>

          <div className={styles.galleryGrid}>
            {data.gallery.items.map((item, index) => (
              <div
                key={`${item.alt}-${index}`}
                className={`${styles.galleryItem} ${item.featured ? styles.galleryItemFeatured : ''} ${item.tall ? styles.galleryItemTall : ''}`}
              >
                <img src={item.image} alt={item.alt} className={styles.galleryImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.centerHead}>
            <div className={`${styles.sectionLabel} ${styles.centerLabel}`}>{data.reviews.label}</div>
            <h2 className={`${styles.sectionTitle} ${cormorant.className}`}>{data.reviews.title}</h2>
            <p className={styles.centerDescription}>{data.reviews.description}</p>
          </div>

          <div className={styles.reviewGrid}>
            {visibleReviews.map((item) => (
              <article key={item.name} className={styles.reviewCard}>
                <div className={styles.reviewStars}>★★★★★</div>
                <div className={`${styles.reviewQuoteMark} ${cormorant.className}`}>“</div>
                <p className={`${styles.reviewText} ${cormorant.className}`}>{item.quote}</p>
                <div className={styles.reviewAuthor}>
                  <img src={item.avatar} alt={item.name} className={styles.reviewAvatar} />
                  <div>
                    <div className={styles.reviewName}>{item.name}</div>
                    <div className={styles.reviewTrip}>{item.trip}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.reviewNav}>
            <button type="button" className={styles.reviewButton} onClick={() => setReviewIndex((prev) => Math.max(0, prev - 1))}>
              ←
            </button>
            <button type="button" className={styles.reviewButton} onClick={() => setReviewIndex((prev) => Math.min(reviewMax, prev + 1))}>
              →
            </button>
          </div>
        </div>
      </section>

      <section id="booking" className={styles.bookingSection}>
        <div className={`${styles.container} ${styles.bookingGrid}`}>
          <div>
            <div className={`${styles.sectionLabel} ${styles.lightLabel}`}>{data.contact.label}</div>
            <h2 className={`${styles.sectionTitle} ${styles.lightTitle} ${cormorant.className}`}>
              {data.contact.title} <em>{data.contact.highlightWord}</em>
            </h2>
            <p className={styles.bookingCopy}>{data.contact.description}</p>

            <div className={styles.contactList}>
              {data.contact.details.map((detail) => (
                <div key={detail.value} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{detail.icon}</div>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bookingForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>First Name</label>
                <input type="text" placeholder="Alexandra" />
              </div>
              <div className={styles.formGroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Chen" />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="you@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input type="tel" placeholder="+1 (000) 000-0000" />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Destination</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select destination...
                  </option>
                  {data.destinations.items.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Travel Date</label>
                <input type="month" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Your Dream Journey</label>
              <textarea placeholder="Tell us what you are dreaming of..." />
            </div>
            <button type="button" className={styles.submitButton} onClick={handleSubmit}>
              {submitMessage}
            </button>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerGrid}`}>
          <div>
            <a href="#hero" className={`${styles.logo} ${cinzel.className}`}>
              {data.brand.split('·')[0]}
              <span>·</span>
              {data.brand.split('·')[1]}
            </a>
            <p className={styles.footerDescription}>{data.footer.description}</p>
            <div className={styles.footerSocials}>
              {['in', 'ig', 'fb', 'yt'].map((item) => (
                <a href="#" key={item} className={styles.footerSocialLink}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {data.footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className={styles.footerHeading}>{column.title}</h4>
              <ul className={styles.footerList}>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#booking">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${styles.container} ${styles.footerBottom}`}>
          <div>{data.footer.copyright}</div>
          <div className={styles.footerLegal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
