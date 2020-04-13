// this is the server that serves our js snippet (no babel)

const http = require('http')
const connect = require('connect')

const gzipStatic = require('connect-gzip-static')

const app = connect()

app.use(gzipStatic('./dist'))

const port = process.env.PORT || 8000
http.createServer(app).listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}...`)
})
