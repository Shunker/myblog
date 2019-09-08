/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/by-nc-sa.png/" }) {
        childImageSharp {
          fixed(width: 176, height: 62) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)


  return (
    <div
      style={{
        marginBottom: rhythm(2.5),
        textAlign:`center`
      }}
    >
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt = "知识共享许可协议"
        style={{borderWidth:`0`}}
      /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。

    </div>
  )
}

export default Bio
