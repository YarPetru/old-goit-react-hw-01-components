import PropTypes from 'prop-types';
// import stats from './statistical-data.json';

import s from './Statistics.module.css';

function Statistics({ label, percent }) {
  return (
    <div className={s.dataItem}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}> {percent}%</span>
    </div>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percent: PropTypes.number,
};

export default Statistics;
// <section className={s.statistics}>
//   <ul className={s.statList}>
//     {stats.map(stat => (
//       <li key={stat.key} className={s.item}>
//         <span className={s.label}>{stat.label}</span>
//         <span className={s.percentage}> {stat.percentage}</span>
//       </li>
//     ))}
//   </ul>
// </section>;

// <section className={s.statistics}>
//   <ul className={s.statList}>
//     <li key={key} className={s.item}>
//       <span className={s.label}>{label}</span>
//       <span className={s.percentage}> {percent}</span>
//     </li>
//   </ul>
// </section>;
