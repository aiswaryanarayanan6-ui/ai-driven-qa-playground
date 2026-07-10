import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
  Cpu,
  Code2,
  Database,
  GitBranch,
  Layers,
  ClipboardCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const HIGHLIGHTS = [
  "📍 Dubai, UAE",
  "Immediate Joiner",
  "UAE Dependent Visa",
  "9+ Years Experience",
  "FinTech & Banking Domain",
  "Team Lead Experience",
  "AI-Assisted Testing",
];

const SKILL_GROUPS = [
  {
    icon: Cpu,
    title: "Automation",
    items: ["Selenium WebDriver", "Playwright", "Appium", "Rest Assured"],
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["Java", "JavaScript"],
  },
  {
    icon: ClipboardCheck,
    title: "API Testing",
    items: ["Postman", "Rest Assured", "SOAP UI"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["TestNG", "Maven", "Page Object Model (POM)"],
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    items: ["Jenkins", "GitLab CI", "Git"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    icon: Briefcase,
    title: "Test Management",
    items: ["Jira", "TestRail", "Confluence"],
  },
];

const PROJECTS = [
  {
    title: "Enterprise Selenium Automation Framework",
    stack: ["Java", "Selenium", "TestNG", "Maven", "Jenkins"],
    highlights: [
      "Designed reusable automation framework",
      "Implemented Page Object Model architecture",
      "Automated end-to-end regression suite",
      "Reduced execution time significantly",
      "Integrated with Jenkins CI/CD pipelines",
    ],
  },
  {
    title: "Playwright Automation Framework",
    stack: ["Playwright", "JavaScript"],
    highlights: [
      "Built modern web automation framework",
      "Cross-browser execution (Chromium, WebKit, Firefox)",
      "Parallel test execution",
      "Rich reporting integration",
      "AI-assisted script generation",
    ],
  },
  {
    title: "API Automation Framework",
    stack: ["Rest Assured", "Java", "Postman"],
    highlights: [
      "Automated REST API validation",
      "Backend integration testing",
      "Authentication & token handling",
      "JSON schema validation",
      "Reusable request/response utilities",
    ],
  },
  {
    title: "JSON-Driven Framework",
    stack: ["Java", "JSON", "TestNG"],
    highlights: [
      "Data-driven test execution",
      "Reusable components & shared utilities",
      "Configuration-based execution",
      "Award-winning framework design",
    ],
  },
];

const EXPERIENCE = [
  {
    company: "Tata Consultancy Services",
    role: "Senior QA Automation Engineer",
    tags: [
      "Selenium Framework Development",
      "API Automation",
      "Playwright",
      "CI/CD",
      "Center of Excellence",
      "Team Leadership",
      "AI Testing",
    ],
  },
  {
    company: "Envestnet Yodlee",
    role: "Automation Engineer",
    tags: ["UI Automation", "API Automation", "BrowserStack", "JSON Framework"],
  },
  {
    company: "Cognizant",
    role: "Senior Test Engineer",
    tags: ["Selenium Migration", "Framework Modernization"],
  },
  {
    company: "Tata Consultancy Services",
    role: "QA Engineer",
    tags: ["Banking Domain", "API Automation", "Selenium", "Functional Testing"],
  },
];

const ACHIEVEMENTS = [
  "Spot Award",
  "Star of the Month",
  "Special Initiative Award",
  "Framework Design Recognition",
  "AI-assisted Testing Initiatives",
];

const EXPERTISE = [
  { name: "Selenium", level: 5 },
  { name: "Playwright", level: 5 },
  { name: "API Automation", level: 5 },
  { name: "Java", level: 5 },
  { name: "Rest Assured", level: 5 },
  { name: "Jenkins", level: 4 },
  { name: "Appium", level: 4 },
  { name: "AI-Assisted Testing", level: 5 },
];

const CERTIFICATIONS = [
  "Selenium Automation",
  "API Automation",
  "Agile Scrum",
  "CI/CD Practices",
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Expertise />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
            AT
          </span>
          <span className="hidden sm:inline">Aiswarya T N</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-105"
        >
          Hire Me <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Available for Senior QA / SDET roles in the UAE
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Aiswarya T N</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl">
            Senior QA Automation Engineer{" "}
            <span className="text-muted-foreground">·</span> SDET{" "}
            <span className="text-muted-foreground">·</span> 9+ Years
          </p>
          <p className="mx-auto mt-5 max-w-2xl font-mono text-sm text-muted-foreground">
            Selenium • Playwright • API Automation • Rest Assured • Java • CI/CD • AI-Assisted Testing
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-elevated"
            >
              Get in touch
            </a>
          </div>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "9+", v: "Years Experience" },
              { k: "4", v: "Enterprise Frameworks" },
              { k: "5+", v: "Awards & Recognitions" },
              { k: "AI", v: "Assisted Testing" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border/60 bg-surface/60 p-5 text-center backdrop-blur"
              >
                <dt className="font-display text-3xl font-bold text-gradient">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="About Me" title="Professional Summary" />
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-surface p-8 shadow-card sm:p-10">
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            QA Automation Engineer with{" "}
            <span className="font-semibold text-foreground">9+ years</span> of experience
            delivering enterprise-quality automation solutions across{" "}
            <span className="font-semibold text-foreground">FinTech, Banking</span> and
            Enterprise applications. Experienced in designing scalable Selenium, Playwright,
            API and CI/CD automation frameworks that improve release quality and reduce
            execution time. Passionate about leveraging{" "}
            <span className="font-semibold text-foreground">AI-assisted testing</span> to
            build efficient, maintainable, and high-performing automation solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {HIGHLIGHTS.map((h) => (
              <span
                key={h}
                className="rounded-full border border-border bg-background/50 px-3.5 py-1.5 text-xs font-medium text-foreground/90"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical Skills"
          description="The stack I use to design and scale automation frameworks."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border/60 bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md border border-border/70 bg-background/60 px-2.5 py-1 font-mono text-xs text-foreground/85"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="Featured Projects"
          description="Automation frameworks I've designed and shipped in production."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-3xl transition-opacity group-hover:opacity-30" />
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-medium text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-border/60 bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Career" title="Professional Experience" />
        <ol className="relative mx-auto max-w-3xl border-l border-border/70 pl-8">
          {EXPERIENCE.map((e, i) => (
            <li key={i} className="mb-10 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 grid h-4 w-4 place-items-center rounded-full bg-gradient-primary shadow-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-background" />
              </span>
              <div className="rounded-2xl border border-border/60 bg-surface p-6 shadow-card">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {e.role}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{e.company}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/70 bg-background/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Depth" title="Automation Expertise" />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {EXPERTISE.map((e) => (
            <div
              key={e.name}
              className="rounded-2xl border border-border/60 bg-surface p-5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{e.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{e.level}/5</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-background/60">
                <div
                  className="h-full rounded-full bg-gradient-primary"
                  style={{ width: `${(e.level / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="border-t border-border/60 bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Recognition" title="Achievements" />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <div
              key={a}
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-surface p-5 shadow-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Award className="h-5 w-5" />
              </span>
              <span className="font-medium">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {CERTIFICATIONS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="border-t border-border/60 bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Say Hello"
          title="Let's build reliable software together"
          description="Open to Senior QA / SDET opportunities across the UAE."
        />
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactRow icon={MapPin} label="Location" value="Dubai, UAE" />
            <ContactRow icon={Mail} label="Email" value="aiswarya.narayanan6@gmail.com" href="mailto:aiswarya.narayanan6@gmail.com" />
            <ContactRow icon={Phone} label="UAE Mobile" value="+971 55 406 7324" href="tel:+971554067324" />
            <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/aiswarya-t-n-69b502102" href="https://www.linkedin.com/in/aiswarya-t-n-69b502102" />
            <ContactRow icon={Github} label="GitHub" value="github.com/aiswaryanarayanan6-ui" href="https://github.com/aiswaryanarayanan6-ui" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-border/60 bg-surface p-6 shadow-card lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Company" name="company" />
            <Field label="Message" name="message" textarea required />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.01] disabled:opacity-70"
              disabled={sent}
            >
              {sent ? "Thanks — I'll reply soon" : (
                <>
                  Send message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-border/60 bg-surface p-4 shadow-card transition-colors hover:border-primary/40"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </Wrap>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aiswarya T N. Crafted with precision & tested with care.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://www.linkedin.com/in/aiswarya-t-n-69b502102" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="#contact" aria-label="Email" className="transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
