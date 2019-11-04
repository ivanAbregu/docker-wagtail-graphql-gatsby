import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPag = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi  </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/tasks/">Go to Tasks List</Link>
  </Layout>
)

export default IndexPag
