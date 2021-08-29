import PropTypes from 'prop-types';
import Statistics from './Statistics';
import Title from './Title';

import s from './Statistics.module.css';
import { div } from 'prelude-ls';

console.log(Statistics);

function StatsList({ title, items }) {
  return (
    <>
      <Title title={title} />
      <ul className={s.statList}>
        {items.map(item => (
          <li key={item.id} className={s.item}>
            <Statistics label={item.label} percent={item.percentage} />
          </li>
        ))}
      </ul>
    </>
  );
}

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatsList;
