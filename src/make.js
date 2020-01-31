const fs = require('fs');

const Handlebars = require('handlebars');
const jsYaml = require('js-yaml');
const _ = require('lodash');

const defaultData = {

};

let basData = fs.readFileSync('data.yml', 'utf-8');
basData = jsYaml.safeLoad(basData);
basData = { ...defaultData, ...basData };

// compile sources
function writeTemplate(src, dest, data) {
    let sourceData = fs.readFileSync(src, 'utf-8');
    let template = Handlebars.compile(sourceData);
    let compiled = template(data);
    fs.writeFile('../dist/'+dest, compiled, 'utf-8', err => {});
}

writeTemplate('www/index.html.h', 'index.html', basData);
writeTemplate('www/script.js.h', 'script.js', basData);

