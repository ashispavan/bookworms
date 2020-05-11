import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import BookItem from '../components/BookItem';
import styled from 'styled-components';

const LinkButton = styled.div`
  text-align: right;
  a {
    padding: 8px;
    background: rebeccapurple;
    text-decoration: none;
    border-radius: 5px;
    color: white;

    &:hover {
      background: indigo;
    }
  }
`;


const IndexPage = (props) => {
  const { allBook } = props.data;
  return (
    <Layout>
      {allBook.edges.map(edge => {
        return (
          <BookItem 
            key={edge.node.id}
            bookCover={edge.node.localImage.childImageSharp.fixed} 
            bookTitle={edge.node.title}
            bookSummary={edge.node.summary}
            authorName={edge.node.author.name}
          >
            <LinkButton>
              <Link to={`/book/${edge.node.id}`}  >
            Join Conversion
              </Link>
            </LinkButton>
          </BookItem>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
{
  allBook {
    edges {
      node {
        id
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
  }
}
`;

export default IndexPage;
