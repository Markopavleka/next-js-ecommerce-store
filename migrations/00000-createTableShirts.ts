import { Sql } from 'postgres';

export type Shirts = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE shirts (
     id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     name VARCHAR(30) NOT NULL,
     description VARCHAR(30) NOT NULL,
     price NUMERIC(30) NOT NULL
     );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE shirts
  `;
}
