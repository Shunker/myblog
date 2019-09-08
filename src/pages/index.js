import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="首页" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            < article key = {
              node.fields.slug
            }
            className = "post"
            style = {
              {
                marginBottom: rhythm(1),
              }
            } >
              <header className="post-header">
                <h2 className="post-title"
                >
                  <Link className="line" to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <div className="post-meta">
                <span style={{marginRight:`10px`}}>{node.frontmatter.date}</span>
              {
                node.frontmatter.tags && node.frontmatter.tags.map((tag,index)=>{
                  return <span key={tag}>
                    <Link to={'/tag/'+tag}>{tag}</Link>
                    {index<node.frontmatter.tags.length-1?`, `:``}
                  </span>
                })
              }
                </div>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(format: HTML)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
          }
        }
      }
    }
  }
`
