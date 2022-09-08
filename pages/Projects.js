import React, { Component } from "react";
// import API from "../utils/API";
import API from "../api/hello";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";
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
    try {
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
        });
    } catch (error) {
      console.log(error);
      this.setState({
        projects: testProjects,
      });
    }
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="lg">
              <h1>Projects</h1>
              {this.state.projects.length ? (
                <List>
                  {this.state.projects.map((project) => (
                    <PFrame
                      key={project.id}
                      className="shape"
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
