import React from "react"
import { Container } from 'react-bootstrap';

import Navbar from "./navbar"
import Footer from "./footer"

export default ({ children }) => (
  <Container>
    <Navbar />
      { children }
    <Footer />
  </Container>
)