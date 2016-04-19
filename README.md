Deadlock Web UI
===============

The web interface for rule management and status monitoring.

[![Dependencies Status](https://david-dm.org/fmfi-svt-deadlock/webui.svg)](https://david-dm.org/fmfi-svt-deadlock/webui)

Using...
--------

- [React](https://facebook.github.io/react)
- [webpack](http://webpack.github.io/)

Development Quick Start
-----------------------

Note: This is the web front-end only. The API is [server/deadapi](https://github.com/fmfi-svt-deadlock/server/tree/master/deadapi).

- requires [node.js](https://nodejs.org/) and npm
- install dependencies: `npm install`
- start prod server: `node server` (or your favorite Procfile thing)
- dev server: run `./devserver.sh`, open [localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) and enjoy continuous rebuild-and-automatic-reload-with-sourcemaps-and-everything!
- It will attempt to connect to the backend at the URL written in `public/API_URL.conf`. If using the prod server, you should instead set the `API_URL` environment variable.
