const http = require('http');
const url = require('url');
const qs = require('qs')
let homeController = require('./src/controller/homecontroller')
let AddController = require('./src/controller/addcontroller')



    const server = http.createServer(((req, res) => {
        let urlPath = url.parse(req.url);
        console.log(urlPath.pathname)

        switch (urlPath.pathname) {
            case "/":
                homeController.showList(req, res);
                break;
            case "/add":
                // AddController.addUser(req,res)
                console.log(123)
                break;
        }
    }))

server.listen(3000, () => {
    console.log('server is running on 3000')
})