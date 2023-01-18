import PropTypes from 'prop-types';
import { Title, Text, Wrapper } from './Section.styled';

const Section = ({ title, children }) => (
  <Wrapper>
    <Title>
      <Text>{title}</Text>
    </Title>
    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
