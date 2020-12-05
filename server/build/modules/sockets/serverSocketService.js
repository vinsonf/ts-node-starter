"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSocketService = void 0;
var socket_io_1 = require("socket.io");
var ServerSocketService = /** @class */ (function () {
    function ServerSocketService(server) {
        this.data = {
            sockets: {},
        };
        this.io = new socket_io_1.Server(server, { cors: {
                origin: '*'
            } });
        this.setup();
    }
    ServerSocketService.prototype.setup = function () {
        var _this = this;
        this.io.on('connect', function (data) {
            console.log('connected', 'socketID', data.id);
        });
        this.io.on('connection', function (socket) {
            console.log('connected2', 'socketID', socket.id);
            _this.data.sockets[socket.id] = '';
            _this.io.of('/').emit('server: someone connected', { data: _this.data });
            socket.on('disconnect', function () {
                delete _this.data.sockets[socket.id];
                _this.io.of('/').emit('server: someone disconnected', { data: _this.data });
            });
        });
    };
    return ServerSocketService;
}());
exports.ServerSocketService = ServerSocketService;
