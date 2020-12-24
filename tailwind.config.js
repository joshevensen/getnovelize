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
        gray: colors.warmGray,
        orange: colors.orange,
      },
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
