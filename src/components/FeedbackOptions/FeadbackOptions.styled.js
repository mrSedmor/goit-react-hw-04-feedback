import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  min-width: 100px;

  font-size: 16px;
  line-height: 1.3;
  text-align: center;

  border: none;
  background: #f4f4f4;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15),
    inset -2px -2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding-left: 0;
`;
