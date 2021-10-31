import Statistics from './Statistics';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatisticsSection({ items, title, options }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.stat_list}>
        {items.map(item => {
          return (
            <li className={styles.item} key={item.id}>
              <Statistics label={item.label} percentage={item.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

StatisticsSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StatisticsSection;
