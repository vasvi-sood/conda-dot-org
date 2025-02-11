import React from 'react';
import CondaCSVG from '@site/static/img/conda_c.svg';
import styles from './styles.module.css';

export default function Header() {
  return (
    <div className={[styles.header, styles.section_padding].join(' ')}>
      <div className={[styles.header_content, styles.header_content_image].join(' ')}>
        <h1 className={styles.gradient_text}><b>CONDA<br />COMMUNITY</b><br></br></h1>
        <p>
          A community supporting a language-agnostic, multi-platform package 
          management ecosystem for projects of any size and complexity.
        </p>
        <div className={styles.header_content_input}>
          <a className="button button--primary button--lg col" href="/community">Learn More</a>
        </div>
      </div>
      <div className={styles.header_image}>
        <CondaCSVG title="Conda Logo" width="100%"/>
      </div>
    </div>
  );
}
