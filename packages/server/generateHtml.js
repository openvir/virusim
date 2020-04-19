const _ = require('lodash')
const fs = require('fs')

const widgetHTML = `
<!doctype html>
<html lang="en">
<head>
    <meta property="og:url" content="https://www.virusim.org/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="ViruSim: Fighting SARS-CoV-2 with education." />
    <meta property="og:image" content="http://raw.githubusercontent.com/openvir/virusim/master/docs/logo/logo_og.png" />
    <title>ViruSim</title>
    <style>
        html, body {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        
        .header {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            background-color: white;
            text-align: center;
        }

        #renderCanvas {
            width: 100%;
            height: 100%;
            touch-action: none;
        }
        
        .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: white;
            text-align: center;
        }
    </style>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163914479-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-163914479-1');
    </script>
</head>
<body>
<div class="header">
  <p>ViruSim: A browser simulation of a body cell getting infected by SARS-CoV-2.</p>
</div>
<canvas id="renderCanvas" touch-action="none"></canvas>
<script src="<%= HOST %>/main.js"></script>
<div class="footer">
  <p>👋👋👋 We're looking for contributors. Find out more at <a href="https://github.com/openvir/virusim" target="_blank">https://github.com/openvir/virusim</a>.</p>
</div>
</body>
</html>
`

const resultHtml = _.template(widgetHTML)({
    HOST: process.env.HOST,
})

fs.writeFileSync('dist/index.html', resultHtml)
// eslint-disable-next-line no-console
console.log('index.html was created.')
