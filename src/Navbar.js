import { Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
  <Nav className="">
  <div className="container">
    <NavDropdown title="Components" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"><Link to={'/components/renderer'}>Form Renderer</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"><Link to={'/components/builder'}>Form Builder</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
  </div>
</Nav>)
}

export default Navbar