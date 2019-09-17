import React from "react"
import { Container } from 'react-bootstrap';

import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <Container>
    <Header />
      { children }
    <Footer />
  </Container>
)