const path = require('path');
const dir = process.cwd();

const purgeFiles = [
  path.resolve(dir, 'src') + '/**/*.html',
  path.resolve(dir, 'src') + '/**/*.liquid',
  path.resolve(dir, 'src') + '/**/*.vue',
  path.resolve(dir, 'src') + '/**/*.js',
]

module.exports = {
  purge: purgeFiles,
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
