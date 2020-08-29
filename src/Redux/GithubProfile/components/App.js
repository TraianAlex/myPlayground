import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap"; // Button, FormGroup, FormLabel, FormControl,
import SliderComponent from "../containers/Slider";
import Profile from "../containers/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "profile",
    };
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand
            href="#home"
            onClick={() => this.setState({ currentTab: "slider" })}
          >
            My Github Profile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="#deets"
                onClick={() => this.setState({ currentTab: "slider" })}
              >
                Slider
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                onClick={() => this.setState({ currentTab: "profile" })}
              >
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {this.state.currentTab === "slider" ? <SliderComponent /> : false}
          {this.state.currentTab === "profile" ? <Profile /> : false}
        </div>
      </div>
    );
  }
}
