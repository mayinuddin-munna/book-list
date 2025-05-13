/* eslint-disable no-console */
import app from './app';
import config from './app/config';

function main() {
  try {
    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
