import { Elysia } from 'elysia';
import { elysiaHelmet } from 'elysiajs-helmet';
import { cors } from '@elysiajs/cors';

const app = new Elysia()
    .use(elysiaHelmet())
    .use(cors({
        origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
        credentials: true,
    }))
    .listen(3000);

console.log('☣️ Umbrella Corp System running on port 3000');