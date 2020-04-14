const _ = require('lodash')
const fs = require('fs')

const widgetHTML = `
<!doctype html>
<html lang="en">
<head>
    <title>Getting Started</title>
    <style>
        html, body {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        #renderCanvas {
            width: 100%;
            height: 100%;
            touch-action: none;
        }
    </style>
</head>
<body>
<canvas id="renderCanvas" touch-action="none"></canvas>
<script src="<%= HOST %>/main.js"></script>
</body>
</html>
`

const HOST = 'https://virusim-production.herokuapp.com'

const resultHtml = _.template(widgetHTML)({ HOST })

fs.writeFileSync('dist/index.html', resultHtml)
// eslint-disable-next-line no-console
console.log('index.html was created.')
