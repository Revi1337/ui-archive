const jsonc = require('jsonc-parser');
const fs = require('fs');
const text = fs.readFileSync('.claude/settings.local.json', 'utf8');
const errors = [];
const tree = jsonc.parse(text, errors);
console.log(errors);
