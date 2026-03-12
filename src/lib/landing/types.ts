export type LandingTemplate =
  | "luxury-travel"
  | "developer-portfolio"
  | "frontend-developer"
  | "healthcare-premium"
  | "fitness-premium";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroAction {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface DestinationItem {
  name: string;
  region: string;
  tagline: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface PackageItem {
  name: string;
  category: "adventure" | "cultural" | "luxury";
  duration: string;
  audience: string;
  rating: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

export interface ExperienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
  featured?: boolean;
  tall?: boolean;
}

export interface ReviewItem {
  name: string;
  trip: string;
  avatar: string;
  quote: string;
}

export interface ContactItem {
  icon: string;
  value: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface LuxuryTravelLandingData {
  brand: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDescription: string;
  heroSlides: string[];
  nav: NavItem[];
  heroActions: {
    primary: HeroAction;
    secondary: HeroAction;
  };
  marquee: string[];
  about: {
    label: string;
    title: string;
    highlightWord: string;
    paragraphs: string[];
    stats: StatItem[];
    mainImage: string;
    accentImage: string;
    badgeValue: string;
    badgeLabel: string;
  };
  destinations: {
    label: string;
    title: string;
    ctaLabel: string;
    items: DestinationItem[];
  };
  packages: {
    label: string;
    title: string;
    description: string;
    items: PackageItem[];
  };
  experiences: ExperienceItem[];
  gallery: {
    label: string;
    title: string;
    items: GalleryItem[];
  };
  reviews: {
    label: string;
    title: string;
    description: string;
    items: ReviewItem[];
  };
  contact: {
    label: string;
    title: string;
    highlightWord: string;
    description: string;
    details: ContactItem[];
  };
  footer: {
    description: string;
    columns: FooterColumn[];
    copyright: string;
  };
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillCardItem {
  icon: string;
  name: string;
  level: string;
}

export interface SkillBarItem {
  label: string;
  value: number;
}

export interface ProjectItem {
  title: string;
  description: string;
  emoji: string;
  categories: string[];
  tech: string[];
}

export interface TestimonialItem {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

export interface WhyItem {
  title: string;
  description: string;
}

export interface DeveloperPortfolioLandingData {
  brand: string;
  availabilityText: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  nav: NavItem[];
  heroActions: {
    primary: HeroAction;
    secondary: HeroAction;
  };
  heroStats: StatItem[];
  codePreview: string[];
  floatingTags: string[];
  about: {
    label: string;
    title: string;
    titleHighlight: string;
    paragraphs: string[];
    experienceBadge: string;
    highlights: string[];
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  skills: {
    label: string;
    title: string;
    description: string;
    cards: SkillCardItem[];
    bars: SkillBarItem[];
  };
  portfolio: {
    label: string;
    title: string;
    description: string;
    filters: { label: string; value: string }[];
    projects: ProjectItem[];
  };
  testimonials: {
    label: string;
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  whyHire: {
    label: string;
    title: string;
    description: string;
    items: WhyItem[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    cards: ContactItem[];
  };
  ctaBanner: {
    title: string;
    highlight: string;
    description: string;
    action: HeroAction;
  };
  footer: {
    copyright: string;
  };
}

export interface FrontendDeveloperLandingData {
  brand: string;
  nav: NavItem[];

  hero: {
    availabilityText: string;
    title: string;
    highlight: string;
    description: string;
    primaryAction: HeroAction;
    secondaryAction: HeroAction;
    stats: StatItem[];
    card: {
      initials: string;
      name: string;
      role: string;
      codeLines: string[];
      topTag: string;
      bottomTag: string;
    };
  };

  about: {
    label: string;
    title: string;
    highlight: string;
    suffix: string;
    paragraphs: string[];
    tags: string[];
    points: string[];
  };

  skills: {
    label: string;
    title: string;
    highlight: string;
    description: string;
    items: {
      icon: string;
      name: string;
      level: string;
      percent: number;
    }[];
  };

  projects: {
    label: string;
    title: string;
    highlight: string;
    description: string;
    items: {
      badge: string;
      title: string;
      description: string;
      thumbText: string;
      featured?: boolean;
      live?: boolean;
      tech: string[];
      link: HeroAction;
    }[];
    summary: {
      title: string;
      description: string;
      platforms: string[];
    };
  };

  whyHire: {
    label: string;
    title: string;
    highlight: string;
    description: string;
    items: {
      number: string;
      icon: string;
      title: string;
      description: string;
    }[];
    cta: {
      title: string;
      description: string;
      action: HeroAction;
    };
  };

  contact: {
    label: string;
    title: string;
    highlight: string;
    description: string;
    items: {
      icon: string;
      label: string;
      value: string;
    }[];
    socials: {
      label: string;
      href: string;
    }[];
    form: {
      title: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      note: string;
      successMessage: string;
      budgetOptions: string[];
    };
  };

  footer: {
    copyright: string;
    links: NavItem[];
  };
}

export interface HealthcareMetricItem {
  value: string;
  label: string;
}

export interface HealthcareServiceItem {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

export interface HealthcareDoctorItem {
  avatar: string;
  specialty: string;
  name: string;
  title: string;
  rating: string;
  reviews: string;
}

export interface HealthcareReviewItem {
  stars: string;
  quote: string;
  initial: string;
  name: string;
  meta: string;
}

export interface HealthcareContactCard {
  icon: string;
  label: string;
  value: string;
}

export interface HealthcareLandingData {
  brand: string;
  nav: NavItem[];
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryAction: HeroAction;
    secondaryAction: HeroAction;
    stats: StatItem[];
    card: {
      icon: string;
      title: string;
      description: string;
      topBadge: string;
      bottomBadge: string;
    };
  };
  whyStrip: HealthcareMetricItem[];
  services: {
    label: string;
    title: string;
    description: string;
    items: HealthcareServiceItem[];
  };
  doctors: {
    label: string;
    title: string;
    description: string;
    items: HealthcareDoctorItem[];
  };
  appointment: {
    label: string;
    title: string;
    description: string;
    features: string[];
    form: {
      title: string;
      departmentOptions: string[];
      successMessage: string;
    };
  };
  reviews: {
    label: string;
    title: string;
    description: string;
    items: HealthcareReviewItem[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    cards: HealthcareContactCard[];
    map: {
      title: string;
      addressLines: string[];
    };
  };
  footer: {
    description: string;
    columns: FooterColumn[];
    copyright: string;
    socials: NavItem[];
  };
}

export interface FitnessProgramItem {
  icon: string;
  title: string;
  description: string;
  schedule: string;
  duration: string;
  level: string;
}

export interface FitnessMetricItem {
  value: string;
  label: string;
}

export interface FitnessTrainerItem {
  initials: string;
  name: string;
  specialty: string;
  tags: string[];
  socials: NavItem[];
  variant: "t1" | "t2" | "t3" | "t4";
}

export interface FitnessStoryItem {
  quote: string;
  initials: string;
  name: string;
  meta: string;
  badge: string;
}

export interface FitnessPricingItem {
  badge: string;
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
  action: HeroAction;
}

export interface FitnessContactItem {
  icon: string;
  label: string;
  value: string;
}

export interface FitnessLandingData {
  brand: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    lineOne: string;
    highlight: string;
    lineThree: string;
    description: string;
    primaryAction: HeroAction;
    secondaryAction: HeroAction;
    stats: StatItem[];
    card: {
      badge: string;
      title: string;
      subtitle: string;
      progress: number;
      topMetric: {
        label: string;
        value: string;
        change: string;
        bars: number[];
      };
      bottomMetric: {
        label: string;
        value: string;
        change: string;
      };
    };
  };
  ticker: string[];
  programs: {
    label: string;
    title: string;
    highlight: string;
    description: string;
    items: FitnessProgramItem[];
  };
  statsBand: FitnessMetricItem[];
  trainers: {
    label: string;
    title: string;
    highlight: string;
    items: FitnessTrainerItem[];
  };
  tracker: {
    label: string;
    title: string;
    highlight: string;
    description: string;
  };
  stories: {
    label: string;
    title: string;
    highlight: string;
    items: FitnessStoryItem[];
  };
  membership: {
    label: string;
    title: string;
    highlight: string;
    items: FitnessPricingItem[];
  };
  contact: {
    label: string;
    title: string;
    highlight: string;
    description: string;
    details: FitnessContactItem[];
    form: {
      interestOptions: string[];
      successMessage: string;
    };
  };
  footer: {
    description: string;
    columns: FooterColumn[];
    socials: NavItem[];
    copyright: string;
    bottomLinks: NavItem[];
  };
}

export interface LandingPageRecord<
  TData =
    | LuxuryTravelLandingData
    | DeveloperPortfolioLandingData
    | FrontendDeveloperLandingData
    | HealthcareLandingData
    | FitnessLandingData,
> {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  template: LandingTemplate;
  data: TData;
}
