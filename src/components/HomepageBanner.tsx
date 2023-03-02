import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HomepageBanner.module.css';
import StacksBlockchainAPI from './stacksblockchainapi';
import Clarinet from './clarinet';

function GetStarted(): JSX.Element {


  return (   <div className="row">
      <h3>Get Started</h3>
      <p>Test content</p> 
      <a href="/clarinet/introduction">Clarinet</a>{' '}
      <br></br>
    </div>
  );
}

const links=[<li><a className ="primary-links" href='/clarinet/how-to-guides/how-to-set-up-local-development-environment'>Hiro Platform</a></li>, 
<li><a className ="primary-links" href='https://hirosystems.github.io/stacks-blockchain-api/client/'>Stacks Blockchain API Client</a></li>,
<li><a className ="primary-links" href='/clarinet/how-to-guides/how-to-add-contract'>Creating a new project</a></li>, 
]

export default function HomepageBanner(): JSX.Element {
  return (
    <section className={styles.banner}>
      <div className="container padding-horiz--lg">
        <div className="row">
          <div className="col">
            <ThemedImage
              alt="web3"
              width="690px"
              height="263px"
              className={styles.featureSvg}
              sources={{
                light: useBaseUrl('/img/landing_page_web3.png'),
                dark: useBaseUrl('/img/landing_page_web3.png' ?? '/img/landing_page_web3.png'),
              }} 
            />
          </div>
          <div className="col margin-bottom--lg">
              <h3 className='font-style-quickstart'>Quickstart</h3>
              <div className="row">
                <h3 className='font-style-quickstarts'>Get started using with our following quickstarts.</h3>

                <ul>{links}</ul>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="col">
            <a href ="/stacks-blockchain-api/overview">
            <ThemedImage
              alt="web3"
              className={styles.featureSvg}
              sources={{
                light: useBaseUrl('/img/web3api.png'),
                dark: useBaseUrl('/img/web3api.png' ?? '/img/web3api.png'),
              }}
            />
            </a>
            <div className="api-overview">
              <a href="/stacks-blockchain-api/overview">Stacks Blockchain API?</a>{' '}
              <div className="row">
                <h4>Stacks blockchain API allows you to query the Stacks blockchain and interact with smart contracts</h4>

              </div>
            </div>
          </div>
          <div className="col">
            <ThemedImage
              alt="web3"
              className={styles.featureSvg}
              sources={{
                light: useBaseUrl('/img/sbtc.png'),
                dark: useBaseUrl('/img/sbtc.png' ?? '/img/sbtc.png'),
              }}
            />
              <div className="clarinet-overview">
              <a href="/clarinet/introduction">What is Clarinet?</a>{' '}
              <div className="row">
                <h4>Clarinet is a command line tool for Clarity smart contract development</h4>
              </div>
            </div>
            
          </div>
          <div className="col">
            <ThemedImage
              alt="web3"
              className={styles.featureSvg}
              
              sources={{
                light: useBaseUrl('/img/tiles.png'),
                dark: useBaseUrl('/img/tiles.png' ?? '/img/tiles.png'),
              }}
            />
              <div className="stacksjs-overview">
              <a href="/stacks.js/introduction">Stacks.js</a>{' '}
              <div className="row">
                <h4>Stacks.js is an SDK with a collection of JavaScript libraries to interact with and transact on Stacks blockchain.</h4>
              </div>
            </div>
            
          </div>

        </div>
        <div> <Clarinet /></div>
       <div> <StacksBlockchainAPI /></div>
      
      </div>
    </section>
  );
}
