import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import Notification from './Notification';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total > 0 ? (
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
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
