module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env'),
    require('cssnano')({
      preset: 'advanced',
    })
  ]
}
