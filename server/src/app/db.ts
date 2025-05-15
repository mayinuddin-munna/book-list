import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// export const getDBConnection = (async () => {
//   const db = await open({
//     filename: './dua_main.sqlite',
//     driver: sqlite3.Database,
//   });

//   const tables = await db.all(`
//     SELECT name FROM sqlite_master
//     WHERE type='table' ORDER BY name;
//   `);

//   console.log('Tables in the database:');
//   console.table(tables);
// })();

export const getDBConnection = async () => {
  return open({
    filename: './dua_main.sqlite',
    driver: sqlite3.Database,
  });
};
