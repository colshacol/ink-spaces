module.exports = {
	rootDir: './source',
	verbose: true,
	automock: false,
	clearMocks: true,

	testRegex: '(/tests/.*|(\\.|/)t)\\.js$',

	testPathIgnorePatterns: ['/node_modules/'],

	transform: {
		'^.+\\.jsx?$': '<rootDir>/../node_modules/babel-jest'
	}
}
