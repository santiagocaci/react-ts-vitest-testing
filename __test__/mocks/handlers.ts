import { TUser } from '@/types';
import { rest } from 'msw';

const users = [
  { name: 'Bruce Wayne' },
  { name: 'Clark Kent' },
  { name: 'Princess Diana' },
];

const followers: TUser[] = [
  {
    login: { username: 'badkitty' },
    name: { first: 'hello', last: 'kitty' },
    picture: { large: 'https://randomuser.me/api/portraits/women/10.jpg' },
  },
  {
    login: { username: 'goodkitty' },
    name: { first: 'bye', last: 'kitty' },
    picture: { large: 'https://randomuser.me/api/portraits/women/44.jpg' },
  },
  {
    login: { username: 'boreddog' },
    name: { first: 'firu', last: 'lais' },
    picture: { large: 'https://randomuser.me/api/portraits/women/37.jpg' },
  },
  {
    login: { username: 'turip ip ip' },
    name: { first: 'rust', last: 'lais' },
    picture: { large: 'https://randomuser.me/api/portraits/women/37.jpg' },
  },
  {
    login: { username: 'milaneso' },
    name: { first: 'go', last: 'lang' },
    picture: { large: 'https://randomuser.me/api/portraits/women/37.jpg' },
  },
];

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(users))
  ),
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    const response: { results: TUser[] } = { results: [] };
    const result = req.url.searchParams.get('results');
    console.log(result);

    if (result === '5') response.results = followers;

    return res(ctx.status(200), ctx.json(response));
  }),
];
