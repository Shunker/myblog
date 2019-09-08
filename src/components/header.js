import React from "react"
import {
  Link
} from "gatsby"

const Header=({pathname})=>{
  const navs=[
    {
      name: '首页',
      path: '/',
      id: 1
    },
    {
      name: '归档',
      path: '/archives',
      id: 2
    },
    {
      name: '标签',
      path: '/tags',
      id: 3
    }
  ]
  return (
    < header style = {
      {
        background: `#fff`,
        boxShadow: `0px 0px 4px 0px #ccc`
      }
    } >
      < section style = {
        {
          margin: `0 auto`,
          maxWidth: `1080px`,
          display: `flex`,
          justifyContent: `space-between`,
          
        }
      } >
        <h1 style={{lineHeight:`70px`}}><Link to="/">
        <span style={{
          background:`#000`,
          color:`#fff`,
          padding:`0 5px`,
          marginRight:`5px`,
          borderRadius:`5px`
        }}>Node</span>Tree</Link></h1>
      <nav>
        <ul style={{display:`flex`}}>
          {
            navs.map(item=>{
              return < li key={item.id} className={item.path===pathname?`active`:``}> < Link  to={item.path}> {item.name} </Link> </li >
            })
          }
        </ul>
      </nav>
      </section>
    </header>
  )
}

export default Header;