import {compare, genSalt, hash as bHash} from 'bcryptjs';

const SALT_WORK_FACTOR = 10;

class AuthService {
    passwordHashString(candidatePassword: string) {
        return new Promise(function(resolve, reject) {
            genSalt(SALT_WORK_FACTOR, function(err: Error, salt: string) {
                if (err) {
                    reject(err);
                }
                bHash(candidatePassword, salt, function(errorHash: Error, hash: string) {
                    if (errorHash) {
                        reject(errorHash);
                    }
                    resolve(hash);
                });
            });
        });
    }
    passwordCompareToHash(candidatePassword: string, hash: string) {
        return new Promise((resolve, reject) => {
            compare(candidatePassword, hash, function(err: Error, isMatch: boolean) {
                if (err) {
                    reject(err);
                }
                resolve(isMatch);
            });
        });
    }
}

export const authService = new AuthService();
