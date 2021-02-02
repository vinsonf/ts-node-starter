import * as bcrypt from 'bcryptjs';

export default class Auth {

    public static hashPassword(password: string, rounds: number, callback: (error: Error, hash: string) => void) : void {
        bcrypt.hash(password, rounds, (error, hash) => {
            callback(error, hash);
        });
    }
}
