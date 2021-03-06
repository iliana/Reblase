﻿module.exports = {
    purge: ["src/**/*.tsx", "src/**/*.html", "src/**/*.ts"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
        },
        extend: {},
    },
    variants: {
        backgroundColor: ["responsive", "odd", "hover", "focus"],
    },
    plugins: [],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
};
