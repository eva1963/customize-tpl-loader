const {tplTemplate} = require('../utils');

function tplLoader(source) {
    source = source.replace(/\s+/g, '');

    console.log('获取你在webpack-config里面为loader设置的options项====》', this.getOptions());

    const {log} = this.getOptions();
    const _log= log ? `console.log('tpl-loader')` : '';

    return `
    export default (options) => {
        ${tplTemplate.toString()}
        ${_log}
        return tplTemplate(\`${source}\`, options);
    }
    `
}

module.exports = tplLoader;