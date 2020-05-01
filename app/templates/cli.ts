#!/usr/bin/env node
'use strict'

import meow from 'meow'
import updateNotifier from 'update-notifier'

import <%= camelModuleName.replace('Cli', '') %> from '<%= moduleName.replace('-cli', '') %>'

const cli = meow(
  `
    Usage
      $ <%= moduleName.replace('-cli', '') %>
    
    Options
      --file -f         Output file [Default: "myFile.json"]

    Examples
      $ <%= moduleName.replace('-cli', '') %>
      $ <%= moduleName.replace('-cli', '') %> --file="_arkWallets.txt"

		https://github.com/<%= githubUsername %>/<%= moduleName %>
`,
  {
    flags: {
      file: {
        type: 'string',
        alias: 'f'
      }
    }
  }
)

updateNotifier({ pkg: cli.pkg as updateNotifier.Package }).notify()

const setup = async () => {
  console.log(await <%= camelModuleName.replace('Cli', '') %>(cli.input[0] || 'unicorns')(cli.flags))
}
setup()
