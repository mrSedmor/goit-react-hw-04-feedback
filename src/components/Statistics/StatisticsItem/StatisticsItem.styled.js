import styled from 'styled-components';

export const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;
`;

export const Label = styled.span`
  position: relative;
  display: flex;
  justify-content: right;
  text-align: right;
  align-items: center;
  ::after {
    content: ':';
    position: absolute;
    right: -0.3em;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Value = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
`;
