import React from "react"
import {
  Link,
  graphql
} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tag = ({
    pageContext,
    data,
    location
  }) => {
  const siteTitle = data.site.siteMetadata.title
  const currentTag=pageContext.tag;
  const {
    edges
  } = data.allMarkdownRemark
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
          title={currentTag}
        />
      <section className="post">
        <header className="post-header">
            <h2 className="post-title">
              标签 · <span style={{
                      fontSize:`0.6em`,
                      color:`#555`
                    }}>Tag</span>
            </h2>
            <div># {currentTag}</div>
          </header>
        <section>
          <ul >
      {
        edges.map(edge=>{
          return <li key={edge.node.id} style={{
            display:`flex`,
            justifyContent:`space-between`,
            borderBottom:`1px solid #ccc`,
            lineHeight:`3em`
          }}>
            <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
            <p>
              {
                edge.node.frontmatter.tags.map((tag,index)=>{
                  return <span key={tag+index}>
                  <Link style={{color:tag===currentTag?`#000`:``}} to={'/tag/'+tag}>{tag}</Link>
                  {index<edge.node.frontmatter.tags.length-1?`, `:``}
                  </span>
                })
              }
            </p>
            <span>{edge.node.frontmatter.date}</span>
          </li>
        })
      }
    </ul>
        </section>
      </section>
    </Layout>
  )
}

export default Tag

export const pageQuery= graphql`
query BlogTag($tag: String!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(filter: {
    frontmatter: {
      tags: {
        eq: $tag
      }
    }
  }) {
    edges {
      node {
        frontmatter {
          date
          title
          tags
        }
        id
        fields {
          slug
        }
      }
    }
  }
}
`