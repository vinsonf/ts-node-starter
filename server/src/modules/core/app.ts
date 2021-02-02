import Express from 'express';
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import nodeSassMiddleware from "node-sass-middleware";
import indexRouter from "../../routes";
import usersRouter from "../../routes/users";
import {rootPath} from "../../root";
import apiRouter from "../../routes/api";
import {SERVER_MESSAGES} from "../../../../shared/dist";
import cors from 'cors';
export const app = Express();
console.log(SERVER_MESSAGES);


app.use(cors({origin: [
        "http://localhost:4200"
    ], credentials: true}));
app.use(morgan('dev'));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(nodeSassMiddleware({
    src: path.join(rootPath, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(Express.static(path.join(rootPath, 'public')));
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
