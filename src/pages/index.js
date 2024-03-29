import HomepageFeatures from '../components/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondaty', styles.heroBanner)}>
      <div className="container">
        <img src={require('../../static/img/logo.png').default} style={{
          maxWidth: "150px"
        }}></img>
        <p className="hero__subtitle">~ student makerspace @ <a href="https://hmu.gr" target="_blank">hmu</a>.</p>
        <div className={styles.buttons}>
        <Link
            className="button button--primary button--lg"
            to="/docs/take-part/register">
            Πάρε μέρος
          </Link>

          <Link
            className="button button--secondary button--lg margin--10"
            to="/docs/intro"
            style={{
              marginLeft: "10px"
            }}
            >
            Τι φάση;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`po/iw ~ students makerspace @ hmu`}
      description="Το po/iw (ποιώ) είναι ένα makerspace στο Ηράκλειο Κρήτης. Σκοπό έχει να δημιουργήσει ένα περιβάλλον (φυσικό και πνευματικό) με όλα τα απαραίτητα εργαλεία, εξοπλισμό και βοήθεια από τα άλλα μέλη για όποιον/α θέλει να έρθει και να δημιουργήσει ή να χακάρει κάτι 👾!"
      >
        <div style={{
            backgroundImage: "url('/img/bench.webp')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            minHeight: "100vh",
          }}>
          <HomepageHeader />
          <main>
            <HomepageFeatures />
          </main>
        </div>

    </Layout>
  );
}
