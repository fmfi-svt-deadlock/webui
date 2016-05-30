Build process
=============

We use [Webpack](https://webpack.github.io/) to build our modularized code into stuff suitable for serving as static files. Currently, only a debug build configuration exists (and a configuration suitable for production is a TODO).

When you run...

- `npm build`: static files will be built and placed into `public/`, from where any web server can serve them
- `npm run`: a dev server will be started, set up to provide hot reloading on sources change

Available loaders
-----------------

Currently, the following loaders are configured, for the given extensions:

- `js`, `jsx`: [Babel](https://babeljs.io/) is used to transform ES6+JSX into ES5 ("plain old Javascript").
- `png`, `jpg`, `svg`, `gif`: URL loader, will inline the image when it is small, or copy it over and return its resulting URL otherwise
- `yml`, `yaml`: will return the Javascript object represented by that YAML
