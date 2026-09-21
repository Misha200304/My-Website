export const SITE = {
  name: "Mykhailo Polishchuk",
  title: "Data Science, AI & Marketing",
  tagline: "I turn data into better decisions.",
  bio: "A data-driven student focused on analytics, automation, AI, and marketing, using technology and business thinking to improve decisions and measurable outcomes.",
  bioExtended: `I work at the intersection of data, technology, and business. My experience spans analytics, AI-enabled automation, marketing, and faculty-guided research, with a consistent focus on turning complex information into practical decisions and measurable outcomes.

I am especially interested in problems where data needs to be collected, cleaned, analyzed, and translated into something useful. That can mean improving a workflow, supporting a growth decision, or communicating research findings clearly to a non-technical audience.`,
  available: true,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  cvPdf: "/resume.pdf",
  email: "polishukmisha895@gmail.com",
  location: "Kyiv, Ukraine · Erie, PA",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Misha200304" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mykhailo-polishchuk2508" },
] as const;

export const SKILL_GROUPS = [
  { heading: "Data & Technical", tags: ["Python", "SQL", "Excel", "Power BI", "Statistics", "Machine Learning", "Data Visualization", "Data Analytics", "React", "TypeScript", "MongoDB"] },
  { heading: "AI & Automation", tags: ["AWS", "n8n", "AI Workflows", "CLI Agents", "Automation"] },
  { heading: "Business & Professional", tags: ["Marketing Analytics", "Financial Analytics", "Research", "Data Storytelling", "Analytical Thinking", "Problem Solving", "Communication", "Teamwork"] },
] as const;

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  companyUrl: string | null;
  description: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  { period: "Jun 2026 to Sep 2026", role: "AI Solutions Development Intern", company: "MHP", companyUrl: "https://mhp.com.ua/en/home", description: "Developed AI-enabled automation and data-processing solutions that streamlined internal workflows, reduced administrative processing time by approximately 70%, cut manual processing work by about 50%, and reduced staffing requirements by the equivalent of 3 employees." },
  { period: "Jun 2025 to Aug 2025", role: "Marketing Analyst Intern", company: "Kyivski Zori", companyUrl: "https://kz.kiev.ua/", description: "Applied marketing analytics, SEO, automation, and competitive research to support growth. This contributed to a 144% increase in site sessions, 100% growth in unique sessions, and a 30% increase in audience reach and inbound inquiries." },
];

export const EDUCATION = [
  { period: "Expected May 2027", degree: "B.S. Data Science & AI · B.A. Marketing", school: "Mercyhurst University", note: "GPA 3.9" },
] as const;

export const HONORS = [
  { year: "Current", name: "AWS Student Builder", issuer: "Student leadership & cloud community" },
  { year: "5x", name: "Dean's List", issuer: "Mercyhurst University" },
  { year: "4 terms", name: "4.0 GPA", issuer: "Academic achievement" },
  { year: "5 seasons", name: "Student-Athlete", issuer: "NCAA Division I tennis" },
  { year: "Leadership", name: "Team Captain", issuer: "NCAA Division I" },
  { year: "Honors", name: "Phi Eta Sigma", issuer: "National Honor Society" },
] as const;

export const AWS_STUDENT_BUILDER = {
  title: "AWS Student Builder",
  description: "Building cloud knowledge through technical learning, student community activities, events, and peer engagement.",
  href: null as string | null,
} as const;

export type BlogPost = { slug: string; title: string; excerpt: string; date: string; readingTime: string; tags: string[]; content: string; };
export const BLOG_POSTS: BlogPost[] = [];

export const PROJECTS = [
  { slug: "ai-workflow-automation", title: "AI & Workflow Automation", tagline: "Using AI and automation to improve operational efficiency.", description: "Applied AI-enabled automation and data-processing techniques to reduce repetitive work and make internal workflows faster and more reliable, while keeping the public case study intentionally high-level.", challenge: "Manual processing created avoidable administrative work and required significant staff time across recurring internal tasks.", solution: "Combined automation, AI-assisted processing, and practical software tools to simplify repetitive steps and move information through the workflow more efficiently.", outcome: "Approximately 70% less administrative processing time · About 50% less manual processing work · Staffing requirements reduced by the equivalent of 3 employees.", tags: ["AI", "Automation", "n8n", "CLI Agents", "AWS"], gradient: "from-[#0F172A] via-[#1E3A8A] to-[#2563EB]", image: "", imageAlt: "", year: "2026", role: "AI Solutions Development Intern", liveUrl: "", featured: true },
  { slug: "research-sports-analytics", title: "Research & Sports Analytics", tagline: "Turning large open-source datasets into interpretable research findings.", description: "Faculty-guided research using Python, Excel, statistical testing, regression, visualization, and presentation to move from raw public data to analysis-ready evidence and clear conclusions.", challenge: "Open-source education and sports data needed to be collected, standardized, and analyzed before it could support meaningful research questions.", solution: "Built a repeatable data-cleaning and analysis workflow, applied statistical and regression methods, and translated results into visuals and presentation-ready findings.", outcome: "Collected, cleaned, and standardized 80,000+ open-source records and presented findings to non-technical audiences with practical implications for learning and athlete performance.", tags: ["Python", "Excel", "Statistics", "Regression", "Research"], gradient: "from-[#DBEAFE] via-[#F8FAFC] to-[#93C5FD]", image: "", imageAlt: "", year: "2025 to Present", role: "Faculty-Guided Researcher", liveUrl: "", featured: true },
  { slug: "marketing-analytics-growth", title: "Marketing Analytics & Growth", tagline: "Combining analytics, SEO, automation, and competitive research.", description: "Used digital analytics and marketing execution to improve discoverability, reduce manual lead-handling work, and support stronger audience growth and inbound demand.", challenge: "The business needed stronger digital visibility and a more efficient way to turn incoming interest into usable information for the team.", solution: "Applied on-page SEO, website improvements, marketing analytics, AI-assisted data extraction, organic social strategy, and competitive analysis.", outcome: "+144% site sessions · +100% unique sessions · +30% audience reach and inbound inquiries.", tags: ["Marketing Analytics", "SEO", "Automation", "Competitive Analysis"], gradient: "from-[#EFF6FF] via-[#F8FAFC] to-[#2563EB]", image: "", imageAlt: "", year: "2025", role: "Marketing Analyst Intern", liveUrl: "https://kz.kiev.ua/", featured: true },
  { slug: "financial-survey-analytics", title: "Financial & Survey Analytics", tagline: "Applying quantitative methods to financial and behavioral questions.", description: "Course-based analytical work spanning portfolio risk and diversification as well as survey research on perceptions of AI in the workplace.", challenge: "Different business questions required different quantitative methods, from evaluating relationships among financial returns to structuring and interpreting survey responses.", solution: "Used Excel modeling, returns, volatility, correlation, regression, Qualtrics, and structured statistical analysis to evaluate the data and communicate findings.", outcome: "Produced interpretable analyses of S&P 500 portfolio risk and diversification and translated survey responses into structured findings about perceptions of AI in the workplace.", tags: ["Excel", "Financial Analytics", "Qualtrics", "SPSS", "Regression"], gradient: "from-[#E2E8F0] via-[#F8FAFC] to-[#93C5FD]", image: "", imageAlt: "", year: "2025", role: "Course Projects", liveUrl: "", featured: false },
] as const;
