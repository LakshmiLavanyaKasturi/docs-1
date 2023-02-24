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

const links=[<li><a href='/clarinet/how-to-guides/how-to-set-up-local-development-environment'>Setup local development environment</a></li>, 
<li><a href='/clarinet/how-to-guides/how-to-add-contract'>Add contracts</a></li>, 
<li><a href='/clarinet/how-to-guides/how-to-test-contract'>Test Contracts</a></li>, 
]

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
          </div>
          <div className="col margin-bottom--lg">
              <h3>Get Started</h3>
              <div className="row">
                <h4>Test something with basic header</h4>

                <ul>{links}</ul>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="col">
            <ThemedImage
              alt="web3"
              className={styles.featureSvg}
              sources={{
                light: useBaseUrl('/img/web3api.png'),
                dark: useBaseUrl('/img/landing_page_web3.png' ?? '/img/landing_page_web3.png'),
              }}
            />
            
          </div>
          <div className="col">
            <ThemedImage
              alt="web3"
              className={styles.featureSvg}
              sources={{
                light: useBaseUrl('/img/sbtc.png'),
                dark: useBaseUrl('/img/landing_page_web3.png' ?? '/img/landing_page_web3.png'),
              }}
            />
              <div className="col margin-bottom--lg">
              <h3>Get Started</h3>
              <div className="row">
                <h4>Test something with basic header</h4>

                <ul>{links}</ul>
              </div>
            </div>
            
          </div>
          <div className="col">
            <ThemedImage
              alt="web3"
              className={styles.featureSvg}
              
              sources={{
                light: useBaseUrl('/img/tiles.png'),
                dark: useBaseUrl('/img/landing_page_web3.png' ?? '/img/landing_page_web3.png'),
              }}
            />
              <div className="col margin-bottom--lg">
              <h3>Get Started</h3>
              <div className="row">
                <h4>Test something with basic header</h4>

                <ul>{links}</ul>
              </div>
            </div>
            
          </div>

          
            
        </div>
      </div>
    </section>
  );
}
