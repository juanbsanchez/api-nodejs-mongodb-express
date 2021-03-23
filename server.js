import express from 'express';
import router from "./src/routes/index.routes";

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Routes
app.use(router);

export default app;