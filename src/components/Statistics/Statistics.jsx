import PropTypes from 'prop-types';
import { StatList, StatItem, Text } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, precentage }) => (
  <div>
    <StatList>
      <StatItem>
        <Text>good:</Text> {good}
      </StatItem>
      <StatItem>
        <Text>neutral:</Text> {neutral}
      </StatItem>
      <StatItem>
        <Text>bad:</Text> {bad}
      </StatItem>
      <StatItem>
        <Text>total feedbacks:</Text> {total}
      </StatItem>
      <StatItem>
        <Text>total percentage of good feedbacks:</Text>
        {precentage}%
      </StatItem>
    </StatList>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  precentage: PropTypes.number.isRequired,
};
