const plugin = require('tailwindcss/plugin');

const nextSelect = plugin(function ({ addVariant, e }) {
  addVariant(`next`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const newClass = e(`next${separator}${className}`);
      return `.${newClass} ~ *`
    })
  });
});

module.exports = nextSelect;