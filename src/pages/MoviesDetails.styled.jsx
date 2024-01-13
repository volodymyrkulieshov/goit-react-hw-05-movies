import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  padding: 13px 23px;
  width: auto;
`;
const LinkBackBtn = styled(Link)`
  text-decoration: none;
  :hover {
    color: white;
    background-color: teal;
  }
`;

const MoviesDetailContainer = styled.div`
  display: flex;
  gap: 25px;
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px;
`;

const AdditionalTitle = styled.h3`
  font-size: 32px;
`;

const AdditionalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const AdditionalItem = styled.li`
  margin-bottom: 10px;
  a {
    color: rgb(32, 12, 51);
    border: 2px solid black;
    border-radius: 8px;
    padding: 5px;
    margin-bottom: 10px;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    background-color: transparent;
  }

  :active,
  :hover,
  :focus {
    color: white;
    background-color: teal;
  }
`;
export {
  Button,
  LinkBackBtn,
  MoviesDetailContainer,
  AdditionalTitle,
  AdditionalItem,
  AdditionalList,
};
