"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var node_sass_middleware_1 = __importDefault(require("node-sass-middleware"));
var routes_1 = __importDefault(require("../../routes"));
var users_1 = __importDefault(require("../../routes/users"));
var root_1 = require("../../root");
var api_1 = __importDefault(require("../../routes/api"));
exports.app = express_1.default();
exports.app.use(morgan_1.default('dev'));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(cookie_parser_1.default());
exports.app.use(node_sass_middleware_1.default({
    src: path_1.default.join(root_1.rootPath, 'public'),
    dest: path_1.default.join(__dirname, 'public'),
    indentedSyntax: false,
    sourceMap: true
}));
exports.app.use(express_1.default.static(path_1.default.join(root_1.rootPath, 'public')));
exports.app.use('/api', api_1.default);
exports.app.use('/', routes_1.default);
exports.app.use('/users', users_1.default);
exports.default = exports.app;
