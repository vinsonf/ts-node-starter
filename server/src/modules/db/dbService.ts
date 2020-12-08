import mongoose, {Connection} from "mongoose";
import {Truck} from "../models/trucks.model";

export class DbService {
    private db: Connection;
    constructor() {
        const uri: string = process.env.DB_URI || '';
        mongoose.connect(uri, {useNewUrlParser: true}).then(() => {
            console.log('connected');
        });
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function (){
            console.log('connected')
        });
    }
    getTrucks() {
        console.log('getting trucks ')
        return new Promise((resolve, reject) => {
            Truck.find({}).then( trucks => {
                resolve(trucks);
            }).catch((e) => reject(e))
        })
    }
}