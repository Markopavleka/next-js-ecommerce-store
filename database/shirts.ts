import { cache } from 'react';
import { sql } from './connect';

type Shirts = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export const getShirts = cache(async () => {
  const shirts = await sql<Shirts[]>`
  SELECT * FROM shirts
  `;
  return shirts;
});

export const getShirtById = cache(async (id: number) => {
  const [shirt] = await sql<Shirts[]>`
  SELECT
    *
  FROM
    shirts
  WHERE
    id = ${id}
`;
  return shirt;
});
