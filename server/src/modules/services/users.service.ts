import {User} from "../models/user.model";

class UserService {
    createNewUser(user: any) {
        return User.create(user);
    }

}
