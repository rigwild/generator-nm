# <%= repoName %>
[![Node.js CI](https://github.com/<%= githubUsername %>/<%= repoName %>/workflows/Node.js%20CI/badge.svg)](https://github.com/<%= githubUsername %>/<%= repoName %>/actions) [![npm package](https://img.shields.io/npm/v/<%= moduleName %>.svg?logo=npm)](https://www.npmjs.com/package/<%= moduleName %>) ![npm downloads](https://img.shields.io/npm/dw/<%= moduleName %>) ![license](https://img.shields.io/npm/l/<%= moduleName %>?color=blue)

> <%= moduleDescription %>

![Screenshot](./screenshot.png)<% if (!cli) { %>


## Install

```
$ yarn add <%= moduleName %>
```


## Usage

```js
import <%= camelModuleName %> from '<%= moduleName %>'

await <%= camelModuleName %>('unicorns')
//=> 'unicorns & rainbows'
```


## API

### <%= camelModuleName %>(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.<% } if (cli) { %>


## Install

```
$ yarn global add <%= moduleName %>
```

## Usage

```
$ <%= repoName %> --help

  Usage
    $ <%= moduleName.replace('-cli', '') %>
  
  Options
    --file -f         Output file [Default: "myFile.json"]

  Examples
    $ <%= moduleName.replace('-cli', '') %>
    $ <%= moduleName.replace('-cli', '') %> --file="_arkWallets.txt"

  https://github.com/<%= githubUsername %>/<%= moduleName %>
```<% } %>


## Related

<% if (cli) { %> - [<%= moduleName.replace('-cli', '') %>](https://github.com/<%= githubUsername %>/<%= moduleName.replace('-cli', '') %>) - API for this module
<%} if (!cli) { %> - [<%= `${moduleName}-cli` %>](https://github.com/<%= githubUsername %>/<%= `${moduleName}-cli` %>) - CLI for this module <% } %>


## License

[The MIT license](./LICENSE)
