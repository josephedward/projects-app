import React, { Component } from "react";
// import API from "../utils/API";
import API from "../api/hello";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
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
    // console.log(process.env)
    if (process.env.NODE_ENV === "development") {
      this.setState({
        projects: testProjects,
      });
    } else {
      API.get()
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
    }
  };

  

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="lg">
              <h3
                style={{
                  background: "black",
                  color: "white",
                }}
              >
                Visit deployment URL and disable mixed-content blocking for full
                functionality.
              </h3>
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
