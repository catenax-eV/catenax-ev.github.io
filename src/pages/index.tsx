import type {ComponentType, ReactNode, SVGProps} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

const CURRENT_RELEASE = 'CX-Titan';
const PREVIEW_RELEASE = 'CX-Neptune';

/* -- (1) Hero: quick links ------------------------------------------------ */

type QuickLink = {
  label: string;
  to: string;
};

const QUICK_LINKS: QuickLink[] = [
  {label: 'Rulebooks', to: '/docs/next/rulebooks/overview/'},
  {label: 'Dependency Graph', to: '/standards-graph'},
  {label: 'Release Timelines', to: '/timelines'},
  {label: 'Glossary', to: '/glossary'},
];

/* -- (2) Key figures ------------------------------------------------------ */

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  {value: '100+', label: 'Technical standards'},
  {value: '5', label: 'Rulebooks'},
  {value: CURRENT_RELEASE, label: 'Current release'},
  {value: '2 / year', label: 'Release cadence'},
];

/* -- (3) Explore the library ---------------------------------------------- */

type AreaItem = {
  title: string;
  Svg: SvgComponent;
  to: string;
  description: string;
};

const AREAS: AreaItem[] = [
  {
    title: 'Standards',
    Svg: require('@site/static/img/standards-icon.svg').default,
    to: '/docs/standards/overview',
    description:
      'Uniform rules and requirements that make independent implementations interoperable — and the basis for every conformity assessment.',
  },
  {
    title: 'Regulatory Framework',
    Svg: require('@site/static/img/regulatory-framework-icon.svg').default,
    to: '/docs/regulatory-framework/governance-framework',
    description:
      'Data sovereignty, mandatory use case requirements and the legal considerations that govern data space operations.',
  },
  {
    title: 'Operating Model',
    Svg: require('@site/static/img/operating-model-icon.svg').default,
    to: '/docs/operating-model/why-introduction',
    description:
      'The overall rules of the ecosystem: roles, processes and solutions, and how they interact with one another.',
  },
  {
    title: 'Working Model',
    Svg: require('@site/static/img/working-model-icon.svg').default,
    to: '/docs/working-model/overview',
    description:
      'Values, principles and organizational processes behind our software and standard artefacts — from idea to release.',
  },
];

/* -- (4) Role based entry points ------------------------------------------ */

type PathStep = {
  label: string;
  to: string;
};

type PathItem = {
  title: string;
  intro: string;
  steps: PathStep[];
};

const PATHS: PathItem[] = [
  {
    title: 'I want to become compliant',
    intro: 'Prove that your solution meets the Catena-X rules.',
    steps: [
      {label: 'Read the standards overview', to: '/docs/standards/overview'},
      {label: 'Check the regulatory framework', to: '/docs/regulatory-framework/governance-framework'},
      {label: 'Understand the operating model', to: '/docs/operating-model/why-introduction'},
    ],
  },
  {
    title: 'I want to implement',
    intro: 'Build a service or application for the data space.',
    steps: [
      {label: 'Browse the technical standards', to: '/docs/standards/overview'},
      {label: 'Explore standard dependencies', to: '/standards-graph'},
      {label: 'Follow the release timelines', to: '/timelines'},
    ],
  },
  {
    title: 'I want to contribute',
    intro: 'Shape the ecosystem together with the community.',
    steps: [
      {label: 'Learn the working model', to: '/docs/working-model/overview'},
      {label: 'Read the markdown guidelines', to: '/markdown-guidelines'},
      {label: 'Get started on GitHub', to: '/getting-started-github'},
    ],
  },
];

/* -- (5) Releases --------------------------------------------------------- */

type ReleaseItem = {
  title: string;
  date: string;
  note: string;
  to: string;
};

const RELEASES: ReleaseItem[] = [
  {
    title: 'CX-Neptune',
    date: '18 September 2026',
    note: 'Preview',
    to: '/blog-releasenotes/cx-neptune',
  },
  {
    title: 'CX-Titan',
    date: '18 March 2026',
    note: 'Current',
    to: '/blog-releasenotes/cx-titan',
  },
  {
    title: 'CX-Saturn',
    date: '2025',
    note: 'Previous',
    to: '/blog-releasenotes/cx-saturn',
  },
];

/* -- (7) Ecosystem -------------------------------------------------------- */

type EcosystemItem = {
  title: string;
  Svg: SvgComponent;
  to: string;
  cta: string;
  description: string;
};

const ECOSYSTEM: EcosystemItem[] = [
  {
    title: 'Catena-X Automotive Network e.V.',
    Svg: require('@site/static/img/logo.svg').default,
    to: 'https://catena-x.net/association/membership-benefits/',
    cta: 'Become a member',
    description:
      'Join the association and shape the ecosystem in committees and expert groups.',
  },
  {
    title: 'Eclipse Tractus-X',
    Svg: require('@site/static/img/logo_tractus-x.svg').default,
    to: 'https://eclipse-tractusx.github.io/docs/oss/getting-started',
    cta: 'Contribute to the project',
    description:
      'Collaborate with the experts on the reference implementation in a true open-source environment.',
  },
];

/* ========================================================================== */

function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <p className={styles.eyebrow}>The Catena-X knowledge foundation</p>
        <Heading as="h1" className={styles.heroTitle}>
          <span className={styles.heroLine}>Understand.</span>
          <span className={styles.heroLine}>Implement.</span>
          <span className={clsx(styles.heroLine, styles.heroLineAccent)}>Connect.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          Your reference for the standards, governance and rules that connect the Catena-X
          ecosystem. Everything you need to prove compliance — in one place.
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.ctaPrimary} to="/docs/standards/overview">
            Explore the Library
            <span aria-hidden="true" className={styles.ctaArrow}>
              →
            </span>
          </Link>
          <Link className={styles.ctaGhost} to="/docs/operating-model/why-introduction">
            New to Catena-X?
          </Link>
        </div>

        <Link className={styles.heroSearch} to="/search">
          <svg
            className={styles.heroSearchIcon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <span className={styles.heroSearchLabel}>Find standards, rulebooks or guidelines…</span>
          <span className={styles.heroSearchHint}>Search the library</span>
        </Link>

        <ul className={styles.quickLinks}>
          {QUICK_LINKS.map((item) => (
            <li key={item.to}>
              <Link className={styles.quickLink} to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.heroMeta}>
          <span>
            Standards release ·{' '}
            <strong className={styles.heroMetaAccent}>{CURRENT_RELEASE} / Current</strong>
          </span>
          <Link className={styles.heroMetaLink} to="/blog-releasenotes">
            Browse releases &amp; preview <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats(): ReactNode {
  return (
    <section className={styles.statsBand} aria-label="Catena-X Library in numbers">
      <div className={clsx('container', styles.statsGrid)}>
        {STATS.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Areas(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Explore the library</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Four areas, one normative documentation
          </Heading>
          <p className={styles.sectionLead}>
            The complete normative documentation of Catena-X, grouped into the four areas that
            define how the ecosystem works.
          </p>
        </header>

        <div className={styles.areaGrid}>
          {AREAS.map(({title, Svg, to, description}) => (
            <Link className={styles.areaCard} to={to} key={title}>
              <span className={styles.areaIcon}>
                <Svg role="presentation" aria-hidden="true" />
              </span>
              <Heading as="h3" className={styles.areaTitle}>
                {title}
              </Heading>
              <p className={styles.areaText}>{description}</p>
              <span className={styles.areaLink}>
                Learn more <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Paths(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionMuted)}>
      <div className="container">
        <header className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Find your path</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Where do you want to start?
          </Heading>
        </header>

        <div className={styles.pathGrid}>
          {PATHS.map((path) => (
            <div className={styles.path} key={path.title}>
              <Heading as="h3" className={styles.pathTitle}>
                {path.title}
              </Heading>
              <p className={styles.pathIntro}>{path.intro}</p>
              <ol className={styles.pathSteps}>
                {path.steps.map((step) => (
                  <li className={styles.pathStep} key={step.to}>
                    <Link to={step.to}>{step.label}</Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Releases(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.releaseLayout)}>
        <div>
          <p className={styles.sectionEyebrow}>Releases &amp; versions</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Two releases a year, fully versioned
          </Heading>
          <p className={styles.sectionLead}>
            Every area of the library is versioned alongside the Catena-X release train.{' '}
            <strong>{CURRENT_RELEASE}</strong> is the current release, <strong>{PREVIEW_RELEASE}</strong>{' '}
            is available as a preview. Older releases stay available for reference.
          </p>
          <div className={styles.releaseActions}>
            <Link className={styles.ctaPrimary} to="/release-management">
              Release management
              <span aria-hidden="true" className={styles.ctaArrow}>
                →
              </span>
            </Link>
            <Link className={styles.ctaOutline} to="/timelines">
              Timelines
            </Link>
          </div>
        </div>

        <ul className={styles.releaseList}>
          {RELEASES.map((release) => (
            <li key={release.to}>
              <Link className={styles.releaseItem} to={release.to}>
                <span className={styles.releaseName}>{release.title}</span>
                <span className={styles.releaseDate}>{release.date}</span>
                <span className={styles.releaseBadge}>{release.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GraphTeaser(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.graphBanner}>
          <div>
            <span className={styles.draftBadge}>Draft</span>
            <Heading as="h2" className={styles.graphTitle}>
              See how the standards depend on each other
            </Heading>
            <p className={styles.graphText}>
              The interactive dependency graph visualises how more than a hundred Catena-X standards
              reference and build on one another — per release.
            </p>
            <Link className={styles.ctaPrimary} to="/standards-graph">
              Open the dependency graph
              <span aria-hidden="true" className={styles.ctaArrow}>
                →
              </span>
            </Link>
          </div>
          <div className={styles.graphVisual} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Ecosystem(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionMuted)}>
      <div className="container">
        <header className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Get involved</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Ready to contribute?
          </Heading>
        </header>

        <div className={styles.ecosystemGrid}>
          {ECOSYSTEM.map(({title, Svg, to, cta, description}) => (
            <Link className={styles.ecosystemCard} to={to} key={title}>
              <span className={styles.ecosystemLogo}>
                <Svg role="presentation" aria-hidden="true" />
              </span>
              <Heading as="h3" className={styles.areaTitle}>
                {title}
              </Heading>
              <p className={styles.areaText}>{description}</p>
              <span className={styles.areaLink}>
                {cta} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feedback(): ReactNode {
  return (
    <section className={styles.feedbackBand}>
      <div className={clsx('container', styles.feedbackInner)}>
        <div>
          <Heading as="h2" className={styles.feedbackTitle}>
            We value your feedback
          </Heading>
          <p className={styles.feedbackText}>
            Missing something, found an error or have an idea? Let us know — it helps us make the
            library better for everyone.
          </p>
        </div>
        <Link
          className={styles.ctaOutline}
          to="https://github.com/catenax-eV/catenax-ev.github.io/discussions">
          Start a discussion
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Catena-X Library"
      description="The normative documentation of Catena-X: standards, regulatory framework, operating model and working model.">
      <Hero />
      <main>
        <Stats />
        <Areas />
        <Paths />
        <Releases />
        <GraphTeaser />
        <Ecosystem />
        <Feedback />
      </main>
    </Layout>
  );
}
