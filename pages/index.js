import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Projects from "./Projects";
import React from "react";

export default function Home() {
  return (
    <div>
      <Projects />
    </div>
  );
}
