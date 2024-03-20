import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Support',
    Svg: require('@site/static/img/support-svgrepo-com.svg').default,
    description: (
      <>
          We have an 1h <a href="https://eclipse-tractusx.github.io/community/open-meetings">Office Hour</a> Meeting every Friday. Feel free to join and ask your questions directly there.<br/><br/>
          You can also join us on Catena-X <b>MS Teams</b> channel <b><a target="_blank" href="https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380">Communities of Practices -> CX - CoP DevSecOps</a></b>.
      </>
    ),
  },
  {
    title: 'Get Started',
    Svg: require('@site/static/img/rocket-svgrepo-com.svg').default,
    description: (
      <>
          We ask you to make yourself familiar with our Documentation first by starting with our <a href="/docs/operating-model/overview">Getting Started</a> document.
      </>
    ),
  },
  {
    title: 'Request resources',
    Svg: require('@site/static/img/tools-and-utensils-hardware-svgrepo-com.svg').default,
    description: (
      <>
        Feel free to browse our catalog of <a href="/docs/resources">Resources you can request</a> directly from us.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
