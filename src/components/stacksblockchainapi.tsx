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
            <img className="stacks-style" src = "/img/stacks-blockchain-api.png"/>
            <a href="/stacks-blockchain-api/introduction">Stacks Blockchain API</a>{' '}
              <div className="row">
                <h4>Stacks blockchain API allows you to query the Stacks blockchain and interact with smart contracts</h4>
            </div>
          </div>
      </div>
        <div className="row">
          <div className="col">
            <div className="col-margin-bottom--lg">
            <a href="/stacks-blockchain-api/introduction">Getting Started</a>{' '}
              <div className="row">
                <h4>Get started interacting with the blockchain </h4>

              </div>
            </div>
          </div>
          <div className="col">
    
            <div className="col-margin-bottom--lg">
              <a href="/stacks-blockchain-api/feature-guides/microblocks">Feature Guides</a>{' '}
              <div className="row">
                <h4>Explore Stacks Blockchain API features</h4>
              </div>
            </div>
            
          </div>
          <div className="col">
           
            <div className="col-margin-bottom--lg">
              <a href="/stacks.js/introduction">TroubleShooting</a>{' '}
              <div className="row">
                <h4>Explore our troubleshooting guide to unblock youself</h4>
              </div>
            </div>
            
          </div>

        </div>
       
      </div>
    </section>
  );
}
