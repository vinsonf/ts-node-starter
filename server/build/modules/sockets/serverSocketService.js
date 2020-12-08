"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSocketService = void 0;
var socket_io_1 = require("socket.io");
var dist_1 = require("../../../../shared/dist");
var dbService_1 = require("../db/dbService");
var ServerSocketService = /** @class */ (function () {
    function ServerSocketService(server) {
        this.data = {
            sockets: {},
        };
        this.db = new dbService_1.DbService();
        this.io = new socket_io_1.Server(server, { cors: {
                origin: '*'
            } });
        this.setupConnect();
    }
    ServerSocketService.prototype.setupConnect = function () {
        var _this = this;
        this.io.on(dist_1.CLIENT_MESSAGES.CONNECT, function (socket) {
            console.log(dist_1.CLIENT_MESSAGES.NAME, dist_1.CLIENT_MESSAGES.CONNECT, socket.id);
            _this.io.of('/').emit('server: someone connected', { data: _this.data });
            _this.setupDisconnect(socket);
            _this.setupGetTrucks(socket);
        });
    };
    ServerSocketService.prototype.setupDisconnect = function (socket) {
        var _this = this;
        socket.on(dist_1.CLIENT_MESSAGES.DISCONNECT, function () {
            console.log(dist_1.CLIENT_MESSAGES.NAME, dist_1.CLIENT_MESSAGES.DISCONNECT, socket.id);
            _this.io.of('/').emit('server: someone disconnected', { data: _this.data });
        });
    };
    ServerSocketService.prototype.saveSocket = function (socket) {
        this.data.sockets[socket.id] = '';
    };
    ServerSocketService.prototype.deleteSocket = function (socket) {
        delete this.data.sockets[socket.id];
    };
    ServerSocketService.prototype.setupGetTrucks = function (socket) {
        var _this = this;
        socket.on(dist_1.CLIENT_MESSAGES.GET_TRUCKS, function () {
            console.log(dist_1.CLIENT_MESSAGES.NAME, dist_1.CLIENT_MESSAGES.GET_TRUCKS, socket.id);
            _this.db.getTrucks().then(function (trucks) {
                socket.emit(dist_1.SERVER_MESSAGES.RES_TRUCKS, trucks);
            });
        });
    };
    return ServerSocketService;
}());
exports.ServerSocketService = ServerSocketService;
