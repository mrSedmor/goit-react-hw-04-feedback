import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeadbackOptions.styled';

const FeadbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map(option => (
      <li key={option}>
        <Button type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      </li>
    ))}
  </ButtonList>
);

FeadbackOptions.defaultProps = {
  options: [],
};

FeadbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeadbackOptions;
