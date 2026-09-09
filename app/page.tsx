const links = {
  github: 'https://github.com/tonthatgiahuy16',
  linkedin:
    'https://www.linkedin.com/in/t%C3%B4n-th%E1%BA%A5t-gia-huy-708860369/',
  email: 'mailto:tonthatgiahuy160505@gmail.com',
  resume: '/Ton-That-Gia-Huy-Resume.pdf',
};

const projects = [
  {
    number: '01',
    label: 'Personal project · 2026–Present',
    title: 'CloudMentor AI',
    description:
      'An in-progress RAG API prototype for turning uploaded PDFs into traceable, source-grounded retrieval. The current implementation covers ingestion, chunking, Chroma indexing, metadata propagation, input validation, and a PostgreSQL document-registry foundation.',
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
      'A multi-service Docker Compose data and ML pipeline for 1.6 million tweets. Data moves through ingestion, HDFS storage, Spark ETL and model inference, then reaches a FastAPI-backed monitoring dashboard.',
    tags: ['Spark', 'Kafka', 'Airflow', 'HDFS', 'Docker', 'FastAPI'],
    flow: ['Kafka', 'HDFS', 'Spark', 'FastAPI'],
    resultLabel: 'Pipeline scope',
    result: 'Batch ETL · simulated streaming',
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
    items: ['Apache Spark', 'Kafka', 'Airflow', 'HDFS', 'ETL pipelines'],
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
              Building practical systems where <em>AI meets data.</em>
            </h1>
            <p className="hero-copy">
              I&apos;m Tôn Thất Gia Huy, a Data Science student in Ho Chi Minh City.
              I build document-retrieval prototypes, data pipelines, and backend
              APIs—and validate them with measurable results.
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
              Learning how retrieval, data quality, and backend design shape
              trustworthy AI products.
            </p>
            <span className="note-location">HCMC · Vietnam</span>
          </aside>
          <div className="signal-row" aria-label="Portfolio highlights">
            <div>
              <strong>1.6M</strong>
              <span>Tweets processed</span>
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
              Three working implementations across applied AI, data engineering,
              and machine learning—with scope, ownership, and outcomes stated
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
              Built a library-management application with C# and SQL Server;
              applied PMBOK and PERT/CPM to shorten the project schedule by 33%
              while maintaining budget control (CPI = 1.05). Code is not public.
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
              My strongest work sits between disciplines: designing data flows,
              exposing services through APIs, and evaluating whether an AI or ML
              system actually works. I value readable code, measurable results,
              and documentation that helps the next person continue the work.
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
                <dd>B2 working proficiency</dd>
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
            I&apos;m looking for internship opportunities in AI application
            engineering, data engineering, or backend development in Ho Chi Minh
            City.
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
