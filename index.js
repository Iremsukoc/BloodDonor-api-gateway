const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const port = 3001;


app.use("/donor-service", createProxyMiddleware({
    target: "https://blooddonor-donorservice-iremsu.onrender.com",
    pathRewrite: {
        "^/donor-service":"",
    }
}))


app.use("/blood-search-service", createProxyMiddleware({
    target: "https://blooddonor-bloodsearchservice-iremsu.onrender.com",
    pathRewrite: {
        "^/blood-search-service":"",
    }
}))


app.listen(port, () => {
    console.log("Service listening at http://127.0.0.1:${port}")
})