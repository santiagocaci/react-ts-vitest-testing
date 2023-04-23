import { rest } from 'msw';

const users = [
  { name: 'Bruce Wayne' },
  { name: 'Clark Kent' },
  { name: 'Princess Diana' },
];

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(users))
  ),
];
