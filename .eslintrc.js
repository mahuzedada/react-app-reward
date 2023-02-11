module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-import-assign': 0,
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
  },
  ignorePatterns: ['src/index.css', 'tailwind.config.js', 'public/*'],
};
