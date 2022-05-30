/* eslint-disable import/extensions */
/* eslint-disable no-console */
import app from './app.js';

const serverPort = process.env.SERVER_PORT || 9002;

try {
  app.listen(serverPort, () => {
    console.log(`Server is listening on port ${serverPort}`);
  });
} catch (error) {
  console.error(error);
  process.exit();
}
