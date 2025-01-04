import { signInSupabase } from "@/utils/supabase";
import NextAuth, { User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'

interface CustomUser extends NextAuthUser {
  accessToken?: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        console.log('Credentials', credentials)
        const {data} = await signInSupabase({
          email: credentials?.email ?? '', 
          password: credentials?.password ?? ''
        });
        if (typeof data !== 'string' && data.user) 
          return { ...data.user, accessToken: data.session.access_token };

        return null;
      }
    }),
    GoogleProvider({
      name: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as CustomUser;
        token.accessToken = customUser.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };