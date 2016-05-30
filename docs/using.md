Libraries and tools used
========================

Standing on the shoulders of giants
-----------------------------------

... or "yay 1MB for hello world", or something.

We are using:

- [React](https://facebook.github.io/react/), naturally.
- [Redux](http://redux.js.org/) to obtain and avoid React's Flux architecture.
- [ES6 -- the next generation Javascript](http://es6-features.org/), and therefore also [Webpack](https://webpack.github.io/)+[Babel](https://babeljs.io/) to make it work in the previous generation browsers. For details see [Building process](build).
- a bunch of other awesome libraries -- see `package.json`.

Redux architecture all over the place
-------------------------------------

Redux implies some architecture and some vocabulary, for instance:

- *action*: a Redux action.
  - We use [`redux-actions`](https://github.com/acdlite/redux-actions) ⇒ every action is an object of that format (and you should use `createAction` and `handleActions`).
  - For consistency, there are no plain actions, only action creators. Therefore if you want a plain action, you must call the action creator with something (or nothing).
  - We use `thunkMiddleware` from [`redux-thunk`](https://github.com/gaearon/redux-thunk). Therefore a function `dispatch -> action` is also considered an action.
