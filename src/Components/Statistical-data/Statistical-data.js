import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistical-data.module.css';

const StatisticalData = ({ props, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className={styles.stats__list}>
        {props.map(item => {
          return (
            <li className={styles.stats__item} key={item.id}>
              <span className={styles.stats__label}>{item.label}</span>
              <span className={styles.stats__percentage}>
                {item.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

StatisticalData.defaultProps = {
  title: '',
};
StatisticalData.propTypes = {
  title: propTypes.string,
};

export default StatisticalData;
