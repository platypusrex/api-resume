import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from 'kcors';
import { port } from "./config";

const app = new Koa();

app
	.use(cors())
	.use(logger())
	.use(bodyParser())
	.use(async ctx => {
		ctx.body = 'Hello World!';
	});

app.listen(port, () => console.log(`The server is running at http://localhost:${port}/`));