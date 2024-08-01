import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  path: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Standards',
    Svg: require('@site/static/img/standards-icon.svg').default,
    path: '/docs/standards/overview',
    description: (
      <>
        Our Catena-X <a href="/docs/standards/overview">Standards</a> serve as the foundation for certification, ensuring technical compatibility and interoperability between independent implementations by providing uniform rules and requirements used for conformity assessment.
      </>
    ),
  },
  {
    title: 'Regulatory Framework',
    Svg: require('@site/static/img/regulatory-framework-icon.svg').default,
    path: '/docs/regulatory-framework/governance-framework',
    description: (
      <>
        Our <a href="/docs/regulatory-framework/governance-framework">Regulatory Framework</a> for data space operations includes detailed information on data sovereignty, mandatory use case requirements, and other legal considerations that are relevant to all of our activities.
      </>
    ),
  },
  {
    title: 'Operating Model',
    Svg: require('@site/static/img/operating-model-icon.svg').default,
    path: '/docs/operating-model/why-introduction',
    description: (
      <>
          Our Catena-X <a href="/docs/operating-model/why-introduction">Operating Model</a> describes the entire Catena-X ecosystem, focusing on a comprehensive definition of our operating environment and its roles, processes, and solutions, and how they interact.
      </>
    ),
  },
  {
    title: 'Working Model',
    Svg: require('@site/static/img/working-model-icon.svg').default,
    path: '/docs/working-model/overview',
    description: (
      <>
          Here you will find all the information about the <a href="/docs/working-model/overview">Working Model</a>.
      </>
    ),
  },
  {
    title: 'Feedback',
    Svg: require('@site/static/img/support-icon.svg').default,
    path: 'https://github.com/catenax-eV/catenax-ev.github.io/discussions',
    description: (
      <>
          Please provide feedback or requests via GitHub <a href="https://github.com/catenax-eV/catenax-ev.github.io/discussions">discussions</a>
      </>
    ),
  },
];

function Feature({title, path, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={path}><Svg className={styles.featureSvg} role="img" /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row_landing}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
