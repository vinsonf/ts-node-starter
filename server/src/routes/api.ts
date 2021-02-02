import {Router} from 'express';
import {dbService} from "../modules/db/dbService";
const apiRouter: Router = Router();



apiRouter.post('/v1/public/login', function(req, res, next) {
    console.log('login', req.body);
    res.json({user: ''})
});

apiRouter.post('/v1/secure/users', async function(req, res, next) {
    console.log('POST: USERS', req.body)

    const users = await dbService.getUsers();
    res.json(users);
    console.log('POST: USERS', req.body)
});


apiRouter.post('/v1/secure/user-create', async function(req, res, next) {
    console.log('POST: user-create', req.body)

    const user = dbService.createUser(req.body);

    res.json(user);
});


apiRouter.post('/v1/secure/role-types', async function(req, res, next) {
    console.log('POST: role-type', req.body)

    const roleTypes = await dbService.getRoleTypes();
    res.json(roleTypes);
    console.log('POST: role-type', req.body)
});


/* GET api listing. */
apiRouter.get('/*', function(req, res, next) {
    res.json('respond with a resource');
});




export default apiRouter;
