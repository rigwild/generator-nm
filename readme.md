# generator-nm-typescript [![Build Status](https://travis-ci.org/rigwild/generator-nm-typescript.svg?branch=master)](https://travis-ci.org/rigwild/generator-nm-typescript)

> Scaffold out a [node module](https://github.com/sindresorhus/node-module-boilerplate)

Features and differences of this fork:

 - Don't ask for my name/email/website (**change it if you're not me** mdr)
 - **Fully reworked to TypeScript (AVA + TypeScript + ts-node)**
 - Use **Yarn**
 - Generate **a module OR a CLI (not both merged)**
 - Keep Yarn lock files
 - package.json engine to node >=10
 - Added Prettier configuration
 - Added lots of badges at the top of the README
 - Added `Related` section at the end of the README
 - Added README screenshot
 - Made LICENSE and README uppercase
 - Travis Node.js latest version
 - CLI mode add `update-notifier`
 - CLI mode add `update-notifier`
 - Removed private GitHub orgs
 - Removed .editorconfig/.npmrc
 - Removed xo/nyc/codecov

## Generation examples

 - [Module generation example](./examples/module)
 - [CLI generation example](./examples/cli)

## Install

```
$ yarn global add yo generator-nm-typescript
```


## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo nm-typescript
```

There are multiple command-line options available:

```
$ yo nm-typescript --help

  Usage:
    yo nm-typescript [options]

  Options:
    --help          # Print the generator's options and usage
    --skip-cache    # Do not remember prompt answers                      Default: false
    --skip-install  # Do not automatically install dependencies           Default: false
    --cli           # Add a CLI
```
