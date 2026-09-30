const links = {
  github: 'https://github.com/tonthatgiahuy16',
  linkedin: 'https://www.linkedin.com/in/ton-that-gia-huy/',
  email: 'mailto:tonthatgiahuy160505@gmail.com',
  resume: '/Ton-That-Gia-Huy-Resume.pdf',
};

const projects = [
  {
    number: '01',
    label: 'Personal project · 2026–Present',
    title: 'CloudMentor AI',
    description:
      'An in-progress document-data API that turns uploaded PDFs into traceable retrieval. The current implementation covers modular ingestion, PostgreSQL document lifecycle records, Chroma indexing, metadata lineage, input validation, automated tests, and GitHub Actions CI.',
    tags: ['Python', 'FastAPI', 'RAG', 'Chroma', 'PostgreSQL', 'Alembic'],
    flow: ['PDF', 'Chunks', 'Embeddings', 'Retrieval'],
    resultLabel: 'Current pipeline',
    result: 'PDF → retrieval API',
    href: 'https://github.com/tonthatgiahuy16/CloudMentor-AI',
    tone: 'mint',
  },
  {
    number: '02',
    label: 'Coursework project · Jan–May 2026',
    title: 'Social Sentiment Pipeline',
    description:
      'A coursework batch workflow over approximately 1.6 million Sentiment140 records using PySpark, partitioned Parquet, and HDFS. The repository also includes FastAPI endpoints backed by MongoDB, a separate synthetic Kafka streaming demo, and an Airflow scheduling prototype.',
    tags: ['PySpark', 'Kafka demo', 'Airflow prototype', 'HDFS', 'Docker', 'FastAPI'],
    flow: ['Sentiment140', 'HDFS', 'PySpark', 'Parquet'],
    resultLabel: 'Verified scope',
    result: 'Batch ETL · prototype streaming',
    href: 'https://github.com/tonthatgiahuy16/social-media-sentiment-bigdata-pipeline',
    tone: 'blue',
  },
  {
    number: '03',
    label: 'Coursework project · Sep–Dec 2025',
    title: 'Employee Attrition Prediction',
    description:
      'A classification workflow built on 4,653 employee records. The project handles class imbalance with SMOTE, compares three models, and evaluates the selected Random Forest on a stratified holdout set.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'SMOTE', 'Jupyter'],
    flow: ['Data', 'SMOTE', '3 models', 'Evaluation'],
    resultLabel: 'Holdout performance',
    result: '82.4% accuracy · F1 0.726',
    href: 'https://github.com/tonthatgiahuy16/Employee-Attrition-Prediction',
    tone: 'amber',
  },
];

const skillGroups = [
  {
    title: 'Languages & APIs',
    items: ['Python', 'SQL', 'C#', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'AI & machine learning',
    items: ['RAG workflows', 'Chroma', 'Scikit-learn', 'Spark MLlib', 'SMOTE'],
  },
  {
    title: 'Data engineering',
    items: ['Apache Spark', 'PySpark', 'Kafka fundamentals', 'Airflow fundamentals', 'HDFS', 'ETL pipelines'],
  },
  {
    title: 'Databases & tools',
    items: ['PostgreSQL', 'SQL Server', 'Docker', 'Git', 'Alembic'],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header shell">
        <nav className="nav" aria-label="Primary navigation">
          <a className="mark" href="#top" aria-label="Gia Huy, back to top">
            GH<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href={links.resume} target="_blank" rel="noreferrer">
              Résumé
            </a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero shell">
          <div className="hero-main">
            <p className="eyebrow">
              <span className="status-dot" /> Open to internship opportunities
            </p>
            <h1>
              Building reliable <em>data pipelines</em> and backend systems.
            </h1>
            <p className="hero-copy">
              I&apos;m Tôn Thất Gia Huy, a final-year Data Science student in Ho Chi
              Minh City focused on Data Engineering and backend systems. I build
              Python data workflows and APIs with traceable data flows, automated
              testing, and clear documentation.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={links.resume}
                target="_blank"
                rel="noreferrer"
              >
                Download résumé <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-quiet"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Current focus">
            <span className="note-index">Currently</span>
            <p>
              Improving data pipelines, retrieval quality, and backend reliability
              through hands-on projects.
            </p>
            <span className="note-location">HCMC · Vietnam</span>
          </aside>
          <div className="signal-row" aria-label="Portfolio highlights">
            <div>
              <strong>1.6M</strong>
              <span>Coursework records processed</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Featured projects</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>Expected graduation</span>
            </div>
          </div>
        </section>

        <section id="work" className="section shell">
          <header className="section-heading">
            <p className="section-kicker">01 / Selected work</p>
            <h2>Projects built to learn by shipping.</h2>
            <p>
              Three projects across data engineering, backend development, and
              machine learning—with scope, ownership, and limitations stated
              explicitly.
            </p>
          </header>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div
                  className={`project-visual visual-${project.tone}`}
                  aria-label={`${project.title} architecture and result`}
                >
                  <span className="visual-index" aria-hidden="true">
                    {project.number}
                  </span>
                  <ol className="flow-list">
                    {project.flow.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p className="visual-result">
                    <span>{project.resultLabel}</span>
                    <strong>{project.result}</strong>
                  </p>
                </div>
                <div className="project-copy">
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul
                    className="tag-list"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    View {project.title} on GitHub{' '}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <article className="additional-work">
            <div>
              <p className="project-label">Additional coursework · 2025–2026</p>
              <h3>Smart Library Management System</h3>
            </div>
            <p>
              Built a database-backed library-management application with C# and
              SQL Server and applied structured project planning. Code is not
              public.
            </p>
          </article>
        </section>

        <section id="about" className="section shell about-section">
          <div>
            <p className="section-kicker">02 / About</p>
            <h2>
              Curious about the full path from raw data to a dependable product.
            </h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I&apos;m pursuing a Bachelor&apos;s degree in Data Science at the
              University of Transport Ho Chi Minh City, with expected graduation
              in 2027.
            </p>
            <p>
              My strongest work connects data processing with backend services:
              designing traceable data flows, storing reliable system state, and
              exposing results through APIs. I value readable code, automated
              checks, and documentation that helps the next person continue the
              work.
            </p>
            <dl className="facts">
              <div>
                <dt>Based in</dt>
                <dd>Ho Chi Minh City</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>B.Sc. candidate, Data Science · 2023–2027</dd>
              </div>
              <div>
                <dt>English</dt>
                <dd>Technical reading and working communication</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section shell skills-section">
          <header className="section-heading compact">
            <p className="section-kicker">03 / Toolkit</p>
            <h2>What I work with.</h2>
          </header>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <div className="skill-group" key={group.title}>
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section shell">
          <p className="section-kicker">04 / Contact</p>
          <h2>Have a real problem worth solving?</h2>
          <p>
            I&apos;m looking for Data Engineering, data-focused Backend, or related
            internship and fresher opportunities in Ho Chi Minh City.
          </p>
          <a className="email-address" href={links.email}>
            tonthatgiahuy160505@gmail.com
          </a>
          <div className="contact-links">
            <a className="button button-primary" href={links.email}>
              Email me <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href={links.resume}
              target="_blank"
              rel="noreferrer"
            >
              Résumé ↓
            </a>
            <a
              className="text-link"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="text-link"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <p>© 2026 Tôn Thất Gia Huy</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
