const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        orange: colors.orange,
        blue: colors.blue,
        green: colors.green,
      },
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
