export const SITE = {
  name: "Mykhailo Polishchuk",
  title: "Data Science, AI & Marketing",
  tagline: "I turn data into better decisions.",
  bio: "A data-driven student focused on analytics, automation, AI, and marketing—using technology and business thinking to improve decisions and measurable outcomes.",
  bioExtended: `I work at the intersection of data, technology, and business. My experience spans analytics, AI-enabled automation, marketing, and faculty-guided research, with a consistent focus on turning complex information into practical decisions and measurable outcomes.

I am especially interested in problems where data needs to be collected, cleaned, analyzed, and translated into something useful—whether that means improving a workflow, supporting a growth decision, or communicating research findings clearly to a non-technical audience.`,
  available: true,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  cvPdf: "/resume.pdf",
  email: "polishukmisha895@gmail.com",
  location: "Kyiv, Ukraine · Erie, PA",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Misha200304" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mykhailo-polishchuk2508" },
] as const;

export const SKILL_GROUPS = [
  {
    heading: "Analytics & Data",
    tags: ["Python", "SQL", "Excel", "Power BI", "Statistics", "Machine Learning", "Data Visualization"],
  },
  {
    heading: "AI & Development",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB", "Automation", "AI Workflows"],
  },
  {
    heading: "Business & Research",
    tags: ["Marketing Analytics", "Financial Analytics", "Data Collection & Cleaning", "Qualtrics", "SPSS", "Data Storytelling"],
  },
] as const;

export const EXPERIENCE = [
  {
    period: "Jun 2026 — Sep 2026",
    role: "AI Solutions Development Intern",
    company: "MHP",
    companyUrl: "https://mhp.com.ua/en/home",
    description:
      "Developed AI-enabled automation and data-processing solutions that streamlined internal workflows, reduced administrative processing time by approximately 70%, cut manual processing work by about 50%, and reduced staffing requirements by the equivalent of 3 employees.",
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Marketing Analyst Intern",
    company: "Kyivski Zori",
    companyUrl: "",
    description:
      "Applied marketing analytics, SEO, automation, and competitive research to support growth—contributing to a 144% increase in site sessions, 100% growth in unique sessions, and a 30% increase in audience reach and inbound inquiries.",
  },
] as const;

export const EDUCATION = [
  {
    period: "Expected May 2027",
    degree: "B.S. Data Science & AI · B.A. Marketing",
    school: "Mercyhurst University",
    note: "GPA 3.9",
  },
] as const;

export const HONORS = [
  { year: "Current", name: "AWS Student Builder", issuer: "Student leadership & cloud community" },
  { year: "5x", name: "Dean's List", issuer: "Mercyhurst University" },
  { year: "4 terms", name: "4.0 GPA", issuer: "Academic achievement" },
  { year: "5 seasons", name: "Student-Athlete", issuer: "NCAA Division I tennis" },
  { year: "Leadership", name: "Team Captain", issuer: "NCAA Division I" },
  { year: "Honors", name: "Phi Eta Sigma", issuer: "National Honor Society" },
] as const;

export const PROJECTS = [
  {
    slug: "ai-workflow-automation",
    title: "AI & Workflow Automation",
    tagline: "Using AI and automation to improve operational efficiency.",
    description:
      "Applied AI-enabled automation and data-processing techniques to reduce repetitive work and make internal workflows faster and more reliable, while keeping the public case study intentionally high-level.",
    challenge:
      "Manual processing created avoidable administrative work and required significant staff time across recurring internal tasks.",
    solution:
      "Combined software development, automation, and AI-assisted processing to simplify repetitive steps and move information through the workflow more efficiently.",
    outcome:
      "Approximately 70% less administrative processing time · About 50% less manual processing work · Staffing requirements reduced by the equivalent of 3 employees.",
    tags: ["AI", "Automation", "React", "TypeScript", "FastAPI", "MongoDB"],
    gradient: "from-[#232F3E] via-[#3b4b5f] to-[#FF9900]",
    year: "2026",
    role: "AI Solutions Development Intern",
    liveUrl: "",
    featured: true,
  },
  {
    slug: "research-sports-analytics",
    title: "Research & Sports Analytics",
    tagline: "Turning large open-source datasets into interpretable research findings.",
    description:
      "Faculty-guided research using Python, Excel, statistical testing, regression, visualization, and presentation to move from raw public data to analysis-ready evidence and clear conclusions.",
    challenge:
      "Open-source education and sports data needed to be collected, standardized, and analyzed before it could support meaningful research questions.",
    solution:
      "Built a repeatable data-cleaning and analysis workflow, applied statistical and regression methods, and translated results into visuals and presentation-ready findings.",
    outcome:
      "Collected, cleaned, and standardized 80,000+ open-source records and presented findings to non-technical audiences with practical implications for learning and athlete performance.",
    tags: ["Python", "Excel", "Statistics", "Regression", "Research"],
    gradient: "from-[#d9e2ec] via-[#f7f8fa] to-[#ffd18a]",
    year: "2025 — Present",
    role: "Faculty-Guided Researcher",
    liveUrl: "",
    featured: true,
  },
  {
    slug: "marketing-analytics-growth",
    title: "Marketing Analytics & Growth",
    tagline: "Combining analytics, SEO, automation, and competitive research.",
    description:
      "Used digital analytics and marketing execution to improve discoverability, reduce manual lead-handling work, and support stronger audience growth and inbound demand.",
    challenge:
      "The business needed stronger digital visibility and a more efficient way to turn incoming interest into usable information for the team.",
    solution:
      "Applied on-page SEO, website improvements, marketing analytics, AI-assisted data extraction, organic social strategy, and competitive analysis.",
    outcome:
      "+144% site sessions · +100% unique sessions · +30% audience reach and inbound inquiries.",
    tags: ["Marketing Analytics", "SEO", "Automation", "Competitive Analysis"],
    gradient: "from-[#fff4df] via-[#f7f8fa] to-[#232F3E]",
    year: "2025",
    role: "Marketing Analyst Intern",
    liveUrl: "",
    featured: true,
  },
  {
    slug: "financial-survey-analytics",
    title: "Financial & Survey Analytics",
    tagline: "Applying quantitative methods to financial and behavioral questions.",
    description:
      "Course-based analytical work spanning portfolio risk and diversification as well as survey research on perceptions of AI in the workplace.",
    challenge:
      "Different business questions required different quantitative methods—from evaluating relationships among financial returns to structuring and interpreting survey responses.",
    solution:
      "Used Excel modeling, returns, volatility, correlation, regression, Qualtrics, and structured statistical analysis to evaluate the data and communicate findings.",
    outcome:
      "Produced interpretable analyses of S&P 500 portfolio risk and diversification and translated survey responses into structured findings about perceptions of AI in the workplace.",
    tags: ["Excel", "Financial Analytics", "Qualtrics", "SPSS", "Regression"],
    gradient: "from-[#e8edf2] via-[#fff4df] to-[#ffb84d]",
    year: "2025",
    role: "Course Projects",
    liveUrl: "",
    featured: false,
  },
] as const;
