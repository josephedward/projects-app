import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
//no logs in prod
// if (process.env.NODE_ENV === "production") {
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

function MyApp({ Component, pageProps }) {
  return <Component
  
  {...pageProps} />;
}

export default MyApp;
