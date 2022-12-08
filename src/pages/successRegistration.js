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
        <p style={{"padding": "20px", textAlign: "center"}}> <h1>Ο λογαριασμός σου δημιουργήθηκε με επιτυχία!</h1></p>
    </Layout>
  );
}
