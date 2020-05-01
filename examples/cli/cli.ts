#!/usr/bin/env node
'use strict'

import meow from 'meow'
import updateNotifier from 'update-notifier'

import myCoolPackage from 'my-cool-package'

const cli = meow(
  `
    Usage
      $ my-cool-package
    
    Options
      --file -f         Output file [Default: "myFile.json"]

    Examples
      $ my-cool-package
      $ my-cool-package --file="_arkWallets.txt"

		https://github.com/rigwild/my-cool-package-cli
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
  console.log(await myCoolPackage(cli.input[0] || 'unicorns')(cli.flags))
}
setup()
