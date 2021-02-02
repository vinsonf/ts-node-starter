import mongoose, {Connection} from "mongoose";

import { sequelize } from './sequelizeConnection';

import {Account} from '../models/account.model';
import {Profile} from '../models/profile.model';
import {Property} from "../models/property.model";
import {PropertyManager} from "../models/property_manager.model";
import {RoleType} from "../models/role_type.model";
import {SubAccount} from "../models/sub_account.model";
import {User} from '../models/user.model';

// Associations
// User
User.hasOne(Profile);
User.hasOne(Account);
User.belongsTo(RoleType);
// Profile
Profile.belongsTo(User);
// Property
Property.belongsTo(Account);
// Account
Account.hasOne(User);
Account.hasMany(SubAccount);
Account.hasMany(Property);
//PropertyManager
PropertyManager.hasMany(Property)


export class DbService {
    // private db: Connection;
    constructor() {
        const uri: string = process.env.DB_URI || '';

    }

    sync() {
        sequelize.sync({force: true}).then(async () => {
                console.log('SYNC SUCCESS');

            setTimeout( async() => {

               /* [
                    {
                        nicename: 'System Admin',
                        type: 'SYSTEM_ADMIN',
                        enable_notification: true
                    },
                    {
                        nicename: 'Department Supervisor',
                        type: 'DEPARTMENT_SUPER',
                        enable_notification: true
                    },
                    {
                        nicename: 'Department Employee',
                        type: 'DEPARTMENT_EMPLOYEE',
                        enable_notification: true
                    },
                    {
                        nicename: 'Administrative Assistant',
                        type: 'ADMIN_ASSIST',
                        enable_notification: true
                    },
                    {
                        nicename: 'Property Owner',
                        type: 'PROPERTY_OWNER',
                        enable_notification: true
                    },
                    { nicename: 'Agent', type: 'AGENT', enable_notification: true },
                    {
                        nicename: 'Community Partner',
                        type: 'COMMUNITY_PARTNER',
                        enable_notification: true
                    }
                ]

                */


                const admin = await RoleType.create({
                    nicename: 'System Admin',
                    type: 'SYSTEM_ADMIN',
                });
                const ds = await RoleType.create({
                    nicename: 'Department Supervisor',
                    type: 'DEPARTMENT_SUPER',
                });
                const de = await RoleType.create({
                    nicename: 'Department Employee',
                    type: 'DEPARTMENT_EMPLOYEE',
                });
                const aa = await RoleType.create({
                    nicename: 'Administrative Assistant',
                    type: 'ADMIN_ASSIST',
                });
                const po = await RoleType.create({
                    nicename: 'Property Owner',
                    type: 'PROPERTY_OWNER',
                });
                const cp = await RoleType.create({
                    nicename: 'Community Partner',
                    type: 'COMMUNITY_PARTNER',
                });

                const user = await User.create({
                    email: 'jane',
                    // @ts-ignore
                    roleTypeId: admin.id,
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
            // Truck.find({}).then( trucks => {
            //     resolve(trucks);
            // }).catch((e) => reject(e))
            resolve([]);
        })
    }

    async getUsers() {
        const users = await User.findAll({
            include: [Profile, RoleType],
        });
        console.log('user', users);
        return users;
    }

    async createUser(body: any) {

        const user = await User.create({
            email: body.email,
            // @ts-ignore
            roleTypeId: Number(body.roleType),
        });

        const profile = await Profile.create({
            firstName: body.firstName,
            lastName: body.lastName,
            // @ts-ignore
            userId: user.id
        });
        return user;
    }
    async getRoleTypes() {
        const roleTypes = await RoleType.findAll({
        });
        console.log('roleTypes', roleTypes);
        return roleTypes;
    }
}


export const dbService = new DbService();
