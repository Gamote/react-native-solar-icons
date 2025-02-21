const { replaceColorsWithPlaceholders } = require('./svgo.plugin.js');

module.exports = {
    "plugins": [
        "removeXMLNS",
        "removeUselessStrokeAndFill",
        replaceColorsWithPlaceholders
    ]
}
