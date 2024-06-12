# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## How to deploy

This deploys through github actions!

## How to use locally

- `npm install` (only initially needed)
- `npm start`

### Verify build before pushing remote

If there are any issues with wrong/outdated links, the github action will fail. To reduce the feedback loop, build it locally before pushing.

`npm run build`

## How to use the documentation repository

> TBD

- Documentation is written as a markdown file. Contributions are done via pull request
- We use [markdownlint](https://www.npmjs.com/package/markdownlint) in a pre-commit hook.

### How to configure markdown rules

[https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
Rules are configured in a file named `.markdownlint.json`
for more detailed rules have a look at [this site](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md) as an example.
