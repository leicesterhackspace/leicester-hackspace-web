# Leicester Hackspace Website
The source code for the [Leicester Hackspace website](https://leicesterhackspace.org.uk/).

This site uses [Hugo](https://gohugo.io/) static site generation, with a custom theme.

# Contributing
We welcome contributions of any kind, please see our [CONTRIBUTING.md](/CONTRIBUTING.md) for guidance on the repository
and how to contribute.

# Building
## Requirements
This project requires [Hugo](https://gohugo.io/installation/) and [DartSass](https://dart.dev/get-dart).

## Dev Environment
To run the site locally use:
```shell
hugo server -D
```
This will host a local webserver with the site's content.

## Release Build
To generate the static site content, run:
```shell
hugo
```
This will output the static HTML into `/public`.
