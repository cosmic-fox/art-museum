/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    // eslint-disable-next-line no-undef
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    important: true,
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
        },
        extend: {},
    },
    daisyui: {
        themes: [
            // Extending an existing theme: https://daisyui.com/docs/themes/#-7
            "forest", // first one will be the default theme
        ],
    },
};
