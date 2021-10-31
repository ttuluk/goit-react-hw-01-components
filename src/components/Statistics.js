import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ label, percentage }) => {
  return (
    <div className={styles.color}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}> {percentage}%</span>
    </div>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
