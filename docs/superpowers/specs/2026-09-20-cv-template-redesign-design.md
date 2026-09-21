# CV Template Redesign — Design Specification

## Goal
Replace the current presentation layer on a separate branch with the selected `free-nextjs-cv-template`, while keeping the template structure largely intact. The redesign should feel like a polished personal portfolio for a Data Science, AI, analytics, and marketing student, with content grounded in the uploaded resume.

The site should communicate capabilities and measurable impact without exposing unnecessary internal implementation details or describing exact proprietary systems built during internships.

## Branch Safety
- Work only on `cv-template-redesign`.
- Keep `main` unchanged.
- Preserve the source template's MIT license notice because substantial portions of the template will be reused.

## Scope
### Keep from the template
- Overall page structure and navigation style.
- Responsive layout.
- About / Resume page.
- Portfolio page and project detail pages.
- Contact page structure, simplified as described below.
- Existing typography hierarchy and spacing unless a small color-related adjustment is required.

### Change
- Replace all demo identity, copy, experience, education, skills, social links, projects, metadata, and CTA text with Mykhailo Polishchuk's information.
- Remove the template promotional/demo banner.
- Remove demo blog content and the Blog navigation item for now.
- Replace the fake-success contact form behavior with direct contact actions such as email and LinkedIn unless a real delivery service is added later.
- Change the color system toward an AWS-inspired visual direction.

## Content Direction
### Positioning
Use broad positioning rather than overly specific descriptions of internal tools:

**Data Science, AI & Marketing**

Supporting message should emphasize using analytics, automation, AI, and business thinking to improve decisions and operational outcomes.

Do not describe proprietary/internal systems in unnecessary detail.

### Experience
#### MHP — AI Solutions Development Intern
Keep wording general and outcome-focused. Emphasize:
- AI-enabled workflow and process automation.
- Reduced administrative processing time by approximately **70%**.
- Reduced manual image/data processing time by approximately **50%**.
- Automation reduced staffing requirements by the equivalent of **3 employees** for the relevant workflow.

Avoid explaining the exact internal product or operational process unless necessary.

#### Kyivski Zori — Marketing Analyst Intern
Emphasize:
- Digital marketing, analytics, website optimization, and automation.
- Website sessions increased by **144%**.
- Unique sessions increased by **100%**.
- Audience reach / inbound inquiries increased by approximately **30%**.
- Reduced repetitive lead-data entry through automation.

## Projects
Project cards should be broad and metric-led rather than revealing exact internal systems.

Recommended project framing:

1. **AI & Workflow Automation**
   - Focus: applying AI and automation to repetitive business processes.
   - Metrics: ~70% reduction in administrative processing, ~50% reduction in manual processing, staffing-equivalent reduction of 3 employees.

2. **Research & Data Analysis**
   - Focus: large-scale data collection, cleaning, statistical analysis, and communicating findings.
   - Metric: **80,000+ records** collected, cleaned, and standardized.

3. **Marketing Analytics & Growth**
   - Focus: website optimization, SEO, analytics, automation, and campaign/competitive analysis.
   - Metrics: **+144% sessions**, **+100% unique sessions**, **+30% reach/inbound inquiries**.

4. **Financial & Survey Analytics**
   - Focus: portfolio risk/diversification analysis and structured survey analysis.
   - Keep this secondary to the three projects above.

## Education
Mercyhurst University
- Bachelor of Science — Data Science & AI
- Bachelor of Arts — Marketing
- Expected May 2027
- GPA: 3.9 on the uploaded resume

## Skills
Organize into three concise groups:

### Data & Analytics
- Python
- SQL
- Power BI
- Excel
- Statistics
- Machine Learning
- Data Cleaning
- Data Visualization

### Development & Automation
- React
- TypeScript
- FastAPI
- MongoDB
- AI-enabled workflow automation

### Business & Research
- Marketing Analytics
- Financial Analytics
- Qualtrics
- SPSS
- PowerPoint
- Data Storytelling

## Leadership / Recognition
Include selectively without overcrowding:
- AWS Student Builder
- Dean's List (5x)
- 4.0 GPA across 4 semesters
- NCAA Division I Student-Athlete
- Team Captain
- Honors Student
- Phi Eta Sigma National Honor Society

## AWS-Inspired Visual Direction
Use AWS as visual inspiration only; do not imply Amazon/AWS sponsorship, ownership, or endorsement.

Primary palette:
- Deep AWS-like navy / charcoal: `#232F3E`
- AWS orange accent: `#FF9900`
- Near-black: `#161E2D`
- White: `#FFFFFF`
- Soft cool gray: `#F3F4F6`

Application:
- Dark hero/header areas where appropriate.
- Orange for buttons, links, small highlights, timeline markers, and accent text.
- White / cool-gray content sections for readability.
- Avoid making every section dark; the site should remain clean and professional.
- Do not use AWS logos or trademarks as decoration.

AWS documentation currently uses `#232F3E` as a default AWS Marketplace theme color; the redesign uses that as inspiration, not as an official branded derivative.

## Homepage
Keep the template's existing hierarchy but rewrite content:
- Short availability/status line can be retained if useful, but word it appropriately for internships, research, collaborations, or opportunities.
- Hero: Mykhailo + broad Data Science / AI / Marketing positioning.
- Short bio focused on real-world analytics, automation, and measurable business impact.
- Three capability groups.
- Three featured project cards using broad descriptions and strong metrics.
- CTA to portfolio / contact / downloadable resume.

## About Page
Preserve the timeline format.
Include:
- Short broader personal narrative.
- Skills.
- MHP and Kyivski Zori experience.
- Mercyhurst education.
- Selected honors / leadership.

Avoid exaggerated claims and avoid adding unsupported certifications.

## Contact
Remove or disable the existing demo contact API behavior that validates messages without actually delivering them.
Use clear direct contact methods:
- Email
- LinkedIn
- GitHub

A real contact form can be added later with a provider such as Resend.

## Resume Download
Use the uploaded resume as the content source. If a PDF version is not already available in the branch, add one only when it can be generated faithfully from the uploaded document; otherwise keep the site content correct and do not fabricate a resume file.

## Quality Checks
Before completion:
- No `Mae Lin` or template demo identity remains.
- No fake company/project claims remain.
- No demo blog posts remain linked from navigation.
- No demo banner remains.
- No contact form claims to deliver messages unless it actually does.
- Metrics match the uploaded resume.
- AWS-inspired colors are used consistently but without AWS logos or endorsement language.
- `npm install` succeeds.
- Production build succeeds.
- Main navigation and portfolio routes work.
- Responsive layout remains intact.
