import mongoose, {Connection} from "mongoose";
import {Truck} from "../models/trucks.model";

import { sequelize } from './sequelizeConnection';

import {User} from '../models/user.model';
import {Profile} from '../models/profile.model';
import {RoleType} from "../models/role_type.model";





// Associations

// User
User.hasOne(Profile);
User.belongsTo(RoleType);
// Profile
Profile.belongsTo(User);




export class DbService {
    // private db: Connection;
    constructor() {
        const uri: string = process.env.DB_URI || '';
        // mongoose.connect(uri, {useNewUrlParser: true}).then(() => {
        //     console.log('connected');
        // });
        // this.db = mongoose.connection;
        // this.db.on('error', console.error.bind(console, 'connection error:'));
        // this.db.once('open', function (){
        //     console.log('connected')
        // });





        sequelize.sync({force: true}).then(async () => {
            console.log('user added');

            setTimeout( async() => {


                const roleType = await RoleType.create({
                    nicename: 'System Admin'
                })
                const user = await User.create({
                    email: 'jane',
                    // @ts-ignore
                    roleTypeId: roleType.id,
                });

                const profile = await Profile.create({
                    firstName: 'jane\'s profile',
                    // @ts-ignore
                    userId: user.id
                });



                // const users = await User.findAll({
                //     include: [Profile, RoleType],
                // });
                // users.forEach(user => console.log( user.toJSON()) );
                const users = await Profile.findAll({
                    include: [User],
                });
                users.forEach(user => console.log( user.toJSON()) );
                // await User.drop();

            }, 6000)

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
