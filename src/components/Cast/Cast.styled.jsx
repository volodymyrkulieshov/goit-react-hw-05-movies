import styled from 'styled-components';
const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

const CastItem = styled.li`
  max-width: min-content;
  list-style: none;
  border-radius: 10px;
  padding: 8px;

  img:hover {
    scale: 1.05;
  }

  span {
    font-weight: 600;
    color: rgb(32, 12, 51);
  }
`;

export { CastList, CastItem };
