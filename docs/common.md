<!-- `common` -- shared utilities
============================
 -->

As usually, this is not complete API documentation, instead it is an overview plus info about some non-trivial bits.

`RecordTable.jsx` -- tables components
--------------------------------------

React components for rendering tables of homogeneous data.

### `TranslaTable(head_ids, render_record) -> React component`

`head_ids`: [string], `render_record`: function

Returns a component that accepts an array of records (whatever that may be) and is i18n-friendly.

`render_record(record) -> row` is a function that returns a single table row (as an array of React nodes).

`head_ids` are used as message IDs in `FormattedMessage`s which will be rendered in the table header (in the given order).

`sse.js` -- server-sent events
------------------------------

A wrapper around [Server-sent Events/EventSource](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) that dispatches actions based on events received.

See also [`Events` in Deadlock server API](http://deadlock.readthedocs.io/projects/server/en/latest/) [TODO precise link].

`utils.js` -- utilities
-----------------------

Random utilities that didn't fit anywhere else. Move along.
