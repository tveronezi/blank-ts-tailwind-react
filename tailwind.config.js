/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    1: "#A5CDFF",
                    2: "#58A1F9",
                    3: "#227CE7",
                    4: "#186BD0",
                    5: "#115DBF",
                    6: "#034EAA"
                },
                green: {
                    1: "#92FFE0",
                    2: "#4AFECB",
                    3: "#1DF1BE",
                    4: "#08E4AF",
                    5: "#00BA8D",
                    6: "#005E47"
                },
                yellow: {
                    1: "#FFF0B7",
                    2: "#FFE582",
                    3: "#FFDA4D",
                    4: "#FFCA00",
                    5: "#EDBB00",
                    6: "#B79100"
                },
                red: {
                    1: "#FFE5DF",
                    2: "#FA8080",
                    3: "#FA8080",
                    4: "#EA5656",
                    5: "#C22525"
                },
                grey: {
                    0: "#CDD1DD",
                    1: "#ABAFBD",
                    2: "#818696",
                    3: "#474B56",
                    4: "#2E323C",
                    5: "#1C1D1F",
                    6: "#151515"
                },
                purple: {
                    1: "#C0B0E3",
                    2: "#A888ED",
                    3: "#8F65E9",
                    4: "#7337F3",
                    5: "#5C24D2"
                }
            }
        }
    },
    plugins: []
};
