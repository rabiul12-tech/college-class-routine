import {
  DeveloperPortfolioLandingData,
  FrontendDeveloperLandingData,
  HealthcareLandingData,
  LandingPageRecord,
  LuxuryTravelLandingData,
  FitnessLandingData,
} from "./types";

export const landingPages: LandingPageRecord[] = [
  {
    slug: "lumina-voyages",
    seoTitle: "Lumina Voyages — Extraordinary Journeys",
    seoDescription:
      "Luxury travel landing page template with destinations, curated packages, gallery, reviews, and enquiry form.",
    template: "luxury-travel",
    data: {
      brand: "LUMINA·VOYAGES",
      heroEyebrow: "Curated Luxury Travel",
      heroTitle: "Where the World Becomes",
      heroTitleHighlight: "Yours",
      heroDescription:
        "Bespoke journeys crafted for those who seek the extraordinary — beyond the ordinary path.",
      heroSlides: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80",
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1600&q=80",
      ],
      nav: [
        { label: "Destinations", href: "#destinations" },
        { label: "Packages", href: "#packages" },
        { label: "Gallery", href: "#gallery" },
        { label: "Reviews", href: "#reviews" },
        { label: "Contact", href: "#booking" },
      ],
      heroActions: {
        primary: { label: "Explore Journeys", href: "#packages" },
        secondary: { label: "Discover Destinations", href: "#destinations" },
      },
      marquee: [
        "Santorini",
        "Kyoto",
        "Maldives",
        "Patagonia",
        "Amalfi Coast",
        "Serengeti",
        "Bali",
        "Morocco",
        "Norwegian Fjords",
        "Machu Picchu",
      ],
      about: {
        label: "Our Story",
        title: "Crafting Journeys That",
        highlightWord: "Transform",
        paragraphs: [
          "Since 2004, Lumina Voyages has been the trusted companion of discerning travelers who believe that a journey should be as meaningful as the destination itself.",
          "We go beyond booking to become your personal travel artisans — every detail considered, every moment designed to resonate long after you return home.",
        ],
        stats: [
          { value: "180+", label: "Destinations" },
          { value: "42k", label: "Happy Travelers" },
          { value: "20yr", label: "of Excellence" },
        ],
        mainImage:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80",
        accentImage:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80",
        badgeValue: "#1",
        badgeLabel: "Luxury Travel",
      },
      destinations: {
        label: "Explore the World",
        title: "Featured Destinations",
        ctaLabel: "View All",
        items: [
          {
            name: "Santorini",
            region: "Greece · Europe",
            tagline:
              "Whitewashed villas and sunsets that paint the Aegean gold — an island where romance is the architecture.",
            image:
              "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80",
            badge: "Popular",
            featured: true,
          },
          {
            name: "Kyoto",
            region: "Japan · Asia",
            tagline:
              "Ancient temples veiled in cherry blossoms — timeless Japan.",
            image:
              "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80",
          },
          {
            name: "Maldives",
            region: "Indian Ocean",
            tagline: "Overwater bliss above turquoise infinity.",
            image:
              "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=700&q=80",
            badge: "New",
          },
          {
            name: "Morocco",
            region: "North Africa",
            tagline: "Labyrinthine medinas and infinite desert skies.",
            image:
              "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=700&q=80",
          },
          {
            name: "Bali",
            region: "Indonesia · Asia",
            tagline: "Rice terraces, temples, and the art of slowing down.",
            image:
              "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=700&q=80",
          },
        ],
      },
      packages: {
        label: "Tour Packages",
        title: "Journeys Tailored to Every Dream",
        description:
          "Handcrafted itineraries that balance discovery, comfort, and the unexpected magic of travel.",
        items: [
          {
            name: "Ancient Japan Unveiled",
            category: "cultural",
            duration: "12 Days",
            audience: "Max 8",
            rating: "4.9",
            description:
              "From Tokyo's neon labyrinth to Kyoto's meditative temples — a journey between two Japans across time.",
            price: "$4,280",
            image:
              "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=80",
          },
          {
            name: "Maldivian Sanctuary",
            category: "luxury",
            duration: "9 Days",
            audience: "Couples",
            rating: "5.0",
            description:
              "Private overwater villa, bespoke diving experiences, and dinners served on the ocean — pure bliss redefined.",
            price: "$8,950",
            image:
              "https://images.unsplash.com/photo-1602002418082-a4443978a5bd?w=700&q=80",
            featured: true,
          },
          {
            name: "Patagonia Wild",
            category: "adventure",
            duration: "15 Days",
            audience: "Max 6",
            rating: "4.8",
            description:
              "Trek to the edge of the world through glaciers, peaks, and vast skies that make everything else seem small.",
            price: "$6,400",
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
          },
        ],
      },
      experiences: [
        {
          icon: "🧭",
          title: "Expert Curation",
          description:
            "Every detail researched and refined by destination specialists.",
        },
        {
          icon: "🏨",
          title: "Luxury Stays",
          description:
            "Handpicked properties that tell stories of place and craft.",
        },
        {
          icon: "🛡️",
          title: "Full Support",
          description:
            "24/7 concierge care so you travel with complete peace of mind.",
        },
        {
          icon: "🌿",
          title: "Sustainable",
          description:
            "Carbon-conscious travel that respects and uplifts local communities.",
        },
      ],
      gallery: {
        label: "Visual Journal",
        title: "Moments Collected From Every Corner",
        items: [
          {
            image:
              "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=900&q=80",
            alt: "Mountain lake scene",
            featured: true,
          },
          {
            image:
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80",
            alt: "Traveler at sunrise",
          },
          {
            image:
              "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",
            alt: "Cliffside landscape",
          },
          {
            image:
              "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=700&q=80",
            alt: "Desert road",
            tall: true,
          },
          {
            image:
              "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=700&q=80",
            alt: "Forest waterfall",
          },
          {
            image:
              "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=700&q=80",
            alt: "Ocean escape",
          },
        ],
      },
      reviews: {
        label: "Traveler Stories",
        title: "Words From Those Who've Journeyed With Us",
        description:
          "Real experiences from real travelers — their words are our greatest achievement.",
        items: [
          {
            name: "Sophie & Marcus L.",
            trip: "Maldives Honeymoon, 2024",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            quote:
              "Lumina Voyages did not just plan our honeymoon — they orchestrated a dream. Every sunrise, every meal, every private moment felt designed for us.",
          },
          {
            name: "Daniel H.",
            trip: "Ancient Japan Journey, 2024",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            quote:
              "The Japan itinerary was a masterpiece. Hidden tea houses, a private pottery class in Kyoto, and a ryokan so serene I nearly wept.",
          },
          {
            name: "Elena V.",
            trip: "Patagonia Wild, 2023",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            quote:
              "Patagonia with Lumina was the trip I will measure all others against. The guides, the camps, the sheer scale of it all — extraordinary.",
          },
          {
            name: "James T.",
            trip: "Morocco Cultural Tour, 2024",
            avatar: "https://randomuser.me/api/portraits/men/72.jpg",
            quote:
              "I have traveled to 60 countries. Never have I encountered a team that listens this deeply and delivers with such precision.",
          },
        ],
      },
      contact: {
        label: "Get In Touch",
        title: "Begin Your Next",
        highlightWord: "Chapter",
        description:
          "Whether you have a destination in mind or simply a longing for something extraordinary — we are here to listen, design, and deliver.",
        details: [
          { icon: "✉", value: "hello@luminavoyages.com" },
          { icon: "☎", value: "+1 (800) 586-4920" },
          { icon: "◎", value: "42 Wanderlust Lane, New York, NY 10001" },
        ],
      },
      footer: {
        description:
          "For those who travel not to escape life, but for life not to escape them. Est. 2004.",
        columns: [
          {
            title: "Destinations",
            links: [
              "Europe",
              "Asia Pacific",
              "Africa",
              "Americas",
              "Middle East",
            ],
          },
          {
            title: "Services",
            links: [
              "Honeymoon Packages",
              "Adventure Tours",
              "Cultural Journeys",
              "Private Charters",
              "Group Travel",
            ],
          },
          {
            title: "Company",
            links: [
              "About Us",
              "Our Team",
              "Sustainability",
              "Press",
              "Careers",
            ],
          },
        ],
        copyright: "© 2026 Lumina Voyages. All rights reserved.",
      },
    } satisfies LuxuryTravelLandingData,
  },
  {
    slug: "alex-devlin",
    seoTitle: "Alex Devlin — Full-Stack Developer & Freelancer",
    seoDescription:
      "Developer portfolio landing page template with services, skills, selected work, testimonials, and contact form.",
    template: "developer-portfolio",
    data: {
      brand: "Alex.dev",
      availabilityText: "Available for freelance work",
      heroTitle: "I build digital products that",
      heroHighlight: "drive results",
      heroDescription:
        "Full-stack developer specializing in React, Next.js, and PostgreSQL. I craft high-performance web applications that convert visitors into customers.",
      nav: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Skills", href: "#skills" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Reviews", href: "#testimonials" },
        { label: "Hire Me", href: "#contact" },
      ],
      heroActions: {
        primary: { label: "Start a Project", href: "#contact" },
        secondary: { label: "View My Work", href: "#portfolio" },
      },
      heroStats: [
        { value: "50+", label: "Projects Delivered" },
        { value: "35+", label: "Happy Clients" },
        { value: "5+", label: "Years Experience" },
      ],
      codePreview: [
        "// Building your vision",
        "const developer = {",
        '  name: "Alex Devlin",',
        '  role: "Full-Stack Dev",',
        '  stack: ["React", "Next.js", "PostgreSQL", "Node"],',
        '  build: () => "amazing apps"',
        "};",
      ],
      floatingTags: ["React.js", "Next.js", "PostgreSQL"],
      about: {
        label: "About Me",
        title: "A developer who cares about",
        titleHighlight: "your",
        paragraphs: [
          "I am Alex — a freelance full-stack developer based in New York City. I do not just write code; I build solutions that help businesses grow, convert more customers, and operate more efficiently.",
          "With over five years of hands-on experience across startups and agencies, I specialize in performant, scalable web applications using React, Next.js, PostgreSQL, and modern JavaScript.",
        ],
        experienceBadge: "5+",
        highlights: [
          "Pixel-Perfect UI",
          "Clean, Scalable Code",
          "Deadline-Driven",
          "Clear Communication",
        ],
      },
      services: {
        label: "Services",
        title: "What I can build for you",
        description:
          "End-to-end development services tailored to your needs — from landing pages to complex full-stack platforms.",
        items: [
          {
            icon: "🎨",
            title: "Frontend Development",
            description:
              "Responsive, accessible, and beautifully crafted interfaces that engage users and keep them coming back.",
            tags: ["HTML / CSS / JS", "React", "Tailwind"],
          },
          {
            icon: "⚡",
            title: "Full-Stack Applications",
            description:
              "Complete web applications with robust backends, authentication, APIs, and database architecture built to scale.",
            tags: ["Next.js", "Node.js", "REST / GraphQL"],
          },
          {
            icon: "🗄️",
            title: "Database Design",
            description:
              "Optimized database schemas, complex queries, migrations, and performance tuning for data-driven applications.",
            tags: ["PostgreSQL", "SQL", "Prisma"],
          },
          {
            icon: "🚀",
            title: "Landing Pages & Sites",
            description:
              "High-converting marketing pages and business websites optimized for speed, SEO, and lead generation.",
            tags: ["Next.js", "SEO", "Performance"],
          },
          {
            icon: "📱",
            title: "Responsive Web Design",
            description:
              "Mobile-first layouts that look stunning on every device — from phones to ultrawide monitors.",
            tags: ["CSS Grid", "Flexbox", "Figma to Code"],
          },
          {
            icon: "🔧",
            title: "Code Audits & Refactoring",
            description:
              "Performance optimization, code reviews, and modernization of legacy codebases to current best practices.",
            tags: ["TypeScript", "Testing", "CI/CD"],
          },
        ],
      },
      skills: {
        label: "Technical Skills",
        title: "My toolkit & expertise",
        description:
          "Technologies I work with daily to deliver exceptional results for my clients.",
        cards: [
          { icon: "⚛️", name: "React", level: "Expert" },
          { icon: "▲", name: "Next.js", level: "Expert" },
          { icon: "🟨", name: "JavaScript", level: "Expert" },
          { icon: "🐘", name: "PostgreSQL", level: "Advanced" },
          { icon: "🗃️", name: "SQL", level: "Advanced" },
          { icon: "🌐", name: "HTML/CSS", level: "Expert" },
          { icon: "🟦", name: "TypeScript", level: "Advanced" },
          { icon: "🟢", name: "Node.js", level: "Advanced" },
          { icon: "🎨", name: "Tailwind", level: "Expert" },
        ],
        bars: [
          { label: "React / Next.js", value: 95 },
          { label: "HTML / CSS / JavaScript", value: 98 },
          { label: "PostgreSQL / SQL", value: 88 },
          { label: "Node.js / Express", value: 90 },
          { label: "TypeScript", value: 85 },
          { label: "REST APIs / GraphQL", value: 87 },
          { label: "Git / CI/CD / DevOps", value: 82 },
        ],
      },
      portfolio: {
        label: "Portfolio",
        title: "Selected work",
        description:
          "A curated selection of recent projects across different industries and tech stacks.",
        filters: [
          { label: "All Work", value: "all" },
          { label: "React", value: "react" },
          { label: "Next.js", value: "nextjs" },
          { label: "Full-Stack", value: "fullstack" },
        ],
        projects: [
          {
            title: "ShopVelocity — E-Commerce Platform",
            description:
              "A high-performance headless e-commerce store with real-time inventory, payment processing, and admin dashboard.",
            emoji: "🛒",
            categories: ["nextjs", "fullstack"],
            tech: ["Next.js", "PostgreSQL", "Stripe", "Prisma"],
          },
          {
            title: "MetricFlow — Analytics Dashboard",
            description:
              "Interactive data visualization dashboard with real-time charts, custom reports, and team collaboration features.",
            emoji: "📊",
            categories: ["react"],
            tech: ["React", "D3.js", "Node.js", "WebSocket"],
          },
          {
            title: "MediBook — Healthcare Portal",
            description:
              "Patient appointment booking system with doctor profiles, availability calendars, and secure messaging.",
            emoji: "🏥",
            categories: ["nextjs"],
            tech: ["Next.js", "PostgreSQL", "Auth.js", "Tailwind"],
          },
          {
            title: "LearnPath — LMS Platform",
            description:
              "Full-featured learning management system with video courses, quizzes, progress tracking, and certificates.",
            emoji: "🎓",
            categories: ["fullstack"],
            tech: ["React", "Node.js", "PostgreSQL", "AWS S3"],
          },
          {
            title: "TeamSync — Project Collaboration",
            description:
              "Real-time team workspace with task boards, file sharing, chat, and automated workflow management.",
            emoji: "💬",
            categories: ["react", "fullstack"],
            tech: ["React", "Socket.io", "Express", "Redis"],
          },
          {
            title: "NestFinder — Real Estate App",
            description:
              "Property listing platform with map search, virtual tours, mortgage calculator, and agent matching.",
            emoji: "🏡",
            categories: ["nextjs"],
            tech: ["Next.js", "Mapbox", "PostgreSQL", "Vercel"],
          },
        ],
      },
      testimonials: {
        label: "Testimonials",
        title: "What clients say about me",
        description: "Hear directly from the people I have worked with.",
        items: [
          {
            initials: "SK",
            name: "Sarah Kim",
            role: "CEO, VentureScale",
            quote:
              "Alex transformed our outdated website into a modern, blazing-fast platform. Our conversions increased by 40% in the first month.",
          },
          {
            initials: "MR",
            name: "Marcus Rivera",
            role: "CTO, DataNova",
            quote:
              "Working with Alex felt like having a senior engineer on our team. His database architecture was flawless, and the React frontend was outstanding.",
          },
          {
            initials: "JT",
            name: "Jessica Torres",
            role: "Product Lead, MediGroup",
            quote:
              "We hired Alex for a complex healthcare portal. He handled everything — from schema design to secure authentication. Professional and reliable.",
          },
        ],
      },
      whyHire: {
        label: "Why Choose Me",
        title: "What sets me apart",
        description:
          "Hiring a freelancer is a big decision. Here is why clients keep coming back.",
        items: [
          {
            title: "Business-First Approach",
            description:
              "I do not just build features — I understand your goals and design solutions that drive measurable outcomes.",
          },
          {
            title: "Transparent Communication",
            description:
              "Regular updates, clear timelines, and honest feedback — no surprises, and no scope creep without discussion.",
          },
          {
            title: "Production-Grade Quality",
            description:
              "Every line of code is clean, tested, and documented so future developers can maintain it with confidence.",
          },
          {
            title: "End-to-End Capability",
            description:
              "From database schema to pixel-perfect frontend — one developer handles the full stack for faster delivery.",
          },
        ],
      },
      contact: {
        label: "Get In Touch",
        title: "Let us build something great together",
        description:
          "Have a project in mind? Fill out the form and I will get back to you within 24 hours.",
        cards: [
          { icon: "📧", value: "alex@devlin.dev" },
          { icon: "📍", value: "New York City, USA (Remote-Friendly)" },
          {
            icon: "⏰",
            value: "Accepting new projects — Book a free consultation",
          },
        ],
      },
      ctaBanner: {
        title: "Ready to bring your idea to",
        highlight: "life?",
        description:
          "Let us discuss your project over a free 30-minute consultation. No strings attached.",
        action: { label: "Book Free Consultation", href: "#contact" },
      },
      footer: {
        copyright: "© 2026 Alex Devlin. Crafted with care.",
      },
    } satisfies DeveloperPortfolioLandingData,
  },
  {
    slug: "md-nurul-islam",
    seoTitle: "Md Nurul Islam — Frontend Developer",
    seoDescription:
      "Frontend developer specializing in React.js and Next.js. Clean, fast, scalable web experiences with modern UI and real live projects.",
    template: "frontend-developer",
    data: {
      brand: "MN.",
      nav: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Why Me", href: "#why" },
        { label: "Contact", href: "#contact" },
      ],

      hero: {
        availabilityText: "Available for freelance & full-time",
        title: "Building the Web",
        highlight: "That Performs.",
        description:
          "I am Md Nurul Islam — a frontend developer specializing in React.js and Next.js. I craft clean, fast, and scalable web experiences that convert visitors into clients.",
        primaryAction: { label: "Hire Me", href: "#contact" },
        secondaryAction: { label: "View Projects", href: "#projects" },
        stats: [
          { value: "7+", label: "Live Projects" },
          { value: "2", label: "Featured Sites" },
          { value: "5", label: "Tech Stack" },
        ],
        card: {
          initials: "NI",
          name: "Md Nurul Islam",
          role: "Frontend Developer · React.js · Next.js",
          codeLines: [
            "const developer = {",
            '  name: "Nurul Islam",',
            '  stack: ["React", "Next.js"],',
            '  focus: "Clean UI",',
            "  status: true // available",
            "};",
          ],
          topTag: "Available for work",
          bottomTag: "React.js & Next.js",
        },
      },

      about: {
        label: "About Me",
        title: "Passionate About Building",
        highlight: "Exceptional",
        suffix: "Web Experiences",
        paragraphs: [
          "I am a frontend web developer who turns ideas into fast, beautiful, and functional websites. My approach blends strong technical skills with a sharp eye for design — every line of code serves the end user.",
          "With hands-on experience deploying real projects to production, I understand what it takes to build web applications that are not just visually impressive but reliable, scalable, and conversion-ready.",
        ],
        tags: [
          "React.js",
          "Next.js",
          "JavaScript",
          "Responsive UI",
          "Performance",
        ],
        points: [
          "Specialized in React.js & Next.js for modern frontend development",
          "Focused on pixel-perfect, fully responsive layouts on all devices",
          "7+ live projects deployed on Netlify and Vercel",
          "Committed to clean code, reusable components, and best practices",
          "Client-first mindset with clear communication and reliable delivery",
        ],
      },

      skills: {
        label: "Technical Skills",
        title: "The Stack I",
        highlight: "Master",
        description:
          "A focused, modern frontend stack. From semantic HTML to full-featured React and Next.js apps — I build the full frontend layer with confidence.",
        items: [
          {
            icon: "🌐",
            name: "HTML",
            level: "Semantic · Accessible · Structured",
            percent: 98,
          },
          {
            icon: "🎨",
            name: "CSS",
            level: "Responsive · Animations · Flexbox/Grid",
            percent: 95,
          },
          {
            icon: "⚡",
            name: "JavaScript",
            level: "ES6+ · DOM · Async/Await",
            percent: 90,
          },
          {
            icon: "⚛️",
            name: "React.js",
            level: "Hooks · Components · State Mgmt",
            percent: 92,
          },
          {
            icon: "▲",
            name: "Next.js",
            level: "SSR · SSG · App Router · Deployment",
            percent: 88,
          },
        ],
      },

      projects: {
        label: "Live Projects",
        title: "Work That's",
        highlight: "Live & Real",
        description:
          "Not just demos — these are fully deployed, functional web applications built with modern practices and real-world performance standards.",
        items: [
          {
            badge: "PROJECT 01 · FEATURED",
            title: "Calculator Hub Pro",
            description:
              "A comprehensive, multi-functional calculator web application featuring scientific, financial, health, and utility calculators — all in one clean, high-performance frontend app.",
            thumbText: "CHPro",
            featured: true,
            live: true,
            tech: ["React.js", "CSS", "JavaScript", "Responsive"],
            link: {
              label: "Visit calculatorhubpro.com",
              href: "https://calculatorhubpro.com",
            },
          },
          {
            badge: "PROJECT 02 · FEATURED",
            title: "Utility Era",
            description:
              "A powerful utility tools platform offering a wide range of web-based tools for everyday productivity. Clean UI, fast interactions, and a well-structured frontend architecture deployed and running in production.",
            thumbText: "UEra",
            live: true,
            tech: ["Next.js", "React", "CSS"],
            link: {
              label: "Visit utilityera.com",
              href: "https://utilityera.com",
            },
          },
          {
            badge: "ADDITIONAL PROJECTS",
            title: "5 More Live Websites",
            description:
              "Five additional fully functional websites deployed on Netlify and Vercel. Each built with a focus on modern UI patterns, component reusability, clean code, and real deployment pipelines.",
            thumbText: "+5",
            live: false,
            tech: ["React.js", "Next.js", "Netlify", "Vercel"],
            link: {
              label: "Request portfolio details",
              href: "#contact",
            },
          },
        ],
        summary: {
          title: "All Projects Deployed & Live in Production",
          description:
            "Every project is real, functional, and publicly accessible — deployed on trusted platforms.",
          platforms: ["▲ Vercel", "◈ Netlify", "🌐 7+ Live Sites"],
        },
      },

      whyHire: {
        label: "Why Hire Me",
        title: "What Sets Me",
        highlight: "Apart",
        description:
          "I do not just write code — I build experiences. Here is what you get when you work with me.",
        items: [
          {
            number: "01",
            icon: "✦",
            title: "Clean & Modern Code",
            description:
              "I write maintainable, well-structured code using modern best practices — reusable components, consistent naming, and scalable architecture.",
          },
          {
            number: "02",
            icon: "📱",
            title: "Responsive Design Expertise",
            description:
              "Every pixel is intentional. I build interfaces that look and feel perfect on mobile, tablet, and desktop.",
          },
          {
            number: "03",
            icon: "🚀",
            title: "Real Live Project Experience",
            description:
              "I have shipped production projects, not just tutorials. With 7+ live sites and real deployment pipelines, I understand the full journey from development to launch.",
          },
          {
            number: "04",
            icon: "⚡",
            title: "Performance & SEO-Friendly",
            description:
              "Fast loading, optimized assets, and SEO-aware markup. I build with Core Web Vitals and search visibility in mind.",
          },
          {
            number: "05",
            icon: "🤝",
            title: "Reliable Communication",
            description:
              "I keep clients informed at every step. Clear updates, timely responses, and a collaborative approach.",
          },
          {
            number: "06",
            icon: "🎯",
            title: "Client-Focused Delivery",
            description:
              "Your goals are my goals. I listen, adapt, and deliver solutions that align with your business objectives.",
          },
        ],
        cta: {
          title: "Ready to build something great together?",
          description:
            "Whether it is a landing page, a full web app, or a redesign — I am ready to bring your vision to life with modern frontend development.",
          action: { label: "Let's Start a Project", href: "#contact" },
        },
      },

      contact: {
        label: "Get In Touch",
        title: "Let's Build",
        highlight: "Something Together",
        description:
          "Have a project in mind? Looking to hire a frontend developer? I would love to hear from you.",
        items: [
          { icon: "✉️", label: "Email", value: "hello@mdnurulislam.dev" },
          {
            icon: "🌍",
            label: "Availability",
            value: "Open to freelance & full-time roles",
          },
          {
            icon: "⚡",
            label: "Response Time",
            value: "Usually within 24 hours",
          },
        ],
        socials: [
          { label: "GitHub", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "Twitter/X", href: "#" },
          { label: "Portfolio", href: "#" },
        ],
        form: {
          title: "Send Me a Message",
          subjectPlaceholder: "Project inquiry / Hire me",
          messagePlaceholder:
            "Tell me about your project, goals, and timeline...",
          note: "No spam. Your info stays private.",
          successMessage:
            "Message sent! I will get back to you within 24 hours.",
          budgetOptions: [
            "$500 – $1,000",
            "$1,000 – $3,000",
            "$3,000 – $5,000",
            "$5,000+",
            "Open to discuss",
          ],
        },
      },

      footer: {
        copyright: "© 2025 Md Nurul Islam. Crafted with passion.",
        links: [
          { label: "Home", href: "#hero" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ],
      },
    } satisfies FrontendDeveloperLandingData,
  },
  {
    slug: "vitacare",
    seoTitle: "VitaCare — Premium Healthcare",
    seoDescription:
      "Premium healthcare landing page with medical services, expert doctors, appointment booking, reviews, and contact information.",
    template: "healthcare-premium",
    data: {
      brand: "VitaCare",
      nav: [
        { label: "Services", href: "#services" },
        { label: "Doctors", href: "#doctors" },
        { label: "Appointment", href: "#appointment" },
        { label: "Reviews", href: "#reviews" },
        { label: "Contact", href: "#contact" },
      ],
      hero: {
        badge: "Trusted Healthcare Since 2005",
        title: "Excellence in",
        highlight: "Medical Care",
        description:
          "Experience compassionate, world-class healthcare with cutting-edge technology and a team of board-certified specialists dedicated to your well-being.",
        primaryAction: { label: "Book Appointment", href: "#appointment" },
        secondaryAction: { label: "Our Services", href: "#services" },
        stats: [
          { value: "50K+", label: "Patients Served" },
          { value: "120+", label: "Expert Doctors" },
          { value: "20+", label: "Years of Trust" },
        ],
        card: {
          icon: "🩺",
          title: "Your Health, Our Priority",
          description:
            "Advanced diagnostics and personalized treatment plans for every patient.",
          topBadge: "⭐ 4.9 / 5 Rating",
          bottomBadge: "🏥 24/7 Emergency",
        },
      },
      whyStrip: [
        { value: "50K+", label: "Happy Patients" },
        { value: "120+", label: "Specialist Doctors" },
        { value: "98%", label: "Success Rate" },
        { value: "24/7", label: "Emergency Support" },
        { value: "20+", label: "Years Experience" },
      ],
      services: {
        label: "What We Offer",
        title: "Comprehensive Medical Services For You",
        description:
          "From preventive care to advanced surgical procedures, we offer a full spectrum of healthcare services under one roof.",
        items: [
          {
            icon: "🫀",
            title: "Cardiology",
            description:
              "Advanced heart care including diagnostics, interventional procedures, and cardiac rehabilitation programs led by expert cardiologists.",
            linkLabel: "Learn more",
            linkHref: "#appointment",
          },
          {
            icon: "🧠",
            title: "Neurology",
            description:
              "Comprehensive neurological care for conditions ranging from migraines and epilepsy to complex neurodegenerative disorders.",
            linkLabel: "Learn more",
            linkHref: "#appointment",
          },
          {
            icon: "🦷",
            title: "Dental Care",
            description:
              "Full-service dental treatments — from routine cleanings and whitening to orthodontics and implants — with a gentle touch.",
            linkLabel: "Learn more",
            linkHref: "#appointment",
          },
          {
            icon: "👁️",
            title: "Ophthalmology",
            description:
              "State-of-the-art eye care including LASIK surgery, cataract removal, retina treatments, and pediatric vision services.",
            linkLabel: "Learn more",
            linkHref: "#appointment",
          },
          {
            icon: "🦴",
            title: "Orthopedics",
            description:
              "Expert musculoskeletal care covering joint replacements, sports injury rehabilitation, and minimally invasive spine surgery.",
            linkLabel: "Learn more",
            linkHref: "#appointment",
          },
          {
            icon: "🧬",
            title: "Oncology",
            description:
              "Multidisciplinary cancer care with personalized treatment plans, immunotherapy, and supportive oncology services.",
            linkLabel: "Learn more",
            linkHref: "#appointment",
          },
        ],
      },
      doctors: {
        label: "Our Team",
        title: "Meet Our Expert Physicians",
        description:
          "Our board-certified specialists bring decades of experience and a compassionate approach to every patient interaction.",
        items: [
          {
            avatar: "👨‍⚕️",
            specialty: "Cardiologist",
            name: "Dr. James Ellison",
            title: "MD, FACC · 18 Years Experience",
            rating: "★★★★★",
            reviews: "1,240 Reviews",
          },
          {
            avatar: "👩‍⚕️",
            specialty: "Neurologist",
            name: "Dr. Sarah Chen",
            title: "MD, PhD · 14 Years Experience",
            rating: "★★★★★",
            reviews: "987 Reviews",
          },
          {
            avatar: "👨‍⚕️",
            specialty: "Orthopedist",
            name: "Dr. Marcus Rivera",
            title: "MD, FAAOS · 22 Years Experience",
            rating: "★★★★★",
            reviews: "1,560 Reviews",
          },
          {
            avatar: "👩‍⚕️",
            specialty: "Oncologist",
            name: "Dr. Priya Nair",
            title: "MD, FASCO · 16 Years Experience",
            rating: "★★★★★",
            reviews: "832 Reviews",
          },
        ],
      },
      appointment: {
        label: "Schedule a Visit",
        title: "Book Your Appointment In Minutes",
        description:
          "Skip the wait. Our online scheduling system connects you with the right specialist at a time that suits you best.",
        features: [
          "Same-day appointments available",
          "Insurance accepted — no hidden fees",
          "Reminders sent via SMS and email",
          "Telemedicine options for remote consultations",
          "Multilingual staff available 24/7",
        ],
        form: {
          title: "Request an Appointment",
          departmentOptions: [
            "Cardiology",
            "Neurology",
            "Dental Care",
            "Orthopedics",
            "Ophthalmology",
            "Oncology",
          ],
          successMessage: "Appointment request sent! We'll confirm shortly.",
        },
      },
      reviews: {
        label: "Patient Stories",
        title: "What Our Patients Are Saying",
        description:
          "Real experiences from real people whose lives have been touched by the VitaCare family.",
        items: [
          {
            stars: "★★★★★",
            quote:
              "The cardiology team at VitaCare gave me my life back. Dr. Ellison's calm confidence and the staff's warmth made an incredibly stressful time feel manageable. I'm back to hiking with my grandkids.",
            initial: "R",
            name: "Robert Patterson",
            meta: "Patient since 2019 · Cardiology",
          },
          {
            stars: "★★★★★",
            quote:
              "From booking to follow-up, every step was seamless. Dr. Chen diagnosed my condition in one visit after months of uncertainty. The care here is genuinely second to none.",
            initial: "M",
            name: "Michelle Torres",
            meta: "Patient since 2021 · Neurology",
          },
          {
            stars: "★★★★★",
            quote:
              "I had my knee replaced here and was back on the golf course in three months. Dr. Rivera and the rehab team are exceptional. VitaCare is the only place I'd trust with my family's health.",
            initial: "T",
            name: "Thomas Nguyen",
            meta: "Patient since 2020 · Orthopedics",
          },
        ],
      },
      contact: {
        label: "Get In Touch",
        title: "We're Here Whenever You Need Us",
        description:
          "Questions, concerns, or ready to schedule? Our care coordinators are available around the clock.",
        cards: [
          {
            icon: "📍",
            label: "Address",
            value: "1250 Medical Center Drive, Boston, MA 02115",
          },
          {
            icon: "📞",
            label: "Phone",
            value: "+1 (800) 842-2273",
          },
          {
            icon: "✉️",
            label: "Email",
            value: "hello@vitacare.health",
          },
          {
            icon: "🕐",
            label: "Emergency Line",
            value: "Available 24 hours, 7 days a week",
          },
        ],
        map: {
          title: "VitaCare Medical Center",
          addressLines: ["1250 Medical Center Drive", "Boston, MA 02115"],
        },
      },
      footer: {
        description:
          "Dedicated to advancing human health with compassion, technology, and expertise since 2005.",
        columns: [
          {
            title: "Services",
            links: [
              "Cardiology",
              "Neurology",
              "Dental Care",
              "Orthopedics",
              "Oncology",
            ],
          },
          {
            title: "Hospital",
            links: ["About Us", "Our Doctors", "Research", "Careers", "News"],
          },
          {
            title: "Patient Portal",
            links: [
              "Book Appointment",
              "Medical Records",
              "Billing & Insurance",
              "Telemedicine",
              "Patient Rights",
            ],
          },
        ],
        copyright: "© 2026 VitaCare Medical Center. All rights reserved.",
        socials: [
          { label: "𝕏", href: "#" },
          { label: "in", href: "#" },
          { label: "f", href: "#" },
          { label: "▶", href: "#" },
        ],
      },
    } satisfies HealthcareLandingData,
  },
  {
    slug: "apex-fitness",
    seoTitle: "APEX FITNESS — Redefine Your Limits",
    seoDescription:
      "High-performance fitness landing page with programs, trainers, BMI tracker, success stories, membership plans, and contact form.",
    template: "fitness-premium",
    data: {
      brand: "APEX",
      nav: [
        { label: "Programs", href: "#programs" },
        { label: "Trainers", href: "#trainers" },
        { label: "Tracker", href: "#tracker" },
        { label: "Stories", href: "#stories" },
        { label: "Plans", href: "#membership" },
        { label: "Join Now", href: "#contact" },
      ],
      hero: {
        eyebrow: "Est. 2018 — Premium Fitness",
        lineOne: "PUSH",
        highlight: "YOUR",
        lineThree: "LIMITS",
        description:
          "Where elite athletes and everyday warriors come to train smarter, move better, and live stronger. Your transformation starts today.",
        primaryAction: { label: "Start Training", href: "#membership" },
        secondaryAction: { label: "View Programs", href: "#programs" },
        stats: [
          { value: "12K+", label: "Members" },
          { value: "48", label: "Programs" },
          { value: "97%", label: "Success Rate" },
          { value: "15", label: "Expert Trainers" },
        ],
        card: {
          badge: "⚡ Top Program",
          title: "STRENGTH MASTERY",
          subtitle: "8 Week Intensive Program",
          progress: 72,
          topMetric: {
            label: "Calories Burned",
            value: "840",
            change: "↑ 23% this week",
            bars: [40, 60, 45, 80, 65, 90, 100],
          },
          bottomMetric: {
            label: "Workout Streak",
            value: "🔥 28 Days",
            change: "Personal Best!",
          },
        },
      },
      ticker: [
        "STRENGTH TRAINING",
        "CARDIO BLAST",
        "YOGA & FLEXIBILITY",
        "HIIT PROGRAMS",
        "NUTRITION PLANS",
        "PERSONAL COACHING",
        "ONLINE CLASSES",
      ],
      programs: {
        label: "Training Programs",
        title: "FIND YOUR",
        highlight: "PATH",
        description:
          "Every body is different. Our science-backed programs are designed to meet you exactly where you are.",
        items: [
          {
            icon: "🏋️",
            title: "STRENGTH & POWER",
            description:
              "Build raw strength with progressive overload, compound lifts, and structured periodization cycles.",
            schedule: "3–5 days/wk",
            duration: "12 weeks",
            level: "Beginner → Advanced",
          },
          {
            icon: "⚡",
            title: "HIIT BURN",
            description:
              "Maximize fat loss and cardiovascular fitness with high-intensity intervals that keep burning long after.",
            schedule: "4 days/wk",
            duration: "8 weeks",
            level: "Intermediate",
          },
          {
            icon: "🧘",
            title: "FLEX & FLOW",
            description:
              "Restore mobility, reduce injury risk, and build a mindful connection with your body through targeted flexibility work.",
            schedule: "Daily",
            duration: "Ongoing",
            level: "All Levels",
          },
          {
            icon: "🚴",
            title: "ENDURANCE EDGE",
            description:
              "Train your aerobic engine to peak performance with smart cardio programming for runners, cyclists, and triathletes.",
            schedule: "5 days/wk",
            duration: "16 weeks",
            level: "Intermediate → Advanced",
          },
          {
            icon: "🥊",
            title: "COMBAT ATHLETE",
            description:
              "Explosive power, agility, and full-body conditioning inspired by MMA and combat sports methodology.",
            schedule: "4 days/wk",
            duration: "10 weeks",
            level: "Advanced",
          },
          {
            icon: "🌱",
            title: "FOUNDATION FIRST",
            description:
              "Perfect for beginners — build sustainable habits, master movement fundamentals, and gain confidence in the gym.",
            schedule: "3 days/wk",
            duration: "6 weeks",
            level: "Beginner",
          },
        ],
      },
      statsBand: [
        { value: "12K+", label: "Active Members" },
        { value: "48", label: "Programs Available" },
        { value: "15", label: "Expert Coaches" },
        { value: "97%", label: "Member Satisfaction" },
      ],
      trainers: {
        label: "The Team",
        title: "WORLD-CLASS",
        highlight: "TRAINERS",
        items: [
          {
            initials: "MK",
            name: "MARCUS KING",
            specialty: "Strength & Power",
            tags: ["Powerlifting", "Olympic Lifting"],
            variant: "t1",
            socials: [
              { label: "ig", href: "#" },
              { label: "tw", href: "#" },
              { label: "yt", href: "#" },
            ],
          },
          {
            initials: "SL",
            name: "SOFIA LIU",
            specialty: "HIIT & Cardio",
            tags: ["HIIT", "Nutrition"],
            variant: "t2",
            socials: [
              { label: "ig", href: "#" },
              { label: "tw", href: "#" },
            ],
          },
          {
            initials: "JP",
            name: "JAMES PARK",
            specialty: "Combat & MMA",
            tags: ["Boxing", "Conditioning"],
            variant: "t3",
            socials: [
              { label: "ig", href: "#" },
              { label: "yt", href: "#" },
            ],
          },
          {
            initials: "AR",
            name: "AISHA REED",
            specialty: "Yoga & Mobility",
            tags: ["Yoga", "Recovery"],
            variant: "t4",
            socials: [
              { label: "ig", href: "#" },
              { label: "tw", href: "#" },
              { label: "yt", href: "#" },
            ],
          },
        ],
      },
      tracker: {
        label: "Fitness Tracker",
        title: "KNOW YOUR",
        highlight: "NUMBERS",
        description:
          "Use our BMI calculator to understand where you stand and get a personalized starting point for your fitness journey.",
      },
      stories: {
        label: "Success Stories",
        title: "REAL PEOPLE,",
        highlight: "REAL RESULTS",
        items: [
          {
            quote:
              "I dropped 28 pounds in 12 weeks with the HIIT Burn program. Marcus's coaching style is unlike anything I've experienced — he pushes you just enough to break through mental barriers.",
            initials: "DM",
            name: "Daniel Morris",
            meta: "Member since Jan 2024",
            badge: "-28 lbs",
          },
          {
            quote:
              "Apex completely changed my relationship with fitness. Aisha's yoga program helped me recover from a back injury I'd had for 3 years. The community here is incredibly supportive.",
            initials: "LH",
            name: "Laura Hernandez",
            meta: "Member since Mar 2023",
            badge: "Pain-free ✓",
          },
          {
            quote:
              "As an ex-athlete returning to training, I needed structure. The Strength & Power program was perfectly designed. Hit my personal deadlift record at 42 years old — 185kg!",
            initials: "BT",
            name: "Ben Turner",
            meta: "Member since Aug 2023",
            badge: "185kg PR 🏆",
          },
        ],
      },
      membership: {
        label: "Membership Plans",
        title: "INVEST IN",
        highlight: "YOURSELF",
        items: [
          {
            badge: "Starter",
            name: "ESSENTIAL",
            price: "29",
            features: [
              "Access to 3 Programs",
              "Basic BMI Tracking",
              "Community Forum Access",
              "Monthly Check-in Call",
              "Email Support",
            ],
            action: { label: "Get Started", href: "#contact" },
          },
          {
            badge: "Most Popular",
            name: "PRO",
            price: "79",
            featured: true,
            features: [
              "Unlimited Program Access",
              "Full Analytics Dashboard",
              "Weekly Trainer Check-ins",
              "Custom Nutrition Plan",
              "Priority Support 24/7",
              "Live Group Classes",
            ],
            action: { label: "Join Pro", href: "#contact" },
          },
          {
            badge: "Elite",
            name: "UNLIMITED",
            price: "149",
            features: [
              "Everything in Pro",
              "1-on-1 Personal Training",
              "Bespoke Program Design",
              "Weekly Video Reviews",
              "Supplement Consultation",
              "VIP Event Access",
            ],
            action: { label: "Go Unlimited", href: "#contact" },
          },
        ],
      },
      contact: {
        label: "Get In Touch",
        title: "START YOUR",
        highlight: "JOURNEY",
        description:
          "Ready to transform your life? Fill out the form and our team will reach out within 24 hours to set up your free consultation.",
        details: [
          {
            icon: "📍",
            label: "Find Us",
            value: "240 Performance Ave, New York, NY 10001",
          },
          {
            icon: "📞",
            label: "Call Us",
            value: "+1 (555) 820-9400",
          },
          {
            icon: "✉️",
            label: "Email Us",
            value: "hello@apexfitness.com",
          },
          {
            icon: "⏰",
            label: "Open Hours",
            value: "Mon–Fri 5AM–11PM · Weekends 7AM–9PM",
          },
        ],
        form: {
          interestOptions: [
            "Strength & Power",
            "HIIT Burn",
            "Flex & Flow",
            "Endurance Edge",
            "Combat Athlete",
            "Foundation First",
            "Personal Coaching",
          ],
          successMessage: "Message sent! We'll be in touch within 24 hours.",
        },
      },
      footer: {
        description:
          "Redefining what it means to be fit. Premium programs, world-class coaching, and a community that lifts each other up.",
        columns: [
          {
            title: "Programs",
            links: [
              "Strength & Power",
              "HIIT Burn",
              "Flex & Flow",
              "Endurance Edge",
              "Combat Athlete",
            ],
          },
          {
            title: "Company",
            links: [
              "About Apex",
              "Our Trainers",
              "Success Stories",
              "Blog & Tips",
              "Careers",
            ],
          },
          {
            title: "Support",
            links: [
              "FAQ",
              "Contact Us",
              "Privacy Policy",
              "Terms of Service",
              "Refund Policy",
            ],
          },
        ],
        socials: [
          { label: "ig", href: "#" },
          { label: "fb", href: "#" },
          { label: "tw", href: "#" },
          { label: "yt", href: "#" },
          { label: "tk", href: "#" },
        ],
        copyright: "© 2026 APEX FITNESS. ALL RIGHTS RESERVED.",
        bottomLinks: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Cookies", href: "#" },
        ],
      },
    } satisfies FitnessLandingData,
  },
];

export const landingPagesMap = Object.fromEntries(
  landingPages.map((page) => [page.slug, page]),
);
