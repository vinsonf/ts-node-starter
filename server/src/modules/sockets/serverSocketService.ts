import {Server, Socket} from "socket.io";
import {Server as HttpServer} from "http";
import {CLIENT_MESSAGES, SERVER_MESSAGES} from "../../../../shared/dist";
import {DbService, dbService} from "../db/dbService";

export class ServerSocketService {
    public io: Server;
    public db: DbService;
    public data: any = {
        sockets: {},
    }
    constructor(server: HttpServer) {
        this.db = dbService;
        this.io = new Server(server, { cors: {
            origin: '*'
        }});
        this.setupConnect();
    }

    setupConnect() {
        this.io.on(CLIENT_MESSAGES.CONNECT, (socket) => {
            console.log(
                CLIENT_MESSAGES.NAME,
                CLIENT_MESSAGES.CONNECT,
                socket.id
            );

            this.io.of('/').emit('server: someone connected', {data: this.data});
            this.setupDisconnect(socket);
            this.setupGetTrucks(socket);
        });
    }

    setupDisconnect(socket: Socket) {
        socket.on(CLIENT_MESSAGES.DISCONNECT, () => {
            console.log(
                CLIENT_MESSAGES.NAME,
                CLIENT_MESSAGES.DISCONNECT,
                socket.id
            );
            this.io.of('/').emit('server: someone disconnected', {data: this.data})
        });
    }
    saveSocket(socket: Socket) {
        this.data.sockets[socket.id] = '';
    }

    deleteSocket(socket: Socket){
        delete this.data.sockets[socket.id];
    }

    setupGetTrucks(socket: Socket) {
        socket.on(CLIENT_MESSAGES.GET_TRUCKS, () => {
            console.log(
                CLIENT_MESSAGES.NAME,
                CLIENT_MESSAGES.GET_TRUCKS,
                socket.id
            );
            this.db.getTrucks().then((trucks) => {
                socket.emit(SERVER_MESSAGES.RES_TRUCKS, trucks)
            });
        });
    }
}


