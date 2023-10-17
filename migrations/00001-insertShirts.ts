import { Sql } from 'postgres';

export const shirts = [
  {
    id: 1,
    name: 'miniLogoWhite',
    description: 'Mini Logo White',
    price: 48,
  },
  {
    id: 2,
    name: 'miniLogoBlack',
    description: 'Mini Logo Black',
    price: 36,
  },
  {
    id: 3,
    name: 'miniLogoPurple',
    description: 'Mini Logo Purple',
    price: 40,
  },
  {
    id: 4,
    name: 'logoWhite',
    description: 'Logo White',
    price: 35,
  },
  {
    id: 5,
    name: 'logoBlack',
    description: 'Logo Black',
    price: 35,
  },
  {
    id: 6,
    name: 'logoPurple',
    description: 'Logo Purple',
    price: 30,
  },
];

export async function up(sql: Sql) {
  for (const shirt of shirts) {
    await sql`
      INSERT INTO shirts
        (name, description, price)
      VALUES
        (${shirt.name}, ${shirt.description}, ${shirt.price})
  `;
  }
}

export async function down(sql: Sql) {
  for (const shirt of shirts) {
    await sql`
      DELETE FROM shirts WHERE id = ${shirt.id}
    `;
  }
}
