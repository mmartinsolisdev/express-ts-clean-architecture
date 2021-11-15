import * as dotenv from "dotenv";
import db from './frameworks/mongodb/mongoose';
import app from './frameworks/express/express-server';

dotenv.config();
if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
 }
const PORT: number = parseInt(process.env.PORT as string, 10);

//Load app only if db is alive
db.connectMongoDB(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASS as string).
then(() => {
  //Start Express Server
  app.listen(PORT, () => {
      console.log("⚡️[server]: Server is running at http://localhost:" + PORT);
    });

}).catch((error: Error) => {
  console.log("Cannot connect to database");
});
