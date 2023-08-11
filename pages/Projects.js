import React, { useEffect, useState } from "react";
import API from "../api/hello";
import { Dimmer, Loader, List } from "semantic-ui-react";
import PFrame from "../components/PFrame/PFrame";
import testProjects from "../test/projects.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    API.getrepos()
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setProjects(res.data);
        } else {
          setError(true);
          setErrorMessage("API is not currently returning any data.");
        }
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
        backgroundColor: "black",
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
          {projects.map((project) => (
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
