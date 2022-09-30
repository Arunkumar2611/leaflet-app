import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <section>
      <Link to="/">Home</Link>
      <Link to="/mapview">Map View</Link>
      <Link to="/tableview">Table View</Link>
    </section>
  </nav>
)

export default Navbar