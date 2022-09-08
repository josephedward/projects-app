import React, { Component } from "react";
import API from "../api/hello";
import { Col, Row, Container } from "../components/Grid";
import { List } from "semantic-ui-react";
import PFrame from "../components/PFrame/PFrame.js";
import testProjects from "../test/projects.json";

class Projects extends Component {
  state = {
    projects: [],
    title: "",
    contributors: "",
    description: "",
  };

  componentDidMount() {
    this.loadprojects();
  }

  loadprojects = () => {
    process.env.NODE_ENV === "development" ? (
      this.setState({ projects: testProjects })
    ):(
      API.getrepos()
        .then((res) =>
          this.setState({
            projects: res.data,
            title: "",
            contributors: "",
            description: "",
          })
        )
        .catch((err) => {
          console.log(err);
          this.testProjects();
        })
        )
  };

  testProjects() {
    this.setState({
      projects: testProjects,
    });
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="lg">
              {this.state.projects.length ? (
                <List>
                  {this.state.projects.map((project) => (
                    <PFrame
                      key={project.id}
                      title={project.title}
                      name={project.name}
                      html_url={project.html_url}
                      homepage={project.homepage}
                      description={project.description}
                    />
                  ))}
                </List>
              ) : (
                <h3 style={{ background: "white" }}>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
