import Express, {Router} from 'express';
const usersRouter: Router = Router();

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default usersRouter;
