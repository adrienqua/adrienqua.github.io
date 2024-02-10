/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "600px",
            md: "728px",
            lg: "984px",
            xl: "1240px",
        },
        container: {
            center: true,
            padding: "1rem",
            sm: "600px",
            md: "728px",
            lg: "984px",
            xl: "1240px",
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#a991f7",

                    secondary: "#ef4444",

                    accent: "#2dd4bf",

                    neutral: "#1f2937",

                    "base-100": "#312e81",
                },
            },
        ],
    },
}
