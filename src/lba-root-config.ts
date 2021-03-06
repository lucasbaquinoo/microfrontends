import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@lba/react-single",
  app: () =>
    System.import(
      "@lba/react-single"
    ),
  activeWhen: (location) => location.pathname === '/react-single',
});

start({
  urlRerouteOnly: true,
});
