import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const getDBConnection = async () => {
  return open({
    filename: '../../dua_main.sqlite', // ensure it's at root level
    driver: sqlite3.Database,
  });
};
