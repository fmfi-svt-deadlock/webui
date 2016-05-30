`settings` -- user settings
===========================

Manages user settings. Uses localstorage to save them between sessions. `settings.js` contains defaults and `load_state` and `save_state` functions.

Actions
-------

### `settings/CHANGE`: something changed

**Payload:** the diff between the old and the new settings object.

Reducers
--------

### of `settings/CHANGE`: update the state and save to localstorage

**Default:** `load_state()` (or defaults defined in `settings`).

Components
----------

### `Container`: the settings UI

Full stand-alone component `connect`ed with state.
