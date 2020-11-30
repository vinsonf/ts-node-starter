import Express, {Router} from 'express';
import path from "path";
import {rootPath} from "../root";
const indexRouter: Router = Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.sendFile(path.join(rootPath,'public/index.html'));
});


export default indexRouter;
