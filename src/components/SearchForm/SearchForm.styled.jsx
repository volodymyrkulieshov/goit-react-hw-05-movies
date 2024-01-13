import styled from 'styled-components';
const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border: 3px solid #191d1e;
  font-weight: 600;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 8px;
  outline: none;

  &:hover {
    color: teal;
    border: 3px solid teal;
  }
`;

const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    color: teal;
    border: 3px solid teal;
  }
`;

export { Form, Input, Button };
