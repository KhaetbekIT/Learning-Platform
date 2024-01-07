const {alias} = require("react-app-rewire-alias");

module.exports = function override(config){
    alias({
        "@storybook": "src/storybook",
        "@style": "src/styles",
        "@image": "src/images",
        "@page": "src/pages",
        "@": "src"

    })(config);

    return config;
}