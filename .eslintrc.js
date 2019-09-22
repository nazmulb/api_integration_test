module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
    },
    extends: [
      'airbnb-base',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      describe: true,
      it: true,
      test: true,
      expect: true,
      beforeAll: true,
      beforeEach: true,
      afterEach: true,
      afterAll: true,
    },
    parserOptions: {
      ecmaVersion: 2017,
    },
    rules: {
      "indent": ["error", "tab"],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-tabs": "off",
      "no-mixed-spaces-and-tabs": "error",
      "no-console": "off",
      "global-require": "off",
      "import/no-dynamic-require": "off",
      "class-methods-use-this": "off",
      "radix": ["error", "as-needed"],
      "func-names": "off",
      "max-len": ["error", { "code": 180 }],
      "prefer-arrow-callback": "off",
      "no-useless-escape": "off",
      "no-unneeded-ternary": "off",
      "no-restricted-properties": "off",
      "no-restricted-globals": "off",
      "radix": "off",
      "no-use-before-define": "off",
    },
  };
  