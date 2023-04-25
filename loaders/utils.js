function tplTemplate(template, options) {
    return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
        return options[key];
    })
}

module.exports = {tplTemplate};