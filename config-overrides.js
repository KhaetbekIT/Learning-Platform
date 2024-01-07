const {alias} = require("react-app-rewire-alias");

module.exports = function override(config){
    alias({
        "@storybook": "src/storybook",
        "@styles": "src/styles",
        "@image": "src/images",
        "@page": "src/pages",
        "@fonts": "src/fonts",
        "@": "src"

    })(config);

    return config;
}