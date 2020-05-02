'use strict'
const superb = require('superb')
const normalizeUrl = require('normalize-url')
const humanizeUrl = require('humanize-url')
const Generator = require('yeoman-generator')
const _s = require('underscore.string')
const utils = require('./utils')

module.exports = class extends Generator {
  constructor(...args) {
    super(...args)

    this.option('org', {
      type: String,
      description: 'Publish to a GitHub organization account'
    })

    this.option('cli', {
      type: Boolean,
      description: 'Make a CLI'
    })
  }

  init() {
    return this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: _s.slugify(this.appname),
        filter: x => utils.slugifyPackageName(x)
      },
      {
        name: 'moduleDescription',
        message: 'What is your module description?',
        default: `My ${superb.random()} module`
      },
      {
        name: 'cli',
        message: 'Is it a CLI ? (Yes = CLI, No = Module)',
        type: 'confirm',
        default: Boolean(this.options.cli),
        when: () => this.options.cli === undefined
      }
    ]).then(props => {
      // eslint-disable-line promise/prefer-await-to-then
      const or = (option, prop) => (this.options[option] === undefined ? props[prop || option] : this.options[option])

      const cli = or('cli')

      const repoName = utils.repoName(props.moduleName)

      const tpl = {
        moduleName: props.moduleName,
        moduleDescription: props.moduleDescription,
        camelModuleName: _s.camelize(repoName),
        repoName,
        githubUsername: 'rigwild',
        name: 'rigwild',
        email: 'me@rigwild.dev',
        website: 'https://rigwild.dev',
        humanizedWebsite: 'https://rigwild.dev',
        cli
      }

      const mv = (from, to) => this.fs.move(this.destinationPath(from), this.destinationPath(to))

      this.fs.copyTpl([`${this.templatePath()}/**`, '!**/index.ts', '!**/cli.ts'], this.destinationPath(), tpl)

      if (!cli) this.fs.copyTpl(this.templatePath('index.ts'), this.destinationPath('index.ts'), tpl)
      if (cli) this.fs.copyTpl(this.templatePath('cli.ts'), this.destinationPath('cli.ts'), tpl)

      mv('prettierrc.js', '.prettierrc.js')
      mv('gitattributes', '.gitattributes')
      mv('gitignore', '.gitignore')
      mv('workflows', '.github') // For some reason, moving a directory wraps it in the dir name..
      mv('_package.json', 'package.json')
    })
  }

  git() {
    this.spawnCommandSync('git', ['init'])
  }

  install() {
    this.installDependencies({
      bower: false,
      yarn: { force: true },
      npm: false
    })
  }
}
