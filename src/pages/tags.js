import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Tags extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const tagsMap={};
    const allTags=[];
    posts.forEach(post => {
      const tags = post.node.frontmatter.tags;
      tags&&tags.forEach(tag => {
        tagsMap[tag] = tagsMap[tag] ? tagsMap[tag]+1:1
      })
      
    });
    for (const key in tagsMap) {
      allTags.push({name:key,num:tagsMap[key]})
    }
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
                    标签 · <span style={{
                      fontSize:`0.6em`,
                      color:`#555`
                    }}>Tags</span>
                </h2>
              </header>
              <section>
                {
                  allTags.map(tag=>{
                    return <Link className="tags" key={tag.name} style={{fontSize:(1+tag.num*0.1)+'em',marginRight:'30px',}} to={'/tag/'+tag.name}>{tag.name}({tag.num})</Link>
                  })
                }
              </section>
            </article>
      </Layout>
    )
  }
}

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
