import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('mi-ruta.db');

export default db;