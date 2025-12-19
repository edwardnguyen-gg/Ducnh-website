
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

// MOCK USER FOR DEVELOPMENT
const MOCK_USER = {
    id: '1',
    name: 'Admin User',
    email: 'admin@lecturer.com',
};

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    secret: "secret-key-change-me", // Hardcoded for dev stability
    trustHost: true,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;

                    // Simple mock check
                    if (email === 'admin@lecturer.com' && password === 'admin123') {
                        return MOCK_USER;
                    }
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
