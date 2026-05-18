import app from "./server.js";
import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.PORT;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
