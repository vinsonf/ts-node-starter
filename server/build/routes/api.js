"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiRouter = express_1.Router();
/* GET api listing. */
apiRouter.get('/*', function (req, res, next) {
    res.send('respond with a resource');
});
exports.default = apiRouter;
