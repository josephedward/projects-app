import React, { useEffect } from "react";
import API from "../../api/hello";

export function List({ children }) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width > breakpoint ? (
    <ul className="list-group" width="75%">
      {children}
    </ul>
  ) : (
    <ul className="list-group" width="100%">
      {children}
    </ul>
  );
}

export function ListItem({ children }) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width > breakpoint ? (
    <div
      style={{
        width: "75%",
        ...mAlign,
        // backgroundImage: `linear-gradient(#${API.getRandomColor()},#${API.getRandomColor()}, #${API.getRandomColor()})`,
      }}
      className="list-group-item "
    >
      {children}
    </div>
  ) : (
    <div
      width="100%"
      style={{
        ...mAlign,
        // backgroundImage: `linear-gradient(#${API.getRandomColor()},#${API.getRandomColor()}, #${API.getRandomColor()})`,
      }}
      className="list-group-item"
    >
      {children}
    </div>
  );
}

const mAlign = {
  fontSize: "15px",

  margin: "40px auto",
  paddingTop: "2.5px",
  textAlign: "center",
  alignItems: "center",
  backgroundColor: "black",
};
