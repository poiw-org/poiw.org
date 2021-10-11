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
        <p className="hero__subtitle">~ hackerspace &amp; dev community</p>
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
            Τιναφτο;
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
      title={`po/iw ~ hackerspace & dev community`}
      description="Το po/iw (ποιώ) είναι ένα hackerspace/κοινότητα προγραμματιστών στο Ηράκλειο Κρήτης. Σκοπό έχει να δημιουργήσει ένα περιβάλλον (φυσικό και πνευματικό) με όλα τα απαραίτητα εργαλεία, εξοπλισμό και βοήθεια από τα άλλα μέλη για όποιον/α θέλει να έρθει και να δημιουργήσει ή να χακάρει κάτι 👾!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
