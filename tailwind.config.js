const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    plugins: [],
    purge: {
        content: ["./src/**/*.svelte", "./src/**/*.html"],
        defaultExtractor: (content) => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
            const broadMatchesWithoutTrailingSlash = broadMatches.map((match) => _.trimEnd(match, "\\"));

            return broadMatches.concat(broadMatchesWithoutTrailingSlash);
        },
        enabled: isProduction
    }
};
