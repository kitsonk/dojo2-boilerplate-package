# dojo2-boilerplate-package

**DRAFT** This boilerplate is in *draft* format and is subject to change.

This is the boilerplate (template) for Packages for Dojo 2.  This should be used as a starting point to build a
package that can be easily integrated into a Dojo 2 based project.  In theory, following this template should allow
you to build an AMD compatible package that is usable by

The template builds upon the CommonJS Packages [1.0][package10] and [1.1][package11] specification (although there are
some parts of the specification that are listed as required, which are clearly not required in practice and so some
parts of the specification maybe omitted in this template).  It adds some additional requirements so that a package can
be integrated into the Dojo 2 toolchain.  This includes items like documentation, tests and integration into the build
system.

Full documentation can be found in the [Dojo Toolkit 2.0 - Packages and Distributions][d2packages] document, although
this repositories [wiki](wiki) contains most of the information and will continue to be enhanced .  A package in Dojo 2
is typically one or more [AMD][] modules and associated resources that are then either built into a distribution or
loaded by an application.

## Usage

In order to use this repository, you can fork it on GitHub, use `git clone` or download the [zip][] of the repository.
If you fork it on GitHub or clone it via git, you will be carrying over all the commit history of this package, which
may or may not be desirable.  If you are truly developing a new package, it is best to download the archive, extract it
and then make the modifications you need.  You can subsequently `git init` your package and then manage it
appropriately.

## Layout

To start a new package, there are several things you need to change and add to this boilerplate.  Here are a list of the
main areas you should address:

* `README.md` - This file.  Providing an overview of the package.
* `package.json` - The package descriptor that provides information about the package.
* `package.js` - The file used by the Dojo Builder to build the package.
* `LICENSE` - Identify the licensing for the package.
* `CONTRIBUTING.md` - The contribution guidelines for the package.
* `main.js` - The entry point file into the package.
* `doc/` - The path that contains the documentation for the package.
* `test/` - The path that contains the tests for the package.
* `resources/` - The path that contains resources utilised by the package.  For example, HTML templates, CSS and images.
* `.gitignore` - A file the indicates which files should be ignored by git.
* `.jshintrc` - A file that provides configuration information for JSHint, that cover off most of the Dojo 2 linting
  requirements.

### README.md

It should be replaced with appropriate introduction information about the package.  This should include sections named 
"Installation", "Usage", "License", "Contributing", "Reporting Issues" and other sections as appropriate.  The file
should be written in a [markdown][] format (supporting [GFM][] extensions).  The "License" and "Contributing" sections
should summarise the information contained in `LICENSE` and `CONTRIBUTING.md` and point the reader towards those for
full information.

This file should also indicate what category of package, as per the [package documentation][d2packages].  All new
packages should start off as a "Community" package.

### package.json

The provided template should be customised with information appropriate to the package.  There are certain properties
that are critical for the package to work properly with the Dojo toolchain.  There maybe additional requirements to
ensure the packaging works with other tools.  The important properties for Dojo are:

* `name` - The name of the package.
* `version` - The version of the package.
* `main` - The "main" module of the package (see below)
* `description` - A brief description of the package
* `maintainers` - An array of hashes of those who maintain the package
* `licenses` - An array of hashes for any licenses for the package
* `bugs` - An URI for reporting issues
* `repositories` - An array of hashes of repositories for the package
* `dojoBuild` - The file that contains the build profile for the package (see below)
* `volo` - Any dependencies for the package and other [volo][] configuration information

### package.js

This is a JavaScript file which provides information (a profile object) that can be used by the Dojo Builder to build
the package.  It should be customised to meet the requirements of the package, and mainly identifies the different type
of resources and how they should be handled by the builder.

### LICENSE

This is a text file that provides information about the copyright and license information for the materials contained in
the package.

### CONTRIBUTING.md

This file identifies the information to guide others on how to contribute to the package, if so desired.  This should
lay out whatever governance and guidelines required.  If the package is hosted on GitHub, this information will be
displayed whenever anyone attempts to create a pull request against your repository.

### main.js

Normally this is the main module of the package and could require other modules.  This can be overridden by changing the
`main` property in the `package.json`, but most consumers of a package would expect this module to provide the "basic"
functionality of the package.

### doc/

This path should contain "reference guide" type of documentation.  The main focus of this documentation should be to
answer the question "how do I use the package?"  It shouldn't be a full API documentation, for that is what the in-line
code documentation will provide.

Each file in this path should be formatted in markdown.  In order to facilitate live demonstrations of code and other
items required for documentation purposes, there are some additional extensions as well as a style guide for
documentation [available here][dojo-markdown].  Each modules should be covered off in its own file, named in the same
fashion as the modules are laid out in the package, including any sub-paths.  For example if you have `main.js` you
should have a `doc/main.md`.  If you have `subpackage/myModule.js` then you should have a
`doc/subpackage/myModule.md`.  In addition each path should have an `index.md` which provides a high level description
of any module documented in that path plus relative links to those documents.

Documents provided in this way should then be consumable by the Dojo 2 documentation tools.

### test/

This should contain the test pack for the package.  This should contain unit, functional and performance tests as
appropriate for the package which can then be consumed by the Dojo testing tools.  These tests should be in a format
supported by Dojo's [teststack][].

### resources/

This is an optional directory that should contain resources that are used by the package, like HTML templates, CSS and
images.  This directory is usually to be configured to be copied without any attempt to "build" the resources and
therefore is set to copy only within the `package.js`.

### .gitignore

An optional file which informs git files that should be ignored and not tracked by the repository.

### .jshintrc

A configuration file for [JSHint][] that provides linting and coding conventions that are in line with the Dojo 2
standards.  All Dojo 2 code must at least meet these requirements to be committed to a Toolkit package, although further
in-line code hinting can override the settings, but must be clearly documented why it is overridden.

## In-line Documentation

All JavaScript code should provide inline documentation that is compatible with [JSDoc][] and can be parsed by the
[js-doc-parse][jsdocparse] parser.

[package10]: http://wiki.commonjs.org/wiki/Packages/1.0
[package11]: http://wiki.commonjs.org/wiki/Packages/1.1
[d2packages]: https://docs.google.com/document/d/17B7A0eGbBAYsuZTQCnMnQ-xNiuB5NVc4vKYJqp3a_CE/edit?usp=sharing
[zip]: https://github.com/kitsonk/dojo2-boilerplate-package/archive/master.zip
[markdown]: http://daringfireball.net/projects/markdown/
[gfm]: https://help.github.com/articles/github-flavored-markdown
[dojo-markdown]: https://github.com/kitsonk/dojoment/wiki/dojo_markdown
[amd]: https://github.com/amdjs/amdjs-api/wiki/AMD
[teststack]: https://github.com/csnover/dojo2-teststack
[jshint]: http://www.jshint.com/
[jsdoc]: http://usejsdoc.org/
[jsdocparse]: https://github.com/SitePen/js-doc-parse
[volo]: http://volojs.org/