import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Archives extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const dateMap={};
    posts.forEach(post => {
      const date = post.node.frontmatter.date.slice(0,4);
      if (dateMap[date]) {
        dateMap[date].push(post.node)
      } else {
        dateMap[date] = [post.node]
      }
    });

    const archives = Object.keys(dateMap).sort((a, b) => b - a);
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="标签" />
        < article
            className = "post"
            style = {
              {
                marginBottom: rhythm(1),
              }
            } >
              <header className="post-header">
                <h2 className="post-title"
                >
                    归档 · <span style={{
                      fontSize:`0.6em`,
                      color:`#555`
                    }}>Archives</span>
                </h2>
              </header>
              <section>
                {
                  /* allTags.map(tag=>{
                    return <Link className="tag" key={tag.name} style={{fontSize:(1+tag.num*0.1)+'em',marginRight:'20px',}} to={'/tag/'+tag.name}>{tag.name}({tag.num})</Link>
                  }) */
                  archives.map(item => {
                    return <div key={item}>
                      <h3>{item}</h3>
                      <ul>
                        {
                          dateMap[item].map(post=>{
                            return <li key={post.id} style={{
                            display:`flex`,
                            justifyContent:`space-between`,
                            borderBottom:`1px solid #ccc`,
                            lineHeight:`3em`
                          }}>
                            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                            <p>
                              {
                                post.frontmatter.tags&&post.frontmatter.tags.map((tag, index) => {
                                  return <span key={tag+index}>
                                  <Link to={'/tag/'+tag}>{tag}</Link>
                                  {index<post.frontmatter.tags.length-1?`, `:``}
                                  </span>
                                })
                              }
                            </p>
                            <span>{post.frontmatter.date}</span>
                          </li>
                          })
                        }
                      </ul>
                    </div>
                  })
                }
              </section>
            </article>
      </Layout>
    )
  }
}

export default Archives

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
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
          }
        }
      }
    }
  }
`
