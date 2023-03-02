
import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HomepageBanner.module.css';

export default function HomepageBanner(): JSX.Element {
  return (
    <section className={styles.banner}>
      <div className="container padding-horiz--lg">
      <div className="row">

            <div className="col margin-bottom--lg">
            <img className="clarinet-style" src='/img/clarinet_icon.png'/>
            <a href="//clarinet/introduction">Clarinet</a>{' '}
              <div className="row">
                <h4>Clarinet is a command line tool for Clarity smart contract development that provides a CLI package with a clarity runtime, a console, and a testing harness.</h4>
            </div>
          </div>
      </div>
        <div className="row">
          <div className="col">
            <div className="col-margin-bottom--lg">
            <a href="clarinet/getting-started">Getting Started</a>{' '}
              <div className="row">
                <h4>Get started to install and build with Clarinet</h4>

              </div>
            </div>
          </div>
          <div className="col">
    
              <div className="col-margin-bottom--lg">
              <a href="/clarinet/feature-guides/analyze-with-check-checker">Feature Guides</a>{' '}
              <div className="row">
                <h4>Explore the features of Clarinet</h4>
              </div>
            </div>
            
          </div>
          <div className="col">
           
              <div className="col-margin-bottom--lg">
              <a href="/stacks.js/introduction">Troubleshooting</a>{' '}
              <div className="row">
                <h4>Explore our troubleshooting guide to unblock youself </h4>
              </div>
            </div>
            
          </div>

        </div>
       
      </div>
    </section>
  );
}
