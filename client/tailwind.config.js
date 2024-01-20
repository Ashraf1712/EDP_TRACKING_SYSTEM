/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
                petronas: { "primary": "#00b1a9", "purple": "#763f98", "blue": "#20419a", "yellow": "#fdb924", "green": "#bfd730" },
                primary: { "50": "#f3faf7", "100": "#DEF7EC", "200": "#BCF0DA", "300": "#84E1BC", "400": "#31C48D", "500": "#0E9F6E", "600": "#057A55", "700": "#046C4E", "800": "#03543F", "900": "#014737" },
                greyish: { "100": "#21242b" },
                greenish: { "100": "#18f98f" }
            }
        },
    },
    plugins: [require("daisyui")],
    fontFamily: {
        'body': [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji'
        ],
        'sans': [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji'
        ]
    }
};