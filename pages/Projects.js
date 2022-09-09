import React, { Component, useEffect, useState } from "react";
import API from "../api/hello";
import { Col, Row, Container } from "../components/Grid";
import PFrame from "../components/PFrame/PFrame.js";
import testProjects from "../test/projects.json";
import { List, Dimmer, Loader, Image, Segment } from "semantic-ui-react";

// console.log(process.env.NODE_ENV);
// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   // dev code
// } else {
//   // production code
//   function noop() {}
//   const savedFunctions = Object.keys(console).reduce((memo, key) => {
//     if (typeof console[key] == "function") {
//       //keep a copy just in case we need it
//       memo[key] = console[key];
//       //de-fang any functions
//       console[key] = noop;
//     }
//     return memo;
//   }, {});

//   function logTest() {
//     console.log("log");
//     console.info("info");
//     console.warn("warn");
//     console.error("error");
//     savedFunctions.log("logging from saved function");
//   }

//   logTest();
// }

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    API.getrepos()
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Error loading data");
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        // justifyContent: "center",
      }}
    >
      {loading ? (
        <Dimmer active>
          <Loader size="massive" inverted indeterminate>
            Preparing Projects
          </Loader>
        </Dimmer>
      ) : error ? (
        <div>{errorMessage}</div>
      ) : (
        <List>
          {projects
            ? projects.map((project) => (
                <PFrame
                  key={project.id}
                  title={project.title}
                  name={project.name}
                  html_url={project.html_url}
                  homepage={project.homepage}
                  description={project.description}
                />
              ))
            : testProjects.map((project) => (
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
      )}
    </div>
  );
}
