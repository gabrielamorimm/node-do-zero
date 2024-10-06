import 'dotenv/config';
import postgres from 'postgres';  // Importando a biblioteca postgres

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

// Configura o client com SSL obrigatório para o Neon.tech
export const sql = postgres(URL, { ssl: 'require' });