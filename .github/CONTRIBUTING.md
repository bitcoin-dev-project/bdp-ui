# Contributing

Thanks for your interest in contributing to BDP-UI! We welcome all contributions, whether they are bug reports, feature requests, or pull requests.

## Reporting bugs

If you find a bug in the code, please open an issue on GitHub.

## Working locally

The repo is managed with Yarn Workspaces.

### Development

```bash
# install dependencies
yarn install

# start Storybook and see examples in the browser
yarn dev
```

Make your changes and check that they resolve the problem with an example in Storybook. We also suggest adding tests to support your change, and then run `yarn test` to make sure nothing is broken.

You also need to inform Yarn workspaces that a particular package has changed for proper versioning. Run `yarn version check -i` to mark the appropriate type of change for those packages.

Lastly, run `yarn build` to ensure that the build runs successfully before submitting the pull request.