import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';


const IndexPage = (props) => {
	const { allBook } = props.data;
	return (
		<Layout>
			{allBook.edges.map(edge => {
				console.log(edge);
				return (
					<div key={edge.node.id}>
						<h2>
							{edge.node.title} - <small>{edge.node.author.name}</small>
						</h2>
						<div>
							{edge.node.summary}
						</div>
						<Link to={`/book/${edge.node.id}`}  >
            Join Conversion
						</Link>
					</div>
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
        author {
          name
        }
      }
    }
  }
}
`;

export default IndexPage;
