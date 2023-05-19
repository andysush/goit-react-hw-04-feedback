import PropTypes from 'prop-types';
import css from './Statistic.module.css';
export const Statistics = ({ good, neutral, bad, total, precentage }) => (
  <div>
    <ul className={css.statisstic__list}>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>good:</span> {good}
      </li>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>neutral:</span> {neutral}
      </li>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>bad:</span> {bad}
      </li>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>total feedbacks:</span> {total}
      </li>
      <li className={css.statisstic__item}>
        <span className={css.statistic__text}>
          total percentage of good feedbacks:
        </span>
        {precentage}%
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  precentage: PropTypes.number.isRequired,
};
