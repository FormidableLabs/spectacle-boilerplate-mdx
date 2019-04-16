[![Maintenance Status][maintenance-image]](#maintenance-status)

# Spectacle Boilerplate

## Contents

- [Reference](#reference)
- [Getting Started](#getting-started)
- [Build & Deployment](#build-deployment)

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.md](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

For more information about MDX syntax and how it all works, check out the [MDX documentation](https://mdxjs.com/).

### Slides

Slides are separated with `---`.

To customize specific MDX functionality in Spectacle Boilerplate MDX, including what characters are used to demarcate slide breaks, refer to the `loader.js` file. We don't recommend altering this functionality unless necessary.

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run 
```bash
yarn
```
or 
```bash
npm install
```

Next, run 
```bash
rm -R .git
```
to remove the existing version control.

Then, to start up the local server, run
```bash
yarn start
```
or
```bash
npm start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and you're ready to roll. Modify `index.mdx` to see changes, but the best part about MDX is that you can create your own React components and import them into the `index.mdx` file to seamlessly integrate with markdown!

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
npm run build
```

If you want to deploy the slideshow to surge, run 
```bash
npm run deploy
```


## Maintenance Status: Active

Formidable is actively working on this project, and we expect to continue for work for the foreseeable future. Bug reports, feature requests and pull requests are welcome. 

[maintenance-image]: https://img.shields.io/badge/maintenance-active-green.svg

