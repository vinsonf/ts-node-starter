import {Router} from 'express';
const apiRouter: Router = Router();

/* GET api listing. */
apiRouter.get('/*', function(req, res, next) {
    res.send('respond with a resource');
});

export default apiRouter;