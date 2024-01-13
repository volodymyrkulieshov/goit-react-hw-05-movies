import styled from 'styled-components';
const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 16px;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  color: #111111;
  list-style: none;
`;

const MovieItem = styled.li`
  a {
    color: #111111;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  width: 200px;
  height: 340px;
  border-radius: 15px;

  :hover {
    scale: 1.05;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;
export { MoviesList, MovieItem, Card, Img };
