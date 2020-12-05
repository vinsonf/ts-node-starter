import {Server} from "socket.io";
import {Server as HttpServer} from "http";
import {CLIENT_MESSAGES} from "../../../../shared/dist";

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
        this.io.on(CLIENT_MESSAGES.CONNECT, (socket) => {
            console.log(
                CLIENT_MESSAGES.NAME,
                CLIENT_MESSAGES.CONNECT,
                socket.id
            );
            this.data.sockets[socket.id] = '';
            this.io.of('/').emit('server: someone connected', {data: this.data});
            socket.on(CLIENT_MESSAGES.DISCONNECT, () => {
                console.log(
                    CLIENT_MESSAGES.NAME,
                    CLIENT_MESSAGES.DISCONNECT,
                    socket.id
                );
                delete this.data.sockets[socket.id];
                this.io.of('/').emit('server: someone disconnected', {data: this.data})
            });
        });
    }
}


