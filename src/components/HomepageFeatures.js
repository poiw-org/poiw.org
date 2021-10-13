import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Ένας χώρος εκώλαψης ιδεών.',
    src: require('../../static/img/light-bulb.png').default,
    description: (
      <>

Το εργαστήριο του po/iw είναι ένας ανοικτός χώρος που μπορεί κάθε άτομο να υλοποιήσει κάποια ιδέα που έχει, χρησιμοποιώντας τα αναλώσιμα και τον εξοπλισμό που παρέχονται.
      </>
    ),
  },
  {
    title: 'Ρώτησε, πρότεινε, δράσε.',
    src: require('../../static/img/chat.png').default,
    description: (
      <>
        Στοχεύουμε για ένα ποιοτικό περιβάλλον διά βίου μάθησης, όπου οι φοιτητές και φοιτήτριες μέλη ανταλλάσσουν ιδέες &amp; απορίες.
      </>
    ),
  },
  {
    title: 'Εξωστρέφεια και πολιτισμός.',
    src: require('../../static/img/3d.png').default,
    description: (
      <>
        Κάτω από την ομπρέλα του po/iw υπάγονται projects και εκδηλώσεις που στόχο έχουν την διάδοση της κουλτούρας του ανοικτού και ελεύθερου λογισμικού και υλισμικού.
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} style={{
          maxWidth: "100px",
          margin: "10px",
          height: "auto"
        }} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
