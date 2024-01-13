import styled from 'styled-components';

const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  padding-right: 24px;
  padding-left: 0px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;

  background-color: teal;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  font-size: 30px;
`;

const HeaderItem = styled.li`
  text-decoration: none;
  color: white;

  :hover {
    color: white;
  }
`;
export { HeaderContainer, HeaderList, HeaderItem };
