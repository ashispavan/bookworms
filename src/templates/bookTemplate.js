import React from 'react';
import Layout from '../components/layout';
import BookItem from '../components/BookItem';

const BookTemplate = (props) => {
  return (
    <Layout>
      <BookItem
        bookCover={props.pageContext.localImage.publicURL} 
        bookSummary={props.pageContext.summary}
        bookTitle={props.pageContext.title}
        authorName={props.pageContext.author.name}
      >
      </BookItem>
    </Layout>
  );
};


export default BookTemplate;