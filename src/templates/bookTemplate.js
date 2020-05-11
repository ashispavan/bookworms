import React from 'react';
import Layout from '../components/layout';
import BookItem from '../components/BookItem';
import {graphql} from 'gatsby';

const BookTemplate = (props) => {
  return (
    <Layout>
      <BookItem
        bookCover={props.data.book.localImage.childImageSharp.fixed} 
        bookSummary={props.data.book.summary}
        bookTitle={props.data.book.title}
        authorName={props.data.book.author.name}
      >
      </BookItem>
    </Layout>
  );
};

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: {eq: $bookId}) {
      title
      summary
      localImage {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        name
      }
    }
  }
`;

export default BookTemplate;