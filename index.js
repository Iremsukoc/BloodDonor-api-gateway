const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const port = 3001;


app.use("/donor-service", createProxyMiddleware({
    target: "http://127.0.0.1:1010/",
    pathRewrite: {
        "^/donor-service":"",
    }
}))


app.use("/blood-search-service", createProxyMiddleware({
    target: "http://127.0.0.1:1012/",
    pathRewrite: {
        "^/blood-search-service":"",
    }
}))


app.listen(port, () => {
    console.log("Service listening at http://127.0.0.1:${port}")
})