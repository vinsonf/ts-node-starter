import {Router} from 'express';
import {dbService} from "../modules/db/dbService";
const apiRouter: Router = Router();


/* GET api listing. */
apiRouter.get('/*', function(req, res, next) {
    res.send('respond with a resource');
});

apiRouter.post('/v1/public/login', function(req, res, next) {
    console.log('login', req.body)
    res.json([]);
});

apiRouter.post('/v1/secure/users', async function(req, res, next) {
    console.log('POST: USERS', req.body)

    const users = await dbService.getUsers();
    res.json(users);
    console.log('POST: USERS', req.body)
});


export default apiRouter;
