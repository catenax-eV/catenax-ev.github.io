import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Working Model',
    Svg: require('@site/static/img/working-model-icon.svg').default,
    description: (
      <>
          Here you will find all the information about the <a href="/docs/working-model/overview">Working Model</a>.
      </>
    ),
  },
  {
    title: 'Standards',
    Svg: require('@site/static/img/standards-icon.svg').default,
    description: (
      <>
          Here you will find all the information about the <a href="/docs/standards/overview">Standards</a>.
      </>
    ),
  },
  {
    title: 'Operating Model',
    Svg: require('@site/static/img/operating-model-icon.svg').default,
    description: (
      <>
          Here you will find all the information about the <a href="docs/operating-model/operating-model">Operating Model</a>.
      </>
    ),
  },
  {
    title: 'Fededback',
    Svg: require('@site/static/img/support-icon.svg').default,
    description: (
      <>
          Please provide fededback or requests via GitHub <a href="https://github.com/catenax-eV/catenax-ev.github.io/discussions">discussions</a>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
