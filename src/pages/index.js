import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';




const OptionList = [
  {
    title: 'Catena-x Automotive Network e.V.',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
          <a href="https://catena-x.net/en/about-us/the-association/become-a-member">Become a member</a> of Catena-X and shape the ecosystem in committees and expert groups.
      </>
    ),
  },
  {
    title: 'Eclipse Tractus-X Project',
    Svg: require('@site/static/img/logo_tractus-x.svg').default,
    description: (
      <>
           <a href="https://eclipse-tractusx.github.io/docs/oss/getting-started">Collaborate and contribute</a> together with the experts in a great open-source environment.
      </>
    ),
  },
];

function Option({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageContributingOptions() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Are you interested? Ready to contribute?</h1>
        <p className="hero__subtitle">There are two options</p>
        <section className={clsx('hero hero--primary', styles.features)}>
          <div className="container">
            <div className={styles.row_landing}>
              {OptionList.map((props, idx) => (
                <Option key={idx} {...props} />
              ))}
            </div>
          </div>
    </section>
      </div>
    </header>



    
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures/>
        <HomepageContributingOptions/>
      </main>
    </Layout>
  );
}
