// src/i18next-parser.config.js
module.exports = {
  // Scan TS/TSX files inside src
 input: ['src/**/*.{ts,tsx}'],

  // Where extracted translations would normally go
  output: 'locales/$LOCALE/$NAMESPACE.json',

  locales: ['en'],
  namespace: 'translation',

  keySeparator: false,
  nsSeparator: false,

  lexers: {
    ts: ['JsxLexer'],
    tsx: ['JsxLexer']
  }
};
