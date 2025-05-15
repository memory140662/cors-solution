const { exec } = require('child_process');
const fs = require('fs')
const path = require('path')

const fileName = 'nginx.conf'

let filePath = path.join(__dirname, fileName + '.bank')
const content = fs.readFileSync(filePath, 'utf8')
    .replace('[DIR]', __dirname);

filePath = path.join(__dirname, fileName)
if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
}
fs.writeFileSync(filePath, content, 'utf8');

exec('nginx -s stop')
exec('nginx -c ' + filePath)
console.log('nginx start')