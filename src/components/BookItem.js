import React from 'react';
import styled from 'styled-components';


const BookItemContainer = styled.section`
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 8px;
    display: flex;
    h2 {
        small {
            font-size: 18px;
            font-weight: normal;
            padding-left: 8px;
        }
    }
`;

const BookItemImageWrapper = styled.div`
    max-width: 200px;
    img {
        max-width: 200px;
    }
`;

const BookItemContentWrapper = styled.div`
    flex-grow: 1;
    padding-left: 8px;
`;

const BookItem = (props) => {
  const { bookTitle, bookSummary, authorName, bookCover, children } = props;
  return (
    <BookItemContainer>
      <BookItemImageWrapper>
        <img src={bookCover} alt="Book Cover"/>
      </BookItemImageWrapper>
      <BookItemContentWrapper>
        <h2>
          {bookTitle} - <small>{authorName}</small>        
        </h2>
        <p>
          {bookSummary}
        </p>
        <div>
          {children}
        </div>
      </BookItemContentWrapper>
    </BookItemContainer>
  );
};

export default BookItem;