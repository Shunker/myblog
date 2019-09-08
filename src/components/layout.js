import React from "react"
import Header from "./header"


class Layout extends React.Component {
  render() {
    const { children,location:{pathname} } = this.props
    //const rootPath = `${__PATH_PREFIX__}/`
    
    return (
      <>
      < Header pathname={pathname}/ >
      <div
        style={{
          maxWidth: `1080px`,
          margin:`0 auto`
        }}
      >
        <main style={{padding:`3em 0 1px`}}>{children}</main>
      </div>
        <footer style={{textAlign:`center`}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )
  }
}

export default Layout
