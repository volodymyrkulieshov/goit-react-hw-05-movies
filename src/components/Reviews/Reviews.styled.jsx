import styled from 'styled-components';

const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0;
  margin-top: 20px;
`;

const ReviewsItem = styled.li`
  font-size: 14px;
  padding: 6px;
  border-radius: 15px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    font-weight: 600;
    color: rgb(32, 12, 51);
  }
`;

export { ReviewsList, ReviewsItem };
