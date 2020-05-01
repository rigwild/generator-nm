import path from 'path';
import test from 'ava';
import helpers from 'yeoman-test';
import assert from 'yeoman-assert';
import pify from 'pify';
import utils from './app/utils';

let generator;

test.beforeEach(async () => {
	await pify(helpers.testDirectory)(path.join(__dirname, 'temp'));
	generator = helpers.createGenerator('nm:app', ['../app'], null, {skipInstall: true});
});

const commonFiles = [
	'.git',
	'.prettierrc.js',
	'.gitattributes',
	'.gitignore',
	'.travis.yml',
	'LICENSE',
	'package.json',
	'README.md',
	'test',
	'tsconfig.json',
	'screenshot.png'
];

test.serial('generates expected files', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: false
	});

	await pify(generator.run.bind(generator))();

	assert.file(['index.ts', ...commonFiles]);
	assert.noFile('cli.ts');

	assert.fileContent('package.json', /"main": "dist\/index\.js"/);
	assert.fileContent('package.json', /"types": "dist\/index\.d\.ts"/);

});

test.serial('CLI option', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: true
	});

	await pify(generator.run.bind(generator))();

	assert.file(['cli.ts', ...commonFiles]);
	assert.noFile('index.ts');

	assert.fileContent('package.json', /"bin":/);
	assert.fileContent('package.json', /"test": "dist\/cli\.js"/);
	assert.fileContent('package.json', /"meow"/);
	assert.fileContent('package.json', /"execa"/);
	assert.fileContent('package.json', /"update-notifier"/);
	assert.fileContent('package.json', /"\@types\/update-notifier"/);
});

test('parse scoped package names', t => {
	t.is(utils.slugifyPackageName('author/thing'), 'author-thing', 'slugify non-scoped packages');
	t.is(utils.slugifyPackageName('@author/thing'), '@author/thing', 'accept scoped packages');
	t.is(utils.slugifyPackageName('@author/hi/there'), 'author-hi-there', 'fall back to regular slugify if invalid scoped name');
});

test.serial('prompts for description', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		moduleDescription: 'foo',
		githubUsername: 'test',
		website: 'test.com',
		cli: false
	});

	await pify(generator.run.bind(generator))();

	assert.fileContent('package.json', /"description": "foo",/);
	assert.fileContent('readme.md', /> foo/);
});

test.serial('defaults to superb description', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		cli: false,
		nyc: true,
		codecov: true
	});

	await pify(generator.run.bind(generator))();

	assert.fileContent('package.json', /"description": "My .+ module",/);
	assert.fileContent('README.md', /> My .+ module/);
});
