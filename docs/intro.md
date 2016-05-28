Introduction
============

Deadlock WebUI is a single-page web application written in [React](https://facebook.github.io/react/).
It connects to `the Deadlock server's API <https://deadlock.readthedocs.io/en/latest/server/deadapi/>`_.

TODO stuff.

WebUI is implemented as a set of relatively independent modules providing the various functionality, plus some shared library-like functionality and some glue to hold it all together.

The following modules exist:

- [`status`: module for monitoring system status](status)
- [`accesspoint`: module for managing access points and controllers](accesspoint)
- [`accesslog`: module for viewing access logs](accesslog)
- [`rules`: module for managing access rules](rules)
- [`settings`: module for managing user settings](settings)

The common utilities and the glue:

- [`app`: glues together the individual modules and provides the top-level `App` component](app)
- [`common`: provides shared utilities](common)

WebUI is [fully internationalized](i18n).
