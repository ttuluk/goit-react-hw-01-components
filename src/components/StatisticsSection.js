import Statistics from './Statistics';
import PropTypes from 'prop-types';

function StatisticsSection({ items, title }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {items.map(item => {
          return (
            <li className="item" key={item.id}>
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
