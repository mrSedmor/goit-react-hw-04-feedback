import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 0.6em;
`;

export const Text = styled.span`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    left: -1em;
    right: -1em;
    bottom: -0.3em;
    height: 1px;
    background-color: currentColor;
  }
`;
