import {Server} from "socket.io";
import {Server as HttpServer} from "http";

export class ServerSocketService {
    public io: Server;
    public data: any = {
        sockets: {},
    }
    constructor(server: HttpServer) {
        this.io = new Server(server, { cors: {
            origin: '*'
        }});
        this.setup();
    }

    setup() {
        this.io.on('connect', function (data) {
            console.log('connected', 'socketID', data.id);
        });
        this.io.on('connection', (socket) => {
            console.log('connected2', 'socketID', socket.id)
            this.data.sockets[socket.id] = '';
            this.io.of('/').emit('server: someone connected', {data: this.data});
            socket.on('disconnect', () => {
                delete this.data.sockets[socket.id];
                this.io.of('/').emit('server: someone disconnected', {data: this.data})
            });
        });
    }
}


