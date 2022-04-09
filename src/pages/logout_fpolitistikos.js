import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LogoutFpolitistikos() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
        <p style={{"padding": "20px", textAlign: "center"}}> <h1>Αποσυνδέθηκες επιτυχώς.</h1> <a href="/docs/portfolio/fpolitistikos/">Πάτα εδώ για να δεις όλες τις υπηρεσίες του Συλλόγου.</a></p>
    </Layout>
  );
}
