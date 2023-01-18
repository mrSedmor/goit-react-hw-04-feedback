import PropTypes from 'prop-types';
import { Item, Label, Value } from './StatisticsItem.styled';

const StatisticsItem = ({ label, value }) => (
  <Item>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </Item>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StatisticsItem;
