import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Tasks from "../components/Tasks";
const client = new ApolloClient({
  uri: "http://0.0.0.0:8001/graphql/"
});

const Page3 = () => (
  <ApolloProvider client={client}>
    <Layout>
      <SEO title="Tasks" />
      <h1>Tasks List</h1>
      <Tasks />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </ApolloProvider>
)

export default Page3
