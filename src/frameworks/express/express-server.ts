import express from 'express';
import cors from 'cors';
import Routes  from './routes';

  const app: express.Application = express();
  app.use(cors());
  app.use(express.json());
  app.use('/api', Routes);

export default app;




// async function startServer(PORT:  number) {
//   const app: express.Application = express();
//   app.use(cors());
//   app.use(express.json());
//
//   // const server =  app.listen(PORT, () => {
//   //   console.log("⚡️[server]: Server is running at http://localhost:" + PORT);
//   // });
//   // Send message for default URL
//   app.use('/api', Routes);
//   return app;
// }
//
//
// export default {
//   startServer
// }
