const replaceColorsWithPlaceholders = {
    name: 'replaceColorsWithPlaceholders',
    description: 'Replace specific fill and stroke colors with placeholders for dynamic values',
    fn: () => {
        return {
            element: {
                enter: (node, parentNode) => {
                    if (node.attributes) {
                        if (node.attributes.fill) {
                            const value = node.attributes.fill.trim().toLowerCase();
                            if (
                                value === 'black' ||
                                value === '#000' ||
                                value === '#000000' ||
                                value === '#1c274c'
                            ) {
                                node.attributes.fill = '%%primaryColor%%';
                            } else if (
                                value === 'white' ||
                                value === '#fff' ||
                                value === '#ffffff'
                            ) {
                                node.attributes.fill = '%%secondaryColor%%';
                            }
                        }
                        if (node.attributes.stroke) {
                            const value = node.attributes.stroke.trim().toLowerCase();
                            if (
                                value === 'black' ||
                                value === '#000' ||
                                value === '#000000' ||
                                value === '#1c274c'
                            ) {
                                node.attributes.stroke = '%%primaryColor%%';
                            } else if (
                                value === 'white' ||
                                value === '#fff' ||
                                value === '#ffffff'
                            ) {
                                node.attributes.stroke = '%%secondaryColor%%';
                            }
                        }
                    }
                },
            },
        };
    },
};

module.exports = {
    replaceColorsWithPlaceholders
};
