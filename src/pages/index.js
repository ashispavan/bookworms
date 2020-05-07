import React from "react"
import { Lin, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const { allBook } = props.data;
  return (
  <Layout>
    {allBook.edges.map(edge => {
      return (
        <div key={edge.node.id}>
          <h2>
            {edge.node.title} - <small>{edge.node.author.name}</small>
          </h2>
          <div>
            {edge.node.summary}
          </div>
        </div>
      )
    })}
  </Layout>
)
}

export const query = graphql`
{
  allBook {
    edges {
      node {
        title
        summary
        author {
          name
        }
      }
    }
  }
}
`

export default IndexPage
