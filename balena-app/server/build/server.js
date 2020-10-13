"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const app = express_1.default();
const PORT = 4000;
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static('public'));
}
else {
    app.use('/sockjs-node', http_proxy_middleware_1.createProxyMiddleware('/sockjs-node', {
        target: 'ws://localhost:3000',
        ws: true,
    }));
    app.use(express_http_proxy_1.default('http://localhost:3000'));
}
// start the express server
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map