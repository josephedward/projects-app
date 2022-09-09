import React from "react";
import { ListItem } from "../List";
import API from "../../api/hello";

export default function PFrame(props) {
  return (
    <ListItem
      style={{
        backgroundImage: `linear-gradient(#${API.getRandomColor()},#${API.getRandomColor()}, #${API.getRandomColor()})`,
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
          verticalAlign: "middle",
        }}
      >
        <div
          style={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "50%",
            margin: "0 auto",
            verticalAlign: "middle",
          }}
        >
          <span
            style={{
              verticalAlign: "middle",
              
            }}
          >
            {" "}
            <strong>
              <div
                style={{
                  fontSize: "18px",
                  verticalAlign: "middle !important",
                }}
              >
                <a href={props.html_url}>{props.name}</a>
              </div>
            </strong>
            <div>{props.description}</div>
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
        <div>{/* <div>Your browser does not support iframes.</div> */}</div>
      )}
    </ListItem>
  );
}
