/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['./src/**/*.tsx', './src/**/*.png'],
    theme: {
        extend: {
            colors: {
                orange: {
                    500: '#FF8800',
                },
                zinc: {
                    100: '#F5F5F5',
                    800: '#212121',
                },
            },
            fontFamily: {
                sans: "'UniNeue', 'sans-serif'",
            },
            screens: {
                xs: '475px',
                ...defaultTheme.screens,
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
    corePlugins: {
        preflight: true, // <== disable this!
    },
};
