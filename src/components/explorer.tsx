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
            <a href="/stacks-blockchain-api/introduction">Explorer</a>{' '}
              <div className="row">
                <h4>Stacks blockchain API allows you to query the Stacks blockchain and interact with smart contracts</h4>
            </div>
          </div>
      </div>
        <div className="row">
          <div className="col">
            <div className="col margin-bottom--lg">
            <a href="/stacks-blockchain-api/introduction">Getting Started</a>{' '}
              <div className="row">
                <h4>Stacks blockchain API allows you to query the Stacks blockchain and interact with smart contracts</h4>

              </div>
            </div>
          </div>
          <div className="col">
    
              <div className="col margin-bottom--lg">
              <a href="/clarinet/introduction">Feature Guides</a>{' '}
              <div className="row">
                <h4>Clarinet is a command line tool for Clarity smart contract development.</h4>
              </div>
            </div>
            
          </div>
          <div className="col">
           
              <div className="col margin-bottom--lg">
              <a href="/stacks.js/introduction">TroubleShooting</a>{' '}
              <div className="row">
                <h4>Stacks.js is an SDK with a collection of JavaScript libraries to interact with and transact on Stacks blockchain.</h4>
              </div>
            </div>
            
          </div>

        </div>
       
      </div>
    </section>
  );
}
