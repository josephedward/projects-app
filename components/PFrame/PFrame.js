import React from "react";
import { ListItem } from "../List";
import API from "../../api/hello";

export default function PFrame(props) {
  return (
    <ListItem
      style={{
        paddingBottom: "440px",
        // backgroundImage: `linear-gradient(#${API.getRandomColor()},#${API.getRandomColor()}, #${API.getRandomColor()})`,
      }}
      key={props.id}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(#${API.getRandomColor()},#${API.getRandomColor()}, #${API.getRandomColor()})`,
          // backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          padding: "10px",
          paddingTop: "10px",
          margin: "10px",
          boxShadow: "0px 0px 10px #000000",
        }}
      >
        <div
          style={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "50%",
            margin: "0 auto",
          }}
        >
          <span>
            {" "}
            <strong>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                <a href={props.html_url}>{props.name}</a>
              </p>
            </strong>
            <p>{props.description}</p>
            <strong>
              <a
                style={{
                  overflowWrap: "break-word",
                  wordBreak: "break-all",
                }}
                href={props.homepage}
              >
                {props.homepage}
              </a>
            </strong>
          </span>
        </div>
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
