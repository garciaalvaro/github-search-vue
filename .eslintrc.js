module.exports = {
	parser: "vue-eslint-parser",
	extends: [
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"plugin:vue/recommended",
		"prettier/vue",
	],
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
	},
};
