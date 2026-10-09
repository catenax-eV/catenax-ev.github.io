import type {ComponentType, ReactNode, SVGProps} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  useLatestVersion,
  useVersions,
  type GlobalVersion,
} from '@docusaurus/plugin-content-docs/client';

import styles from './index.module.css';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

/* ==========================================================================
   Release data derived from the Docusaurus docs plugin

   Nothing about releases is hard-coded here: the version list, which release
   is current and which one is the preview all come from the docs plugin's
   global data, i.e. from `versions.json` plus the `versions` labels in
   `docusaurus.config.ts`. Adding or renaming a release automatically updates
   the landing page.
   ========================================================================== */

const DOCS_PLUGIN_ID = 'default';

/** Docusaurus' unreleased ("next") version is always named `current`. */
const PREVIEW_VERSION_NAME = 'current';

/**
 * Version labels carry a human-readable status suffix (for example
 * "CX-Titan (Current)"). The suffix is rendered as a separate badge, so it is
 * stripped from the release name itself.
 */
function releaseName(version: GlobalVersion): string {
  return version.label.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

function releaseStatus(version: GlobalVersion): string {
  if (version.name === PREVIEW_VERSION_NAME) {
    return 'Preview';
  }
  return version.isLast ? 'Current' : 'Previous';
}

/**
 * A version's `path` is only the base path of that version and has no route of
 * its own, so the entry point is the version's main document instead.
 */
function releaseLink(version: GlobalVersion): string | undefined {
  return version.docs.find((doc) => doc.id === version.mainDocId)?.path;
}

/** Resolves a doc ID to its route within a version. */
function docLink(version: GlobalVersion, docId: string): string | undefined {
  return version.docs.find((doc) => doc.id === docId)?.path;
}

/**
 * Counts the top-level documents of a docs area in a given version.
 *
 * Standards and rulebooks are either a single file (`standards/CX-0001-Foo`)
 * or a folder of several documents (`standards/CX-0143-Bar/introduction`).
 * Counting the distinct first path segment therefore yields the number of
 * standards/rulebooks rather than the number of pages.
 */
function countArea(version: GlobalVersion, area: string, prefix: string): number {
  const segments = new Set<string>();

  version.docs.forEach((doc) => {
    if (doc.unlisted) {
      return;
    }
    const [docArea, entry] = doc.id.split('/');
    if (docArea === area && entry?.startsWith(prefix)) {
      segments.add(entry);
    }
  });

  return segments.size;
}

/* -- (1) Hero: quick links ------------------------------------------------ */

type QuickLink = {
  label: string;
  to: string;
};

const QUICK_LINKS: QuickLink[] = [
  {label: 'Dependency Graph', to: '/standards-graph'},
  {label: 'Release Timelines', to: '/timelines'},
  {label: 'Glossary', to: '/glossary'},
];

/** Prepends the rulebooks of the current release to the static quick links. */
function useQuickLinks(): QuickLink[] {
  const rulebooks = docLink(useLatestVersion(DOCS_PLUGIN_ID), 'rulebooks/overview');

  return rulebooks ? [{label: 'Rulebooks', to: rulebooks}, ...QUICK_LINKS] : QUICK_LINKS;
}

/* -- (2) Key figures ------------------------------------------------------ */

type Stat = {
  value: string;
  label: string;
};

function useStats(): Stat[] {
  const latestVersion = useLatestVersion(DOCS_PLUGIN_ID);

  const stats: Stat[] = [
    {value: `${countArea(latestVersion, 'standards', 'CX-')}`, label: 'Technical standards'},
    {value: `${countArea(latestVersion, 'rulebooks', 'CX-NFR-')}`, label: 'Rulebooks'},
    {value: releaseName(latestVersion), label: 'Current release'},
    {value: '2 / year', label: 'Release cadence'},
  ];

  // An area that does not exist in the current release would otherwise be
  // advertised as "0".
  return stats.filter((stat) => stat.value !== '0');
}

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

/** Entry point and section anchors of the migration guide release note. */
const MIGRATION_GUIDE = '/blog-releasenotes/migration-guide-cx-jupiter-to-cx-saturn-and-cx-neptune';

const MIGRATION_STEPS: PathStep[] = [
  {label: 'CX-Jupiter deprecation impact', to: `${MIGRATION_GUIDE}#3-cx-jupiter-deprecation-impact`},
  {
    label: 'CX-Jupiter to CX-Saturn',
    to: `${MIGRATION_GUIDE}#5-migration-guide--cx-jupiter-to-cx-saturn`,
  },
  {
    label: 'CX-Saturn to CX-Neptune',
    to: `${MIGRATION_GUIDE}#6-migration-guide--cx-saturn-to-cx-neptune`,
  },
];

/**
 * Appends the migration path, whose target release is the upcoming preview
 * version rather than a hard-coded release name.
 */
function usePaths(): PathItem[] {
  const previewVersion = useVersions(DOCS_PLUGIN_ID).find(
    (version) => version.name === PREVIEW_VERSION_NAME,
  );

  return [
    ...PATHS,
    {
      title: 'I want to migrate',
      intro: previewVersion
        ? `Move an existing implementation to ${releaseName(previewVersion)}.`
        : 'Move an existing implementation to the upcoming release.',
      steps: MIGRATION_STEPS,
    },
  ];
}

/* -- (5) Releases --------------------------------------------------------- */

type ReleaseItem = {
  title: string;
  status: string;
  to: string;
};

/**
 * The release list mirrors the versions configured for the docs plugin, newest
 * first, and links to the documentation of each release.
 */
function useReleases(): ReleaseItem[] {
  return useVersions(DOCS_PLUGIN_ID).flatMap((version) => {
    const to = releaseLink(version);
    return to ? [{title: releaseName(version), status: releaseStatus(version), to}] : [];
  });
}

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
  const latestVersion = useLatestVersion(DOCS_PLUGIN_ID);
  const quickLinks = useQuickLinks();

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
          {quickLinks.map((item) => (
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
            <strong className={styles.heroMetaAccent}>
              {releaseName(latestVersion)} / {releaseStatus(latestVersion)}
            </strong>
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
  const stats = useStats();

  return (
    <section className={styles.statsBand} aria-label="Catena-X Library in numbers">
      <div className={clsx('container', styles.statsGrid)}>
        {stats.map((stat) => (
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
  const paths = usePaths();

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
          {paths.map((path) => (
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
  const releases = useReleases();
  const latestVersion = useLatestVersion(DOCS_PLUGIN_ID);
  const previewVersion = useVersions(DOCS_PLUGIN_ID).find(
    (version) => version.name === PREVIEW_VERSION_NAME,
  );

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
            <strong>{releaseName(latestVersion)}</strong> is the current release
            {previewVersion && (
              <>
                , <strong>{releaseName(previewVersion)}</strong> is available as a preview
              </>
            )}
            . Older releases stay available for reference.
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

        <div>
          <ul className={styles.releaseList}>
            {releases.map((release) => (
              <li key={release.to}>
                <Link className={styles.releaseItem} to={release.to}>
                  <span className={styles.releaseName}>{release.title}</span>
                  <span className={styles.releaseBadge}>{release.status}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link className={styles.releaseNotesLink} to="/blog-releasenotes">
            Read the release notes <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function GraphTeaser(): ReactNode {
  const latestVersion = useLatestVersion(DOCS_PLUGIN_ID);
  const standardsCount = countArea(latestVersion, 'standards', 'CX-');

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
              The interactive dependency graph visualises how the {standardsCount} Catena-X
              standards of {releaseName(latestVersion)} reference and build on one another — per
              release.
            </p>
            <Link className={styles.ctaPrimary} to="/standards-graph">
              Open the dependency graph
              <span aria-hidden="true" className={styles.ctaArrow}>
                →
              </span>
            </Link>
          </div>
          <div className={styles.graphVisual} aria-hidden="true">
            <svg className={styles.graphSvg} viewBox="0 0 300 200" role="presentation">
              <g className={styles.graphEdges}>
                <path d="M60 48 118 108" />
                <path d="M168 34 118 108" />
                <path d="M168 34 248 72" />
                <path d="M248 72 212 132" />
                <path d="M118 108 212 132" />
                <path d="M118 108 58 160" />
                <path d="M212 132 166 176" />
                <path d="M58 160 166 176" />
              </g>
              <circle className={styles.graphNodeLime} cx="60" cy="48" r="6" />
              <circle className={styles.graphNodeOrange} cx="168" cy="34" r="6" />
              <circle className={styles.graphNodeLime} cx="248" cy="72" r="6" />
              <circle className={styles.graphNodeOrange} cx="118" cy="108" r="7" />
              <circle className={styles.graphNodeOrange} cx="212" cy="132" r="6" />
              <circle className={styles.graphNodeMuted} cx="58" cy="160" r="5" />
              <circle className={styles.graphNodeMuted} cx="166" cy="176" r="5" />
            </svg>
          </div>
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
