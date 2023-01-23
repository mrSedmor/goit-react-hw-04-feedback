import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <List>
    <StatisticsItem label="Good" value={good} />
    <StatisticsItem label="Neutral" value={neutral} />
    <StatisticsItem label="Bad" value={bad} />
    <StatisticsItem label="Total" value={total} />
    <StatisticsItem
      label="Positive feedback"
      value={`${positivePercentage}%`}
    />
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
