import Link from "next/link";
import { landingPages } from "@/lib/landing/pages";
import styles from "./page.module.css";

export const metadata = {
  title: "Landing Pages",
  description: "Browse all generated landing pages.",
};

function templateLabel(template: string) {
  switch (template) {
    case "luxury-travel":
      return "Luxury Travel";
    case "developer-portfolio":
      return "Developer Portfolio";
    case "frontend-developer":
      return "Frontend Developer";
    case "healthcare-premium":
      return "Healthcare Premium";
    case "fitness-premium":
      return "Fitness Premium";
    default:
      return template;
  }
}

export default function LandingIndexPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Landing Router</span>
          <h1 className={styles.title}>Created landing pages list</h1>
          <p className={styles.description}>
            This page shows every landing page registered in{" "}
            <code>src/lib/landing/pages.ts</code>. Add a new record there and it
            will appear here automatically.
          </p>
        </div>

        <div className={styles.grid}>
          {landingPages.map((page, index) => (
            <article key={page.slug} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.badge}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.template}>
                  {templateLabel(page.template)}
                </span>
              </div>

              <h2 className={styles.cardTitle}>{page.seoTitle}</h2>
              <p className={styles.cardDescription}>{page.seoDescription}</p>

              <div className={styles.metaBlock}>
                <div>
                  <span className={styles.metaLabel}>Slug</span>
                  <code className={styles.slug}>/landing/{page.slug}</code>
                </div>
              </div>

              <div className={styles.actions}>
                <Link
                  className={styles.primaryButton}
                  href={`/landing/${page.slug}`}
                >
                  Open page
                </Link>

                <Link
                  className={styles.secondaryButton}
                  href={`/landing/${page.slug}#hero`}
                >
                  View hero
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
