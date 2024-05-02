module.exports = {
    extends: ["react-app"],
    rules: {},
    overrides: [
        {
            files: ["**/*.js?(x)"],
            rules: {
                // ******** disable eslint rules that biome covers *********
                "react/no-unescaped-entities": "off",
                "react/display-name": "off",
                "react/prop-types": "off",
                "react-hooks/exhaustive-deps": "off",
            },
        },
    ],
};
