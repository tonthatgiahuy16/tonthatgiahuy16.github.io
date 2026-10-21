const links = {
  github: 'https://github.com/tonthatgiahuy16',
  linkedin: 'https://www.linkedin.com/in/ton-that-gia-huy/',
  email: 'mailto:tonthatgiahuy160505@gmail.com',
  resume: '/Ton-That-Gia-Huy-Resume.pdf',
};

const projects = [
  {
    number: '01',
    status: 'Implemented baseline',
    label: 'Personal project · 2026–Present',
    title: 'CloudMentor AI',
    summary: 'A document-data platform built around recoverable ingestion, explicit lifecycle state, and traceable retrieval.',
    description: 'PDF, TXT, and DOCX sources flow through FastAPI into a PostgreSQL document registry and a rebuildable Chroma index. Local and MinIO source storage, guarded migration, retry and recovery paths, concurrent duplicate protection, and bounded reconciliation make the data path inspectable instead of disposable.',
    flow: ['Source storage', 'Lifecycle registry', 'Extraction', 'Derived index', 'Retrieval'],
    evidence: ['PDF / TXT / DOCX lineage', 'PostgreSQL + Chroma reconciliation', 'MinIO recovery integration checks'],
    limits: 'Local and CI evidence; no production deployment, external-scale benchmark, or production authentication claim.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Chroma', 'MinIO', 'Alembic'],
    href: 'https://github.com/tonthatgiahuy16/CloudMentor-AI',
  },
  {
    number: '02',
    status: 'Verified coursework scope',
    label: 'Coursework project · Jan–May 2026',
    title: 'Social Sentiment Pipeline',
    summary: 'A batch-oriented big-data workflow over approximately 1.6 million Sentiment140 records.',
    description: 'The project uses PySpark for cleaning and feature generation, HDFS and partitioned Parquet for data storage, and Spark ML for model comparison. Saved analytics are exposed through FastAPI and MongoDB; Kafka and Airflow remain clearly scoped demonstrations.',
    flow: ['Sentiment140', 'HDFS', 'PySpark', 'Parquet', 'Saved analytics'],
    evidence: ['Approximately 1.6M source records', 'Partitioned Parquet outputs', 'Saved model metrics and analytics'],
    limits: 'Kafka uses synthetic messages and the Airflow DAG is a prototype; no production streaming claim.',
    tags: ['PySpark', 'HDFS', 'Parquet', 'Spark ML', 'FastAPI', 'MongoDB'],
    href: 'https://github.com/tonthatgiahuy16/social-media-sentiment-bigdata-pipeline',
  },
  {
    number: '03',
    status: 'In progress',
    label: 'Engineering learning project · 2026–Present',
    title: 'OpsBrain',
    summary: 'An enterprise-context system explored through data contracts, immutable versions, and PostgreSQL ingestion lifecycle design.',
    description: 'My verified work covers the frontmatter contract and validator, a synthetic Markdown corpus, Alembic core storage schema, canonical content hashing, unchanged replay, and immutable semantic updates. The project is still progressing toward retrieval, access control, and operational workflows.',
    flow: ['Markdown contract', 'Validation', 'Canonical hash', 'PostgreSQL versions', 'Review state'],
    evidence: ['Contract and relationship validation', 'Migration round-trip and constraint checks', 'Create, replay, and semantic update tests'],
    limits: 'The knowledge system is not end-to-end; retrieval, ACL enforcement, citation, and deployment remain future work.',
    tags: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Pydantic', 'Docker'],
    href: 'https://github.com/tonthatgiahuy16/OpsBrain',
  },
];

const practices = [
  ['Source of truth', 'Keep operational state explicit and derived data rebuildable.'],
  ['Failure paths', 'Design retries, recovery, and reconciliation before calling a pipeline reliable.'],
  ['Evidence', 'Separate implemented code, passing checks, documented plans, and open limits.'],
  ['Interfaces', 'Connect data processing to usable APIs without hiding lineage or lifecycle state.'],
];

const stack = [
  ['Core', 'Python · SQL · FastAPI · REST APIs'],
  ['Data systems', 'PostgreSQL · PySpark · HDFS · Parquet · Chroma'],
  ['Workflow', 'Docker · Git · Alembic · GitHub Actions'],
  ['Learning', 'Kafka fundamentals · Airflow fundamentals · Databricks fundamentals'],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="portfolio-shell">
        <aside className="identity-rail" aria-label="Portfolio navigation">
          <a className="monogram" href="#top" aria-label="Gia Huy, back to top">GH<span>/</span>26</a>
          <div className="identity-copy">
            <p className="rail-label">Data Engineering<br />&amp; Backend</p>
            <p className="availability"><span /> Open to Intern / Fresher roles</p>
          </div>
          <nav className="rail-nav" aria-label="Primary navigation">
            <a href="#work"><span>01</span> Case files</a>
            <a href="#approach"><span>02</span> Approach</a>
            <a href="#about"><span>03</span> Profile</a>
            <a href="#contact"><span>04</span> Contact</a>
          </nav>
          <div className="rail-links">
            <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={links.resume} target="_blank" rel="noreferrer">Résumé ↓</a>
          </div>
        </aside>

        <main id="main-content" className="content-column">
          <section id="top" className="intro-section">
            <div className="intro-meta"><span>Portfolio / 2026</span><span>Ho Chi Minh City, Vietnam</span></div>
            <h1>Systems that keep their <em>data story</em> intact.</h1>
            <div className="intro-bottom">
              <p>I&apos;m Tôn Thất Gia Huy. I build data pipelines and backend systems with explicit state, traceable lineage, recovery paths, and tests that show what actually works.</p>
              <a className="arrow-link" href="#work">Read the case files <span>↓</span></a>
            </div>
          </section>

          <section id="work" className="dossier-section">
            <header className="section-index"><span>01</span><div><p>Selected work</p><h2>Three systems, documented by scope and evidence.</h2></div></header>
            <div className="case-list">
              {projects.map((project) => (
                <article className="case-file" key={project.title}>
                  <header className="case-header">
                    <span className="case-number">{project.number}</span>
                    <div><p className="case-label">{project.label}</p><h3>{project.title}</h3></div>
                    <span className="case-status">{project.status}</span>
                  </header>
                  <div className="case-grid">
                    <div className="case-narrative">
                      <p className="case-summary">{project.summary}</p><p>{project.description}</p>
                      <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    </div>
                    <div className="system-trace" aria-label={`${project.title} data flow`}>
                      <p className="micro-label">System trace</p>
                      <ol>{project.flow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol>
                    </div>
                    <div className="evidence-block">
                      <div><p className="micro-label">Evidence</p><ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul></div>
                      <div className="limit-note"><p className="micro-label">Boundary</p><p>{project.limits}</p></div>
                    </div>
                  </div>
                  <footer className="case-footer"><span>Repository</span><a href={project.href} target="_blank" rel="noreferrer">Inspect {project.title} ↗</a></footer>
                </article>
              ))}
            </div>
          </section>

          <section id="approach" className="approach-section">
            <header className="section-index"><span>02</span><div><p>Engineering approach</p><h2>Reliability is designed into the data path.</h2></div></header>
            <div className="practice-list">
              {practices.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </section>

          <section id="about" className="profile-section">
            <header className="section-index"><span>03</span><div><p>Profile</p><h2>From raw input to a system someone else can trust.</h2></div></header>
            <div className="profile-grid">
              <div className="profile-copy">
                <p className="profile-lead">I&apos;m pursuing a Bachelor&apos;s degree in Data Science at the University of Transport Ho Chi Minh City.</p>
                <p>My work sits between data processing and backend engineering: designing contracts, keeping operational state consistent, making derived data recoverable, and exposing results through clear APIs.</p>
              </div>
              <dl className="stack-list">{stack.map(([title, items]) => <div key={title}><dt>{title}</dt><dd>{items}</dd></div>)}</dl>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="contact-index">04 / Contact</div>
            <h2>Let&apos;s build a data path that survives the unhappy path.</h2>
            <p>I&apos;m looking for Data Engineering, Data Platform, and data-intensive Backend Intern/Fresher opportunities.</p>
            <a className="email-link" href={links.email}>tonthatgiahuy160505@gmail.com <span>↗</span></a>
            <div className="contact-links">
              <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={links.resume} target="_blank" rel="noreferrer">Résumé ↓</a>
            </div>
          </section>
          <footer className="site-footer"><span>© 2026 Tôn Thất Gia Huy</span><a href="#top">Back to index ↑</a></footer>
        </main>
      </div>
    </>
  );
}
