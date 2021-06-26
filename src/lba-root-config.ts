import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@lba/navbar",
//   app: () => System.import("@lba/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
