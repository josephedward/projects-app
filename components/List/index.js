import React, { useEffect } from "react";


function getRandomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

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
      width="75%"
      style={{
        ...mAlign,
        backgroundImage: `linear-gradient(#${getRandomColor()},#${getRandomColor()}, #${getRandomColor()})`,
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
        backgroundImage: `linear-gradient(#${getRandomColor()},#${getRandomColor()}, #${getRandomColor()})`,
      }}
      className="list-group-item"
    >
      {children}
    </div>
  );
}

const mAlign = {
  fontSize: "15px",
  width: "75%",
  margin: "40px auto",
  textAlign: "center",
  "align-items": "center",
};
