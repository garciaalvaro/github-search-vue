module.exports = {
	ignorePatterns: ["dist", "node_modules"],

	parser: "vue-eslint-parser",

	parserOptions: {
		parser: "@typescript-eslint/parser",
	},

	extends: [
		"eslint:recommended",
		"plugin:vue/recommended",
		"plugin:@typescript-eslint/recommended",
		"@vue/typescript/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],

	env: {
		es2020: true,
		browser: true,
		node: true,
	},

	rules: {
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-var-requires": "off",
	},
};
