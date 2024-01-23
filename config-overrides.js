const {alias} = require("react-app-rewire-alias");

module.exports = function override(config){
    alias({
        "@storybook": "src/storybook",
        "@styles": "src/styles",
        "@image": "src/images",
        "@pages": "src/pages",
        "@fonts": "src/fonts"

    })(config);

    return config;
}