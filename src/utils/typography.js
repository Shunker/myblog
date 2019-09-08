import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "html":{
      fontSize: `18px`
    },
    "body":{
      background: `#fefefe`,
      fontFamily: `source sans pro,helvetica neue,Arial,sans-serif`,
      lineHeight: `1.8`,
      color: `rgba(0,0,0,.84)`,
    },
    "h1,h2,h3,h4,h5,h6":{
      marginBottom: `0!important`,
      marginTop:`0!important`,
      lineHeight:`1.8`,
      fontFamily: `Athelas,STHeiti,Microsoft Yahei,serif`,
    },
    "h2":{
      fontSize:`1.6em`,
    },
    "h3": {
      fontSize: `1.4em`,
    },
    "h4": {
      fontSize: `1.2em`,
    },
    "blockquote":{
      padding:`2em 1.4em 1em`,
      background: `#f6f6f6`,
      position:`relative`,
      fontStyle: `normal`,
      color: `#555`,
      fontSize:'1rem',
      marginRight:`0`,
    },
    "blockquote::before":{
    fontFamily: `Arial`,
    content: `"\u201c"`,
    color: `#999`,
    fontSize: `4em`,
    position: `absolute`,
    left: `10px`,
    top: `26px`,
    },
    "ul":{
      marginBottom:`0`
    },
    "li": {
      marginBottom: `0`
    },
    "a": {
      color: `#000`,
      textDecoration:`none`,
      boxShadow:`0`
    },
    ".post  a,.toc a":{
      color: `#007acc`
    },
    "header nav .active":{
      background:`#000`,
      color:`#fff`,
      boxSizing:`border-box`,
      //padding:`5px 10px`
    },
    "header nav .active a": {
      color: `#fff`,
    },
    "nav li":{
      listStyle: 'none',
      lineHeight: '70px',
      fontSize:`22px`,
      fontFamily: `Microsoft YaHei`,
      padding: `0 20px`
    },
    "nav li a,.toc li a,.line": {
      color:`rgba(0,0,0,.85)`,
      position:'relative'
    },
    "nav li a::after,.toc li a::after,.line::after": {
      content: `''`,
    position: `absolute`,
    zIndex: `-1`,
    height: `2px`,
    bottom: `-2px`,
    left: `51%`,
    right: `51%`,
    background: `#c05b4d`,
    transitionDuration: `.2s`,
    transitionProperty: `right,left`,
    transitionTimingFunction: `ease-out`,
    },
    "nav li a:hover::after,.toc li a:hover::after,.line:hover::after": {
      left:`0`,
      right:`0`
    },
    ".post":{
      padding: `3em 5em`,
      margin: `0 5em 3em`,
      background: `#fff`,
      boxShadow: `0 0 4px 0 #ccc`
    },
    ".post-header": {
      marginBottom: `20px`,
      textAlign: `center`,
      paddingBottom: `10px`,
      borderBottom: `2px LightGrey solid`,
    },
    ".post-title":{
      fontSize: `1.8em`,
      fontWeight: `400`,
      fontFamily: `Athelas,STHeiti,Microsoft Yahei,serif`,
    },
    ".post-title a": {
      color: `rgba(0,0,0,.85)`
    },
    ".post-meta":{
      fontSize: `14px`,
      color: `#8a8a8a`,
    },
    ".toc":{
      position:`fixed`,
      top:'20%',
      right:`20px`,
      //boxShadow: `rgb(204, 204, 204) 0 0 4px 0`,
      //background: `#fff`,
      padding:`10px 20px`,
      width:`200px`,
      overflow:`auto`,
      whiteSpace:`nowrap`
    },
    ".toc li":{
      listStyle:`none`,
    },
    ".toc li>ul": {
      marginTop:`0`,
    },
    ".toc li>p,.post li>p": {
      marginBottom: `0`,
    },
    ".post section .tags":{
      transform: `scale(1.2)`,
      transitionProperty: `transform`,
      transitionDuration:`0.5s`
    },
    ".post section .tags:hover":{
      display:`inline-block`,   
    },
    "@media screen and (max-width: 1200px)":{
      ".toc":{
        display:`none`,
      }
    },
    "@media screen and (max-width: 800px)": {
      ".post": {
        padding: `3em 5em`,
        margin: `0 2em 3em`,
      },
    },
    "@media screen and (max-width: 600px)": {
      ".post": {
        padding: `3em 1em`,
        margin: `0 0 3em`,
        boxShadow:`none`,
      },
      "main":{
        padding:`0!important`
      },
      "header":{
        boxShadow:`none!important`
      },
      "header nav li":{
        padding:`4px`
      }
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    ".gatsby-highlight pre[class*='language-']": {
      border: 0,
      //padding: `${space[6]} 0`,
      WebkitOverflowScrolling: `touch`,
      position: `relative`,
    },
    ".gatsby-highlight pre[class*='language-']::before": {
      background: `#ddd`,
      //borderRadius: `0 0 ${radii[2]}px ${radii[2]}px`,
      color: `#000`,
      fontSize: "12px",
      //fontFamily: fonts.monospace.join(`,`),
      //letterSpacing: letterSpacings.tracked,
      //lineHeight: lineHeights.solid,
      padding: `2px 6px`,
      position: `absolute`,
      //left: space[6],
      textAlign: `right`,
      textTransform: `uppercase`,
      top: `0`,
      right: `0`,
    },
    ".gatsby-highlight pre[class='language-javascript']::before": {
      content: `'js'`,
      background: `#f7df1e`,
    },
    ".gatsby-highlight pre[class='language-js']::before": {
      content: `'js'`,
      background: `#f7df1e`,
    },
    ".gatsby-highlight pre[class='language-jsx']::before": {
      content: `'jsx'`,
      background: `#61dafb`,
    },
    ".gatsby-highlight pre[class='language-graphql']::before": {
      content: `'GraphQL'`,
      background: `#E10098`,
      color: `white`,
    },
    ".gatsby-highlight pre[class='language-html']::before": {
      content: `'html'`,
      background: `#005A9C`,
      color: `white`,
    },
    ".gatsby-highlight pre[class='language-css']::before": {
      content: `'css'`,
      background: `#ff9800`,
      color: `white`,
    },
    ".gatsby-highlight pre[class='language-mdx']::before": {
      content: `'mdx'`,
      background: `#f9ac00`,
      color: `white`,
      fontWeight: `400`,
    },
    ".gatsby-highlight pre[class='language-shell']::before": {
      content: `'shell'`,
    },
    ".gatsby-highlight pre[class='language-sh']::before": {
      content: `'sh'`,
    },
    ".gatsby-highlight pre[class='language-bash']::before": {
      content: `'bash'`,
    },
    ".gatsby-highlight pre[class='language-yaml']::before": {
      content: `'yaml'`,
      background: `#ffa8df`,
    },
    ".gatsby-highlight pre[class='language-markdown']::before": {
      content: `'md'`,
    },
    ".gatsby-highlight pre[class='language-json']::before, .gatsby-highlight pre[class='language-json5']::before": {
      content: `'json'`,
      background: `linen`,
    },
    ".gatsby-highlight pre[class='language-diff']::before": {
      content: `'diff'`,
      background: `#e6ffed`,
    },
    ".gatsby-highlight pre[class='language-text']::before": {
      content: `'text'`,
      background: `white`,
    },
    ".gatsby-highlight pre[class='language-flow']::before": {
      content: `'flow'`,
      background: `#E8BD36`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
