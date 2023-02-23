import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HomepageBanner.module.css';


function GetStarted(): JSX.Element {


  return (
    <div className="row">
     <h3>Get Started</h3>
     <p>Test content</p>
     <a href="/clarinet/introduction">Clarinet</a>{' '}
     <br></br>
    </div>
  );
}

export default function HomepageBanner(): JSX.Element {
  return (
    <section className={styles.banner}>
      <div className="container padding-horiz--lg">
        <div className="row">
          <div className="col">
          <ThemedImage
            alt="web3"
            className={styles.featureSvg}
            sources={{
              light: useBaseUrl('/img/landing_page_web3.png'),
              dark: useBaseUrl('/img/landing_page_web3.png' ?? '/img/landing_page_web3.png'),
            }}
          />
          <div className="col col">{GetStarted()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
