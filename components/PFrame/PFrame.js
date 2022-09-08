import React from "react";
import { ListItem } from "../List";

export default function PFrame(props) {
  return (
    <ListItem key={props.id}>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
          boxShadow: "0px 0px 10px #000000",
        }}
      >
        <strong>
          <a href={props.html_url}>{props.name}</a>
        </strong>
        <br />
        <a
          style={{
            overflowWrap: "break-word",
            wordBreak: "break-all",
          }}
          href={props.homepage}
        >
          {props.homepage}
        </a>
        <p>{props.description}</p>
      </div>
      {props.homepage ? (
        <iframe
          width="100%"
          height="800"
          title="Deployment Iframe"
          src={props.homepage}
        />
      ) : (
        <div>{/* <p>Your browser does not support iframes.</p> */}</div>
      )}
    </ListItem>
  );
}
